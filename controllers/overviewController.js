const Recipe = require("../models/recipeModel");

exports.getOverview = async (req, res) => {
  const recipes = await Recipe.find();
  console.log(recipes);
  res.status(200).render("overview", {
    title: "recipes",
    recipes,
  });
};

exports.getRecipe = (req, res) => {
  console.log(Recipe);
  res.status(200).render("recipe", {
    title: "recipes",
  });
};
