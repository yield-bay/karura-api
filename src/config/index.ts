import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const DEFAULT_PORT = "5000";

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT || DEFAULT_PORT, 10),

  /**
   * That long string from mongo atlas
   */
  databaseURL:
    process?.env?.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/yieldbay",
};
