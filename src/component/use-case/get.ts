export default function createGet({ findDocuments }) {
  return Object.freeze({ get });

  async function get({ params, dbConfig }) {
    Object.keys(params).forEach(
      (key) => params[key] === undefined && delete params[key]
    );

    if (Object.values(params).length) {
      params = {};

      Object.keys(params).forEach(
        (key) => params[key] === undefined && delete params[key]
      );
    }

    const dbResults = await findDocuments({ query: params, dbConfig });

    const results = dbResults.map((post) => {
      return {
        post,
      };
    });

    return results;
  }
}
