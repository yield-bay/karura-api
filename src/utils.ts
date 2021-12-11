import { CustomError } from "ts-custom-error";

export function convertArrayToObject(array: any[], key: string | number) {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
}

export class HttpError extends CustomError {
  public constructor(public code: number, message?: string) {
    super(message);
  }
}
