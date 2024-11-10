import config from "./config";
import { server } from "./initializers/express";

try {
  console.log(config.NODE_HOSTNAME);
  server({ hostname: config.NODE_HOSTNAME, port: config.NODE_PORT });
} catch (error) {
  console.error(`[Caught exception: ${error}`);
}
