/* eslint-disable no-console */
const mongoose = require("mongoose");

const dbConnectionString = "mongodb://db:27017/msk-documents";

let connectionPromise;

function connectDB(connectionString) {
  connectionPromise = mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      server: {
        auto_reconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
        socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 },
      },
    })
    .then(() => {
      console.log("Successfully connected to ", connectionString);
    })
    .catch((e) => {
      console.error("Failed to connect to DB", connectionString);
      // console.trace(e);
    });
}

connectDB(dbConnectionString);

require("./user");

module.exports.connectionPromise = connectionPromise;
