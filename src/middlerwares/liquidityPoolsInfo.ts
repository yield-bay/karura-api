import express from "express";
import TokenPairsModel from "../models/tokenPairs";
import TokenModel from "../models/tokens";
import { convertArrayToObject, HttpError } from "../utils";

export default async function liquidityPoolsInfo(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const data = await TokenPairsModel.find(
      {},
      {
        symbol: 1,
        token1Symbol: 1,
        token2Symbol: 1,
        status: 1,
        token1Liquidity: 1,
        token2Liquidity: 1,
        tvlUSD: 1,
        incentives: 1,
        dailyAPR: 1,
      }
    );
    if (data.length === 0) {
      throw new HttpError(404, "no data found");
    }
    const dataObj = convertArrayToObject(
      data.filter((element) => element.status === "Enabled"),
      "symbol"
    );
    return res.json(dataObj).status(200);
  } catch (err) {
    console.error("Error while fetching tokens info");
    console.error(err);
    return next(err);
  }
}
