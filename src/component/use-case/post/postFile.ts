export default function createPostFile({ insertDocument, fileUpload }) {
  return Object.freeze({ postFile });

  async function postFile({ params, dbConfig, awsConfig }) {
    const {
      fileBuffer,
      fileName,
      mimeType,
      parentFolderId,
      createdBy,
    } = params;
    if (!fileBuffer || !fileName || !mimeType || !createdBy) {
      throw new Error("Missing required params");
    }

    //Upload file to AWS S3
    const filekey = await fileUpload({
      fileBuffer,
      fileName,
      mimeType,
      awsConfig,
    });

    //Save metadata in DB
    const file = {
      data: {
        name: fileName,
        key: filekey,
        mimeType,
        parentFolderId,
        createdBy,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };

    return await insertDocument({ data: file, collection: "files", dbConfig });
  }
}
