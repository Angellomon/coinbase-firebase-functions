import * as z from "zod";
import { string } from "zod";
import { baseCurrencies } from "./utils";

const currencies = z.enum(baseCurrencies);
const znumber = z.string().regex(/^\d+$/).transform(Number);

export const createOrderInput = z.object({
  price_amount: znumber,
  price_currency: currencies,
  receive_currency: currencies,
  order_id: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  callback_url: z.string().url().optional(),
  success_url: z.string().url().optional(),
  cancel_url: z.string().optional(),
  token: string().optional(),
  purchaser_email: string().optional(),
});
