import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import createServer from "./libs/express";

const app = express();

const server = ({
  hostname,
  port,
}: {
  hostname: string;
  port: string | number;
}) =>
  createServer({
    app,
    compression,
    cors,
    helmet,
  }).server({ hostname, port });

export { server };
