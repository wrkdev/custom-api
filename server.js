/* MAIN SERVER FILE FOR SETTING UP CUSTOM-API SERVER */
const fs = require("fs");
const https = require("https");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const createError = require("http-errors");
const logger = require("morgan");
const mongoose = require("mongoose");
const moment = require("moment");

/* IMPORT .ENV */ 
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
dotenvExpand(dotenv.config());

/* IMPORT CERTIFICATES */
const credentials = {
  key: fs.readFileSync("./config/certs/key.pem"),
  cert: fs.readFileSync("./config/certs/cert.pem"),
  passphrase: process.env.CERT_PASSPHRASE
};

/* IMPORT SWAGGER FILES */
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./src/swagger/swagger.json");

/* IMPORT ROUTES */
const routes = require("./src/routes");
const router = express.Router();

const app = express();

// Connect to Database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log(`Connected to Database at ${moment().format("DD/MM/YY HH:mm:ss")}`);
});

/* SETUP OF ROUTES */
router.use("/users", routes.user);
router.use("/posts", routes.posts);
router.use("/tasks", routes.tasks);

/* SETUP OF MIDDLEWARE */
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", router);


app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
});

https.createServer(credentials, app).listen(443, () => {
  console.log(`Application started on https://${process.env.APPLICATION_HOSTNAME}/api-docs`);
});

http.createServer(app).listen(80, () => {
  console.log(`Application started on http://${process.env.APPLICATION_HOSTNAME}/api-docs`);
});