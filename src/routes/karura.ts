import { Router } from "express";
import middlewares from "../middlerwares";

const route = Router();

export default (app: Router): void => {
  // Register our endpoint for this route-apis
  app.use("/karura", route);

  route.get("/tokens", middlewares.tokensInfo);
  route.get("/liquidity-pools", middlewares.liquidityPoolsInfo);
};
