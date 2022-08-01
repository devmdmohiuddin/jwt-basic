require("dotenv").config();
require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const {
  notFound,
  errorHandler,
} = require("./middleware/errorHandlerMiddleware");
const connectDB = require("./config/db");

// database connection
connectDB();

// creating app
const app = express();

// middleware
app.use([morgan("dev"), express.json()]);

app.use(notFound)
app.use(errorHandler)

// port
const port = process.env.PORT || 5000;
// listening
app.listen(port, () => {
  console.log(`Server is running in development mode on port ${port}.`);
});
