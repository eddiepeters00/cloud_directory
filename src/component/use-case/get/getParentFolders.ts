export default function createGetParentFolders({ getAllFolders }) {
  return Object.freeze({ getParentFolders });

  async function getParentFolders({ params, dbConfig }) {
    const { folderId } = params;
    const getCurrentFolder = async (folderId: string) => {
      return await getAllFolders(folderId, dbConfig);
    };

    const payLoad: {
      id: string;
      name: string;
      parentFolderId: string | null;
    }[] = [];

    const recurseFolderTree = async (
      folderId: string
    ): Promise<{
      id: string;
      name: string;
      parentFolderId: string | null;
    }[]> => {
      const folder = await getCurrentFolder(folderId);
      payLoad.push(folder[0]);
      if (folder[0].parentFolderId === null) return payLoad.reverse();
      return await recurseFolderTree(folder[0].parentFolderId);
    };

    return await recurseFolderTree(folderId);
  }
}
