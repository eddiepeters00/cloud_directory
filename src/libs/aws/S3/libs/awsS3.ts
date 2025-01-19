import {
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export default function makeS3({ s3Client }) {
  return Object.freeze({
    signedUrlForUpload,
    signedUrlForDownload,
    deleteObject,
  });

  async function signedUrlForUpload({ bucketName, key, expiresIn = 60 }) {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    return await getSignedUrl(s3Client, command, { expiresIn });
  }

  async function signedUrlForDownload({ bucketName, key, expiresIn = 60 }) {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    return await getSignedUrl(s3Client, command, { expiresIn });
  }

  async function deleteObject({ bucketName, key }) {
    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    return await s3Client.send(command);
  }
}
