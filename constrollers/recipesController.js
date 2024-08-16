const data = require("../data/data.json");

exports.getAllRecipes = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    results: data.length,
    status: "success",
    requestedAt: req.requestTime,
    recipes: data,
  });
};

exports.getRecipe = (req, res) => {
  const id = req.params.id * 1;
  console.log(req.params);
  const recipe = data.find((el) => el.id === id);
  if (!recipe) {
    return res.status(404).json({
      status: "fail",
      message: "invalid id",
    });
  }
  res.status(200).json({
    status: "success",
    recipe,
  });
};

exports.createRecipe = (req, res) => {
  console.log(req.body);
  const newId = data[data.length - 1].id + 1;
  const newRecipe = Object.assign({ id: newId }, req.body);
  data.push(newRecipe);
  fs.writeFile("./data/data.json", JSON.stringify(data), (err) => {
    res.status(201).json({
      status: "success",
      data: "a new recipe has been added",
    });
  });
};

exports.updateRecipe = (req, res) => {
  const id = req.params.id * 1;
  const recipe = data.find((el) => el.id === id);
  if (!recipe) {
    return res.status(404).json({
      status: "fail",
      message: "invalid id",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      recipe: "recipe updated",
    },
  });
};

exports.deleteRecipe = (req, res) => {
  const id = req.params.id * 1;
  const recipe = data.find((el) => el.id === id);
  if (!recipe) {
    return res.status(404).json({
      status: "fail",
      message: "invalid id",
    });
  }
  const index = data.indexOf(recipe);
  data.splice(index, 1);
  fs.writeFile("./data/data.json", JSON.stringify(data), (err) => {
    res.status(204).json({
      status: "success",
      data: null,
    });
  });
};
