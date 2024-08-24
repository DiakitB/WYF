const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  label: {
    type: String,
    required: [true, "A recipe must have a label"],
    unique: true,
  },
  image: {
    type: String,
    // required: [true, "A recipe must have a picture"],
  },
  source: {
    type: String,
  },
  yield: {
    type: Number,
  },
  ingredientLines: [],
  calories: {
    type: Number,
  },
});

/// creating the model

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
