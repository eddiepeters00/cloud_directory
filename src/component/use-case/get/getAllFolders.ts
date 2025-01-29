export default function createGetAllFolders({ findDocuments }) {
  return Object.freeze({ getAllFolders });

  async function getAllFolders({ params, dbConfig }) {
    const { parentFolderId } = params;
    return await findDocuments({
      query: { parentFolderId },
      collection: "folders",
      dbConfig,
    });
  }
}
