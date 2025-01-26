import { post, get } from "../use-case";
const baseUrl = "/api/v1/document";

//Get document
const getDocumentEP = async (req, res) => {
  try {
    const results = await get({ params: req.params });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(400).json({ err: 1, data: { err } });
  }
};

//Create a document
const createDocumentEP = async (req, res) => {
  try {
    const results = await post({ params: req.body });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(201).json({ err: 1, data: err.message });
  }
};

//API Routes
const routes = [
  {
    path: `${baseUrl}/:parentFolderId?`,
    method: "get",
    component: getDocumentEP,
  },

  { path: `${baseUrl}/`, method: "post", component: createDocumentEP },
];

export { routes };
