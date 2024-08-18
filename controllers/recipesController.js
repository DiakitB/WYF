const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/../data/data.json`, "utf-8");
const recipes = JSON.parse(data);

//middleware stack
exports.checkId = (req, res, next) => {
  const id = req.params.id * 1;
  if (!id) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

// console.log(recipes);
exports.getAllRecipes = (req, res) => {
  res.status(200).json({
    status: "success",
    results: recipes.length,
    data: {
      recipes,
    },
  });
};

exports.createRecipe = (req, res) => {
  const newId = recipes[recipes.length - 1].id + 1;
  const newRecipe = Object.assign({ id: newId }, req.body);
  recipes.push(newRecipe);
  fs.writeFile(
    `${__dirname}/data/data.json`,
    JSON.stringify(recipes),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          recipe: newRecipe,
        },
      });
    }
  );
};

exports.getRecipe = (req, res) => {
  const id = req.params.id * 1;
  const recipe = recipes.find((el) => el.id === id);

  if (!recipe) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      recipe,
    },
  });
};

exports.updateRecipe = (req, res) => {
  const id = req.params.id * 1;
  const recipe = recipes.find((el) => el.id === id);

  if (!recipe) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      recipe: "<Updated recipe here...>",
    },
  });
};

exports.deleteRecipe = (req, res) => {
  const id = req.params.id * 1;
  const recipe = recipes.find((el) => el.id === id);

  if (!recipe) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
};
