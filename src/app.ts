import express from "express";
import loaders from "./loaders";
import expressLoader from "./server";
import config from "./config";

async function main() {
  const app = express();
  await loaders();
  await expressLoader({ app });
  console.info("express loaded");
  app.listen(config.port, () => {
    console.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
