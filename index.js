require("dotenv").config();
require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const {
  notFound,
  errorHandler,
} = require("./middleware/errorHandlerMiddleware");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

// database connection
connectDB();

// creating app
const app = express();

// middleware
app.use([morgan("dev"), express.json()]);

// routes
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

// port
const port = process.env.PORT || 5000;
// listening
app.listen(port, () => {
  console.log(`Server is running in development mode on port ${port}.`);
});
