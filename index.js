const express = require("express");
const recipeRouter = require("./routes/recipesRoute");
const userRouter = require("./routes/usersRoute");

const morgan = require("morgan");

const { get } = require("http");

const app = express();
app.use(morgan("dev"));

app.use(express.json());

//// creating a middleware

app.use((req, res, next) => {
  console.log("Hello from the middleware 🎈🎈");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/// route handlers

///// DECLARING ROUTE DIRECTLY ON THE APP OBJECT
app.use("/api/v1/recipes", recipeRouter);
app.use("/api/v1/users", userRouter);
//// ROUTEs

// server
const PORT = 8000;
app.listen(PORT, () => {
  console.log("your app is running at Port: 800");
});

console.log();
