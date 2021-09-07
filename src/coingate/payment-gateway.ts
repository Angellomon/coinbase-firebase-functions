import axios from "axios";
import * as functions from "firebase-functions";
import { stringify } from "querystring";

import { API_URL, baseHeaders as headers } from "../utils";

const URL = `${API_URL}/orders`;

export const createOrder = functions.https.onRequest(async (req, res) => {
  try {
    const data = {
      title: "Order 66",
      price_amount: 1234,
      price_currency: "USD",
      receive_currency: "USD",
      description: "descripción de patas",
    };

    const encodedData = stringify(data);

    const result = await axios.post(URL, {
      headers: {
        ...headers,
        "Content-Type": "aaplication/x-www-form-urlencoded",
      },
      data: encodedData,
    });

    res.json({
      result,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
});

export const checkout = functions.https.onRequest(async (req, res) => {
  try {
    const result = await axios.post(URL);

    res.json({ result });
  } catch (error) {
    res.json({
      error,
    });
  }
});

export const listOrders = functions.https.onRequest(async (req, res) => {
  try {
    const result = await axios.get(URL, {
      headers,
    });

    res.json({
      result,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
});
