const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51JmpVLDjoAFDot8vL4PERnVN6lbCq1M1q8pTjBvSg2eLGEWRSRTIusatSNjrpHK0eX4Ij94MucU59oiKUwQmPTxQ00TcUUHWsk"
);

// app config
const app = express();
// midilewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment made ".total);

  console.log("payment complete", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// listen command
exports.api = functions.https.onRequest(app);

// example endpoint

// (http://localhost:5001/clone-50ef0/us-central1/api).
