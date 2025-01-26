import createPost from "./post";
import createGet from "./get";
import config from "../../config";
import { insertDocument, findDocuments } from "../../data-access";
const dbConfig = config.DB_CONFIG;

const get = ({ params }) =>
  createGet({
    findDocuments,
  }).get({
    params,
    dbConfig,
  });

const post = ({ params }) =>
  createPost({
    insertDocument,
    findDocuments,
    get,
  }).post({
    params,
    dbConfig: config.DB_CONFIG,
  });

export { post, get };
