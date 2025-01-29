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

//GET
const getAllFiles = ({ params }) =>
  createGetAllFiles({
    findDocuments,
    fileDownload,
  }).getAllFiles({
    params,
    dbConfig,
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
