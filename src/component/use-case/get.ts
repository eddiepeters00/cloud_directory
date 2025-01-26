export default function createGet({ findDocuments }) {
  return Object.freeze({ get });

  async function get({ params, dbConfig }) {
    Object.keys(params).forEach(
      (key) => params[key] === undefined && delete params[key]
    );

    if (Object.values(params).length) {
      const { parentFolderId } = params;

      if (!parentFolderId) {
        throw new Error("");
      }

      Object.keys(params).forEach(
        (key) => params[key] === undefined && delete params[key]
      );
    }

    const files = await findDocuments({ query: params, dbConfig });

    return { files };
  }
}
