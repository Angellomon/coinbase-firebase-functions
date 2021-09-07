import axios from "axios";
import * as functions from "firebase-functions";
import { createOrderInput } from "../schemas";
import { URLSearchParams } from "url";

import { API_URL, baseHeaders as headers } from "../utils";

const URL = `${API_URL}/orders`;

export const createOrder = functions.https.onRequest(async (req, res) => {
  console.log(req.socket.localAddress, req.socket.remoteAddress);

  try {
    const data: any = createOrderInput.parse(req.body);
    const params = new URLSearchParams();

    for (let k in data) {
      params.append(k, data[k]);
    }

    console.log(params);

    const result = await axios({
      method: "post",
      url: URL,
      data: params.toString(),
      headers: {
        ...headers,
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        "User-Agent": "curl/7.77.0",
      },
    });

    // const result = await axios.post(URL, encodedData, {
    //   headers: {
    //     ...headers,
    //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    //   },
    // });

    res.json(result);
  } catch (error) {
    res.status(400);

    if ((error as any).response) {
      console.log((error as any).response?.data);
      res.json({
        error: (error as any).response?.data,
      });
    } else {
      res.json({
        error,
      });
    }
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
