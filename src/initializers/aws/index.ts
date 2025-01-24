import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

interface AwsS3ClientOptions {
  region: string;
  bucket: string;
}

class AwsS3Client {
  private client: S3Client;
  private bucket: string;

  //Constructor - creates a new client when invoked
  constructor({ region, bucket }: AwsS3ClientOptions) {
    this.client = new S3Client({ region });
    this.bucket = bucket;
  }

  getClient(): S3Client {
    return this.client;
  }

  //Upload to bucket
  async signedUrlForUpload(key: string) {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });

    return await getSignedUrl(this.client, command, { expiresIn: 60 });
  }

  //Download from bucket
  async signedUrlForDownload(key: string) {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });

    return await getSignedUrl(this.client, command, { expiresIn: 60 });
  }

  //Delete object from bucket
  //Returns http status code
  async deleteObjectFromS3(key: string) {
    const params = new DeleteObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });
    const res = await this.client.send(params);
    console.log("Res from s3 : ", res);
    return res.$metadata.httpStatusCode;
  }
}

export default AwsS3Client;
