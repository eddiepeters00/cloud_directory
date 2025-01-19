import dotenv from "dotenv";
dotenv.config();

const NODE_HOSTNAME = process.env.NODE_HOSTNAME;
const NODE_PORT = process.env.NODE_PORT;

const MONGO_DB_URL = process.env.MONGODB_DB_URL;
const MONGO_DB_NAME = process.env.MONGODB_DB_NAME;
const MONGO_DB_COLLECTION = process.env.MONGODB_DB_COLLECTION;

const DB_CONFIG = {
  dbName: `${MONGO_DB_NAME}`,
  dbUri: `${MONGO_DB_URL}/${MONGO_DB_NAME}`,
  dbColl: `${MONGO_DB_COLLECTION}`,
};

export default Object.freeze({
  NODE_HOSTNAME,
  NODE_PORT,
  DB_CONFIG,
});
