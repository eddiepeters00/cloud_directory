import {
  deleteObject,
  signedUrlForDownload,
  signedUrlForUpload,
} from "../libs/aws/S3";
import {
  insertOneDocument,
  updateDocument as makeUpdateDocument,
  findDocuments as makeFindDocuments,
  deleteDocument as makeDeleteDocument,
} from "../libs/mongoDb";

//Data access to database
const insertDocument = ({ document, dbConfig }) =>
  insertOneDocument({ document, ...dbConfig });

const updateDocument = ({ query, values, dbConfig }) =>
  makeUpdateDocument({ query, values, ...dbConfig });

const findDocuments = ({ query, dbConfig }) =>
  makeFindDocuments({ query, ...dbConfig });

const deleteDocument = ({ query, dbConfig }) =>
  makeDeleteDocument({ query, ...dbConfig });

//Data access to cloud
const fileUpload = ({ key, awsConfig }) =>
  signedUrlForUpload({ key, ...awsConfig });

const fileDownload = ({ key, awsConfig }) =>
  signedUrlForDownload({ key, ...awsConfig });

const fileDelete = ({ key, awsConfig }) => deleteObject({ key, ...awsConfig });

export {
  findDocuments,
  insertDocument,
  updateDocument,
  deleteDocument,
  fileUpload,
  fileDownload,
  fileDelete,
};
