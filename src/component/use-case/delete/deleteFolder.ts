export default function createDeleteFolder({
  deleteDocument,
  getAllFiles,
  deleteFile,
  getParentFolders,
}) {
  return Object.freeze({ deleteFolder });

  async function deleteFolder({ params, dbConfig, awsConfig }) {
    const { folderId } = params;
    if (!folderId) {
      throw new Error("Missing required params");
    }

    //Delete all files in a folder
    const deleteFiles = async (parentId: string) => {
      const files = await getAllFiles({
        parentFolderId: parentId,
        dbConfig,
        awsConfig,
      });
      if (!files) return;

      //Iterate all files and delete
      for (const file of files) {
        await deleteFile({
          params: {
            documentId: file.id,
            key: file.key,
            parentFolderId: file.parentFolderId,
          },
          dbConfig,
          awsConfig,
        });
      }
    };

    //Recursive function to delete all folders and children
    const deleteChildren = async (parentId: string) => {
      await deleteFiles(parentId);

      const folders = await getParentFolders({ folderId: parentId, dbConfig });
      if (!folders) return;

      for (const folder of folders) {
        await deleteChildren(folder.id);
        await deleteFiles(folder.id);

        await deleteDocument({ query: { id: folder.id }, dbConfig });
      }
    };

    await deleteChildren(folderId);
    await deleteDocument({ query: { id: folderId } }, dbConfig);

    return {
      success: true,
      message: `Folder with ID ${folderId} and its contents deleted successfully`,
    };
  }
}
