export default function createPost({ findDocuments, insertDocument, get }) {
  return Object.freeze({ post });

  async function post({ params, dbConfig }) {
    const query = {};
    const checkDuplicate = await findDocuments({ query, dbConfig });

    //Check for duplicates
    console.log(checkDuplicate);
    console.log(params);

    insertDocument();

    const inserted = get({ params: {} });

    return inserted;
  }
}
