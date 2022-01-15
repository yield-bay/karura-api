import express from "express";
import TokenModel from "../models/tokens";
import { convertArrayToObject, HttpError } from "../utils";

export default async function tokensInfo(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const data = await TokenModel.find(
      {},
      { symbol: 1, decimals: 1, isNative: 1, isStable: 1, priceUSD: 1 }
    );
    if (data.length === 0) {
      throw new HttpError(404, "no data found");
    }
    const dataObj = convertArrayToObject(data, "symbol");
    return res.json(dataObj).status(200);
  } catch (err) {
    console.error("Error while fetching tokens info");
    console.error(err);
    return next(err);
  }
}
