import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv";

dotenv.config();

const TOKEN = "fbccfecddecaae821b5753f8975bc4de";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Pink Basket",
};
