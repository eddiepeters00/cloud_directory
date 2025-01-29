export default function createGetAllFolders({ findDocuments }) {
  return Object.freeze({ getAllFolders });

  async function getAllFolders({ parentFolderId, dbConfig }) {
    return await findDocuments({
      query: { parentFolderId },
      collection: "folders",
      dbConfig,
    });
  }
}
