import dotenv from "dotenv";
dotenv.config();

//Node
const NODE_HOSTNAME = process.env.NODE_HOSTNAME;
const NODE_PORT = process.env.NODE_PORT;

//MongoDB
const MONGO_DB_URL = process.env.MONGODB_DB_URL;
const MONGO_DB_NAME = process.env.MONGODB_DB_NAME;
const MONGO_DB_COLLECTION = process.env.MONGODB_DB_COLLECTION;
const DB_CONFIG = {
  dbName: `${MONGO_DB_NAME}`,
  dbUri: `${MONGO_DB_URL}/${MONGO_DB_NAME}`,
  dbColl: `${MONGO_DB_COLLECTION}`,
};

//AWS
const AWS_DEFAULT_REGION = process.env.AWS_DEFAULT_REGION;
const AWS_BUCKET = process.env.AWS_CLOUD_DIRECTORY_BUCKET;
const AWS_CONFIG = {
  region: `${AWS_DEFAULT_REGION}`,
  bucket: `${AWS_BUCKET}`,
};

//Error messages
const ERROR_MSG = {
  post: {
    MISSING_PARAMETER: "missing parameter: ",
  },
};

export default Object.freeze({
  NODE_HOSTNAME,
  NODE_PORT,
  DB_CONFIG,
  AWS_CONFIG,
  ERROR_MSG,
});
