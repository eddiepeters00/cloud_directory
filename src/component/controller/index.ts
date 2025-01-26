import { post, get } from "../use-case";
const baseUrl = "/api/v1/document";

const getFileEP = async (req, res) => {
  try {
    const results = await get({ params: req.params });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(403);
    res.json({ err: 1, data: { err } });
  }
};

const getFolderEP = async (req, res) => {
  try {
    const results = await get({ params: req.body });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(403);
    res.json({ err: 1, data: err.message });
  }
};

const postFileEP = async (req, res) => {
  try {
    const results = await post({ params: req.body });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(403);
    res.json({ err: 1, data: err.message });
  }
};

const postFolderEP = async (req, res) => {
  try {
    const results = await post({ params: req.body });
    res.json({ err: 0, data: results });
  } catch (err) {
    res.status(403);
    res.json({ err: 1, data: err.message });
  }
};

const routes = [
  {
    path: `${baseUrl}/:file?`,
    method: "get",
    component: getFileEP,
  },
  {
    path: `${baseUrl}/:folder?`,
    method: "post",
    component: getFolderEP,
  },
  { path: `${baseUrl}/file`, method: "post", component: postFileEP },
  { path: `${baseUrl}/folder`, method: "post", component: postFolderEP },
];

export { routes };
