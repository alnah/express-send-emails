require("dotenv").config();
require("express-async-errors");
const express = require("express");

const { errorHandler, routeNotFound } = require("./middlewares");
const { sendEmail } = require("./controllers/sendEmail");

// express server
const app = express();
const port = process.env.PORT || 3000;

// parser
app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.send("<h1>Express Send Emails<br><a href='/send'>Send Email</a></h1>");
});

// email route
app.get("/send", sendEmail);

// error handling
app.use(routeNotFound);
app.use(errorHandler);

// helper to start server
const start = () => {
  try {
    app.listen(port, () =>
      console.log(`·Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.error(error);
  }
};

// start server
start();
