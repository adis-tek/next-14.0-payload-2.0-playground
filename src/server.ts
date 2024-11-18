import express from "express";
import dotenv from "dotenv";
import payload from "payload";

dotenv.config();
const app = express();

const start = async () => {
  await payload.init({
    secret:
      typeof process.env.PAYLOAD_SECRET === "string"
        ? process.env.PAYLOAD_SECRET
        : "",
    express: app,
  });
};

app.listen(3000, () => {
  console.log("Payload is listening to port 3000");
});

start();
