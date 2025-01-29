import {
  getAllFiles,
  getAllFolders,
  postFile,
  postFolder,
  deleteFile,
  deleteFolder,
} from "../use-case";
const baseUrl = "/api/v1/document";

//Get all files
const getAllFilesEP = async (req, res) => {
  try {
    const results = await getAllFiles({ params: req.params });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(400).json({ err: 1, data: { err } });
  }
};

//Get all folders
const getAllFoldersEP = async (req, res) => {
  try {
    const results = await getAllFolders({ params: req.params });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(400).json({ err: 1, data: { err } });
  }
};

//Create a file
const postFileEP = async (req, res) => {
  try {
    const results = await postFile({
      params: req.body,
    });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(201).json({ err: 1, data: err.message });
  }
};

//Create a folder
const postFolderEP = async (req, res) => {
  try {
    const results = await postFolder({
      params: req.body,
    });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(201).json({ err: 1, data: err.message });
  }
};

//Delete a file
const deleteFileEP = async (req, res) => {
  try {
    const results = await deleteFile({
      params: req.body,
    });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(201).json({ err: 1, data: err.message });
  }
};

//Delete a folder
const deleteFolderEP = async (req, res) => {
  try {
    const results = await deleteFolder({
      params: req.body,
    });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(201).json({ err: 1, data: err.message });
  }
};

//API Routes
const routes = [
  {
    path: `${baseUrl}files/:parentFolderId?`,
    method: "get",
    component: getAllFilesEP,
  },
  {
    path: `${baseUrl}folders/:parentFolderId?`,
    method: "get",
    component: getAllFoldersEP,
  },

  { path: `${baseUrl}/new/file`, method: "post", component: postFileEP },
  { path: `${baseUrl}/new/folder`, method: "post", component: postFolderEP },

  {
    path: `${baseUrl}/files/:documentId`,
    method: "delete",
    component: deleteFileEP,
  },
  {
    path: `${baseUrl}/folders/:folderId`,
    method: "delete",
    component: deleteFolderEP,
  },
];

export { routes };
