import { Router } from "express";
import karura from "./karura";

// guaranteed to get dependencies
export default (): Router => {
  const app = Router();

  /**
   * Register any routing-middleware here by giving it access to the express-app
   */

  karura(app);

  return app;
};
