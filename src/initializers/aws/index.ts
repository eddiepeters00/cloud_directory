import { S3Client } from "@aws-sdk/client-s3";

interface AwsS3ClientOptions {
  region: string;
}

class AwsS3Client {
  private client: S3Client;

  constructor({ region }: AwsS3ClientOptions) {
    this.client = new S3Client({ region });
  }

  getClient(): S3Client {
    return this.client;
  }
}

export default AwsS3Client;
