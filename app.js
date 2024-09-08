const express = require("express");
const path = require("path");
const fs = require("fs");
const recipesRouter = require("././routes/recipesRoute");
const usersRouter = require("././routes/usersRoute");
const overviewRouter = require("././routes/overviewRoute");
const morgon = require("morgan");

const app = express();

// Middlewares
app.use(morgon("dev"));

app.use(express.json());
//setting our view engine

app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);
app.use(express.static(path.join(__dirname, "public")));


const userRouter = express.Router();
app.use("/", overviewRouter);
app.use("/recipe", overviewRouter);
app.use("/api/v1/recipes", recipesRouter);
app.use("/api/v1/users", usersRouter);
module.exports = app;
