import { MongoClient } from "mongodb";
class mongoDBClient {
  dbName;
  dbUri;
  dbColl;
  db;
  connection;

  constructor({ dbName, dbUri, dbColl }) {
    this.dbName = dbName;
    this.dbUri = dbUri;
    this.dbColl = dbColl;
  }

  async connect() {
    const connection = await MongoClient.connect(this.dbUri);
    this.db = connection.db();
    console.log("Connected to DB");
    return;
  }

  async findDocumentsByQuery({ query }) {
    console.log(`[MONGODB] Find document by query: ${query}`);
    await this.connect();
    const results = await this.db
      .collection(this.dbColl)
      .find(query)
      .toArray();
    this.close();
    return results;
  }

  async insertDocument({ document }) {
    if (!isObject(document)) {
      throw new Error(
        "[MONGODB] insertDocumentWithIndex: document is not an object"
      );
    }
    await this.connect();
    const results = await this.db.collection(this.dbColl).insertOne(document);
    this.close();
    return results;
  }

  async updateDocument({ query, values }) {
    if (!(isObject(values) && isObject(query))) {
      throw Error(
        "mongoClient.upsert: values, query and option should be an object."
      );
    }
    console.log(`[MONGODB] ${query} modified successfully.`);
    await this.connect();
    const res = await this.db
      .collection(this.dbColl)
      .updateOne(query, values || {});

    this.close();
    return res;
  }

  async deleteDocument({ query, values }) {
    if (!isObject(values) && isObject(query)) {
      throw Error(
        "mongoClient.delete: values, query and option should be an object."
      );
    }

    console.log(`[MONGODB] Deleting document with query: ${query}`);
    await this.connect();
    const res = await this.db.collection(this.dbColl).deleteOne(query);
    this.close();
    return res;
  }

  async close() {
    if (this.connection) this.connection.close();
    console.log(`[MONGODB] Connection closed...`);
    return;
  }

  async dropDB() {
    console.log(`[MONGODB] Dropping DB ${this.dbName}...`);
    await this.connect();
    await this.db.dropDatabase();
    console.log(`[MONGODB] Dropped DB ${this.dbName}`);
    return;
  }
}

function isObject(obj) {
  return Object.keys(obj).length > 0 && obj.constructor === Object;
}

export default mongoDBClient;
