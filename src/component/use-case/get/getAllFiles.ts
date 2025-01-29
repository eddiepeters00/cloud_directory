export default function createGetAllFiles({ findDocuments, fileDownload }) {
  return Object.freeze({ getAllFiles });

  async function getAllFiles({ params, dbConfig, awsConfig }) {
    const { parentFolderId } = params;
    const files = await findDocuments({
      query: { parentFolderId },
      collection: "files",
      dbConfig,
    });

    if (fileDownload) {
      for (const file of files) {
        file.downloadUrl = await fileDownload(file.key, awsConfig);
      }
    }

    return files;
  }
}
