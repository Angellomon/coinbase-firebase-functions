import * as functions from "firebase-functions";

export const config = functions.config();

export const AUTH_TOKEN = config.coingate?.authtoken || "authtoken";

export const baseHeaders = {
  authorization: AUTH_TOKEN,
};

export const API_URL = config.coingate.apiurl as string;
