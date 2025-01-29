import { getAllFiles, getAllFolders } from "../use-case";
const baseUrl = "/api/v1/document";

//Get all files
const getAllFilesEP = async (req, res) => {
  try {
    const results = await getAllFiles({ parentFolderId: req.params });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(400).json({ err: 1, data: { err } });
  }
};

//Get all folders
const getAllFoldersEP = async (req, res) => {
  try {
    const results = await getAllFolders({ parentFolderId: req.params });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(400).json({ err: 1, data: { err } });
  }
};

// //Create a document
// const createDocumentEP = async (req, res) => {
//   try {
//     const results = await post({ params: req.body });
//     res.json({ err: 0, data: results });
//   } catch (err) {
//     res.status(201).json({ err: 1, data: err.message });
//   }
// };

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

  // { path: `${baseUrl}/`, method: "post", component: createDocumentEP },
];

export { routes };
