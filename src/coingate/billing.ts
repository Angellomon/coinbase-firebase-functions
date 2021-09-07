import axios from "axios";
import * as functions from "firebase-functions";

import { API_URL, baseHeaders as headers } from "../utils";

const URL = `${API_URL}/billing`;

export const getSubscriber = functions.https.onRequest(async (req, res) => {
  try {
    const result = await axios.get(`${URL}/subscribers/328`, {
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

export const createSubscriber = functions.https.onRequest(async (req, res) => {
  try {
    const result = await axios.post(
      `${URL}/subscribers`,
      {
        email: "lorem@ipsum.com",
        subscriber_id: "USER-123",
        organisation_name: "",
        first_name: "John",
        last_name: "Smith",
        address: "New N Rd, Islington",
        secondary_address: null,
        city: "London",
        postal_code: "N18SY",
        country: "United Kingdom",
      },
      {
        headers,
      }
    );

    res.json({
      result,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
});

export const createSubscriptionDetails = functions.https.onRequest(
  async (req, res) => {
    try {
      const result = await axios.post(
        `${URL}/details`,
        {
          title: "Some Hosting Company",
          description: "Your purchase at Some Hosting Company",
          price_currency: "USD",
          payment_method: "instant",
          send_paid_notification: "true",
          details_id: "301",
          items: [
            {
              item_id: "401",
              description: "Very big server",
              quantity: 1,
              price: 10.8,
            },
            {
              item_id: "401",
              description: "Smaller server",
              quantity: 2,
              price: 10.8,
            },
          ],
          callback_url: "https://yourcallbackurl.com",
          receive_currency: "BTC",
        },
        {
          headers,
        }
      );

      res.json({
        result,
      });
    } catch (error) {
      res.json({
        error,
      });
    }
  }
);
