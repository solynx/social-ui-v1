// import {
//   S3Client,
//   PutObjectCommandInput,
//   PutObjectCommand,
// } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import * as Minio from "minio";
const runtimeConfig = useRuntimeConfig();
const minioClient = new Minio.Client({
  endPoint: runtimeConfig.s3Endpoint,
  useSSL: true,
  accessKey: runtimeConfig.s3AccessKey,
  secretKey: runtimeConfig.s3PrivateKey,
});
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let url = null;
  if (!body?.type) {
    return { url: "" };
  }
  let fileName = Math.random() + extensionArray[body.type] || ".jpg";
  try {
    url = await minioClient.presignedPutObject(
      runtimeConfig.s3BucketName,
      fileName,
      24 * 60
    );
  } catch (error) {
    console.log(error);
    return { url: "" };
  }
  return {
    url,
    fileUrl: `https://${runtimeConfig.s3Endpoint}/${runtimeConfig.s3BucketName}/${fileName}`,
  };
});

const extensionArray = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/gif": ".gif",
  "image/webp": ".webp",
  "image/svg+xml": ".svg",
  "image/bmp": ".bmp",
  "image/tiff": ".tiff",
  "image/x-icon": ".ico",
  "video/mp4": ".mp4",
  "video/mpeg": ".mpeg",
  "video/ogg": ".ogv",
  "video/webm": ".webm",
  "video/x-msvideo": ".avi",
  "audio/mpeg": ".mp3",
  "audio/ogg": ".ogg",
  "audio/wav": ".wav",
  "audio/webm": ".weba",
  "application/pdf": ".pdf",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    ".docx",
  "application/vnd.ms-excel": ".xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
  "application/vnd.ms-powerpoint": ".ppt",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    ".pptx",
  "text/plain": ".txt",
  "text/html": ".html",
  "text/css": ".css",
  "application/json": ".json",
  "application/javascript": ".js",
  "application/xml": ".xml",
  // Add more MIME types and extensions as needed
};
