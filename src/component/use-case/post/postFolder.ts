export default function createPostFolder({ insertDocument }) {
  return Object.freeze(postFolder);

  async function postFolder({ params, dbConfig }) {
    const { name, parentFolderId, createdBy } = params;
    if (!name || !createdBy) {
      throw new Error("Missing required params");
    }

    const folder = {
      name,
      parentFolderId,
      createdBy,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return await insertDocument({
      data: folder,
      collection: "folders",
      dbConfig,
    });
  }
}
