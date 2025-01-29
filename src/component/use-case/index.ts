import {
  createGetAllFiles,
  createGetAllFolders,
  createGetFilesFromFolder,
  createGetParentFolders,
} from "./get";
import config from "../../config";
import {
  findDocuments,
  fileDownload,
  fileUpload,
  fileDelete,
  insertDocument,
  deleteDocument,
} from "../../data-access";
import { createPostFile, createPostFolder } from "./post";
import { createDeleteFile, createDeleteFolder } from "./delete";
const dbConfig = config.DB_CONFIG;
const awsConfig = config.AWS_CONFIG;

//GET
const getAllFiles = ({ params }) =>
  createGetAllFiles({
    findDocuments,
    fileDownload,
  }).getAllFiles({
    params,
    dbConfig,
    awsConfig,
  });

const getAllFolders = ({ params }) =>
  createGetAllFolders({
    findDocuments,
  }).getAllFolders({
    params,
    dbConfig,
  });

const getAllFilesFromFolder = ({ params }) =>
  createGetFilesFromFolder({
    getAllFiles,
    getAllFolders,
  }).getFilesFromFolder({
    params,
    dbConfig,
    awsConfig,
  });

const getParentFolders = ({ params }) =>
  createGetParentFolders({
    getAllFolders,
  }).getParentFolders({
    params,
    dbConfig,
  });

//POST
const postFile = ({ params }) =>
  createPostFile({
    fileUpload,
    insertDocument,
  }).postFile({
    params,
    dbConfig,
    awsConfig,
  });

const postFolder = ({ params }) =>
  createPostFolder({
    insertDocument,
  })({ params, dbConfig });

//DELETE
const deleteFile = ({ params }) =>
  createDeleteFile({
    deleteDocument,
    fileDelete,
  }).deleteFile({
    params,
    dbConfig,
    awsConfig,
  });

const deleteFolder = ({ params }) =>
  createDeleteFolder({
    deleteDocument,
    deleteFile,
    getAllFiles,
    getParentFolders,
  }).deleteFolder({
    params,
    dbConfig,
    awsConfig,
  });

export {
  getAllFiles,
  getAllFolders,
  getParentFolders,
  getAllFilesFromFolder,
  postFile,
  postFolder,
  deleteFile,
  deleteFolder,
};
