const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A recipe must have a name"],
    // unique: true,
  },
  image: {
    type: String,
    required: [true, "A recipe must have an image"],
  },
  ingredients: Array,
  category: {
    type: String,
    required: [true, "A recipe must have a category"],
  },
});

/// creating the model

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
