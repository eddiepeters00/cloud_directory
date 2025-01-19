import AwsS3Client from "../../../initializers/aws";
import makeS3 from "./libs/awsS3";
import config from "../../../config";

const s3Client = new AwsS3Client({
  region: config.AWS_CONFIG.region,
}).getClient();
const s3 = makeS3({ s3Client });

const AWS_BUCKET = config.AWS_CONFIG.bucket;

const signedUrlForUpload = ({ key, expiresIn }) =>
  s3.signedUrlForUpload({ bucketName: AWS_BUCKET, key, expiresIn });

const signedUrlForDownload = ({ key, expiresIn }) =>
  s3.signedUrlForDownload({ bucketName: AWS_BUCKET, key, expiresIn });

const deleteObject = ({ key }) =>
  s3.deleteObject({ bucketName: AWS_BUCKET, key });

export { signedUrlForUpload, signedUrlForDownload, deleteObject };
