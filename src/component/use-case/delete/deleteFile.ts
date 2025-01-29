export default function createDeleteFile({ fileDelete, deleteDocument }) {
  return Object.freeze({ deleteFile });

  async function deleteFile({ params, dbConfig, awsConfig }) {
    const { documentId, key } = params;
    if (!documentId || !key) {
      throw new Error("Missing required params");
    }

    try {
      //Delete file from AWS
      await fileDelete({ key, awsConfig });

      //Delete from DB
      await deleteDocument({
        query: { id: documentId },
        dbConfig,
      });
    } catch {
      throw new Error("Could not delete this file");
    }
  }
}
