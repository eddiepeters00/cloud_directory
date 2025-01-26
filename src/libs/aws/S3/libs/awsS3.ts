export default function makeS3({ s3Client }) {
  return Object.freeze({
    signedUrlForUpload,
    signedUrlForDownload,
    deleteObject,
  });

  async function signedUrlForUpload({ region, bucket, key }) {
    const s3 = new s3Client({ region, bucket });
    const results = await s3.signUrlForUpload({ key });
    return results;
  }

  async function signedUrlForDownload({ region, bucket, key }) {
    const s3 = new s3Client({ region, bucket });
    const results = await s3.signUrlForDownload({ key });
    return results;
  }

  async function deleteObject({ region, bucket, key }) {
    const s3 = new s3Client({ region, bucket });
    const results = await s3.deleteObjectFromS3({ key });
    return results;
  }
}
