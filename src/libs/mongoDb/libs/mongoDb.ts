export default function makeDB({ dbClient }) {
  return Object.freeze({
    insertOneDocument,
    findDocuments,
    updateDocument,
    deleteDocument,
    dropDb,
  });

  async function insertOneDocument({ document, dbName, dbUri, dbColl }) {
    const db = new dbClient({ dbName, dbUri, dbColl });
    const results = await db.insertDocument({ document });

    return results;
  }

  async function updateDocument({ query, values, dbName, dbUri, dbColl }) {
    const db = new dbClient({ dbName, dbUri, dbColl });
    const results = await db.updateDocument({ query, values });

    return results;
  }

  async function deleteDocument({ query, values, dbName, dbUri, dbColl }) {
    const db = new dbClient({ dbName, dbUri, dbColl });
    const results = await db.deleteDocument({ query, values });

    return results;
  }

  async function findDocuments({ query, dbName, dbUri, dbColl }) {
    const db = new dbClient({ dbName, dbUri, dbColl });
    const results = await db.findDocumentsByQuery({ query });
    return results;
  }

  async function dropDb({ test, dbName, dbUri, dbColl }) {
    if (!test) return;
    const db = new dbClient({ dbName, dbUri, dbColl });
    const results = db.dropDB();

    return results;
  }
}
