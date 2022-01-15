const express = require("express");
const server = express();
const PORT = 3000;

require("dotenv").config();

const morgan = require("morgan");
server.use(morgan("dev"));

const { client } = require("./db");
client.connect();

server.use(express.json());

const apiRouter = require("./api");
server.use("/api", apiRouter);

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
