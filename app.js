const express = require("express");
const fs = require("fs");
const recipesRouter = require("././routes/recipesRoute");
const usersRouter = require("././routes/usersRoute");
const morgon = require("morgan");
const app = express();

app.use(morgon("dev"));

app.use(express.json());

// const getAllRecipes = (req, res) => {
//   res.status(200).json({
//     status: "success",
//     results: recipes.length,
//     data: {
//       recipes,
//     },
//   });
// };

// const createRecipe = (req, res) => {
//   const newId = recipes[recipes.length - 1].id + 1;
//   const newRecipe = Object.assign({ id: newId }, req.body);
//   recipes.push(newRecipe);
//   fs.writeFile(
//     `${__dirname}/data/data.json`,
//     JSON.stringify(recipes),
//     (err) => {
//       res.status(201).json({
//         status: "success",
//         data: {
//           recipe: newRecipe,
//         },
//       });
//     }
//   );
// };

// const getRecipe = (req, res) => {
//   const id = req.params.id * 1;
//   const recipe = recipes.find((el) => el.id === id);

//   if (!recipe) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }

//   res.status(200).json({
//     status: "success",
//     data: {
//       recipe,
//     },
//   });
// };

// const updateRecipe = (req, res) => {
//   const id = req.params.id * 1;
//   const recipe = recipes.find((el) => el.id === id);

//   if (!recipe) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }

//   res.status(200).json({
//     status: "success",
//     data: {
//       recipe: "<Updated recipe here...>",
//     },
//   });
// };

// const deleteRecipe = (req, res) => {
//   const id = req.params.id * 1;
//   const recipe = recipes.find((el) => el.id === id);

//   if (!recipe) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }

//   res.status(204).json({
//     status: "success",
//     data: null,
//   });
// };

// const getAllUsers = (req, res) => {
//   res.status(200).json({
//     status: "success",
//     message: "users",
//   });
// };

// const createUser = (req, res) => {
//   const newId = users[users.length - 1].id + 1;
//   const newUser = Object.assign({ id: newId }, req.body);
//   users.push(newUser);
//   fs.writeFile(`${__dirname}/data/data.json`, JSON.stringify(users), (err) => {
//     res.status(201).json({
//       status: "success",
//       data: {
//         user: newUser,
//       },
//     });
//   });
// };

// const getUser = (req, res) => {
//   const id = req.params.id * 1;
//   const user = users.find((el) => el.id === id);

//   if (!user) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }

//   res.status(200).json({
//     status: "success",
//     data: {
//       user,
//     },
//   });
// };

// const updateUser = (req, res) => {
//   const id = req.params.id * 1;
//   const user = users.find((el) => el.id === id);

//   if (!user) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }

//   res.status(200).json({
//     status: "success",
//     data: {
//       user: "<Updated user here...>",
//     },
//   });
// };

// const deleteUser = (req, res) => {
//   const id = req.params.id * 1;
//   const user = users.find((el) => el.id === id);

//   if (!user) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }

//   res.status(204).json({
//     status: "success",
//     data: null,
//   });
// };

const userRouter = express.Router();
app.use("/api/v1/recipes", recipesRouter);
app.use("/api/v1/users", usersRouter);
module.exports = app;

// const PORT = 8000;

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}...`);
// });
