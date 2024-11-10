import dotenv from "dotenv";
dotenv.config();

const NODE_HOSTNAME = process.env.NODE_HOSTNAME;
const NODE_PORT = process.env.NODE_PORT;

export default Object.freeze({
  NODE_HOSTNAME,
  NODE_PORT,
});
