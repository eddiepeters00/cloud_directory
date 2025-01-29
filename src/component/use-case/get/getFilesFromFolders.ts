export default function createGetFilesFromFolder({
  getAllFiles,
  getAllFolders,
}) {
  return Object.freeze({ getFilesFromFolder });

  async function getFilesFromFolder({ params, dbConfig }) {
    const { id } = params;
    const getFilesFromParentOrFalse = async (parentId: string) => {
      const filesFromParent = await getAllFiles(parentId, dbConfig);
      if (!filesFromParent) return false;
      return filesFromParent;
    };

    const getFoldersFromParentOrFalse = async (parentId: string) => {
      const foldersFromParent = await getAllFolders(parentId, dbConfig);
      if (!foldersFromParent) return false;
      return foldersFromParent;
    };

    async function getFilesRecursive(
      parentId: string,
      files: Awaited<ReturnType<typeof getFilesFromParentOrFalse>>
    ) {
      const filesFromParentOrFalse = await getFilesFromParentOrFalse(parentId);
      if (filesFromParentOrFalse && files)
        files.push(...filesFromParentOrFalse);

      const foldersFromParentOrFalse = await getFoldersFromParentOrFalse(
        parentId
      );

      if (!foldersFromParentOrFalse) return false;

      for (const folder of foldersFromParentOrFalse) {
        await getFilesRecursive(folder.id, files);
      }
      return files;
    }

    return await getFilesRecursive(id, []);
  }
}
