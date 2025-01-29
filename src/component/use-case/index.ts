import {
  createGetAllFiles,
  createGetAllFolders,
  createGetFilesFromFolder,
  createGetParentFolders,
} from "./get";
import config from "../../config";
import { findDocuments, fileDownload } from "../../data-access";
const dbConfig = config.DB_CONFIG;

const getAllFiles = ({ parentFolderId }) =>
  createGetAllFiles({
    findDocuments,
    fileDownload,
  }).getAllFiles({
    parentFolderId,
    dbConfig,
  });

const getAllFolders = ({ parentFolderId }) =>
  createGetAllFolders({
    findDocuments,
  }).getAllFolders({
    parentFolderId,
    dbConfig,
  });

const getAllFilesFromFolder = ({ id }) =>
  createGetFilesFromFolder({
    getAllFiles,
    getAllFolders,
  }).getFilesFromFolder({
    id,
    dbConfig,
  });

const getParentFolders = ({ folderId }) =>
  createGetParentFolders({
    getAllFolders,
  }).getParentFolders({
    folderId,
    dbConfig,
  });

export { getAllFiles, getAllFolders, getParentFolders, getAllFilesFromFolder };
