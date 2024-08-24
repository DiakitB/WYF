// const fs = require("fs");
// const data = fs.readFileSync(`${__dirname}/../data/data.json`, "utf-8");
// const recipes = JSON.parse(data);
const Recipe = require("../models/recipeModel");

//middleware stack

// console.log(recipes);
exports.getAllRecipes = async (req, res) => {
  try {
    const data = await Recipe.find(req.query);
    res.status(200).json({
      status: "success",
      results: data.length,
      data: {
        recipes: data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const data = await Recipe.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        recipe: req.body,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getRecipe = async (req, res) => {
  try {
    const data = await Recipe.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        recipe: data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        recipe,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      message: "Recipe deleted",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
