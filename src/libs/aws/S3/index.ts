import AwsS3Client from "../../../initializers/aws";
import makeS3 from "./libs/awsS3";

const signedUrlForUpload = ({ region, bucket, key }) =>
  makeS3({ s3Client: AwsS3Client }).signedUrlForUpload({ region, bucket, key });

const signedUrlForDownload = ({ region, bucket, key }) =>
  makeS3({ s3Client: AwsS3Client }).signedUrlForDownload({
    region,
    bucket,
    key,
  });

const deleteObject = ({ region, bucket, key }) =>
  makeS3({ s3Client: AwsS3Client }).deleteObject({ region, bucket, key });

export { signedUrlForUpload, signedUrlForDownload, deleteObject };
