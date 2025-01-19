import config from "./config";
import { server } from "./initializers/express";

try {
  server({ hostname: config.NODE_HOSTNAME, port: config.NODE_PORT });
} catch (error) {
  console.error(`[Caught exception: ${error}`);
}
