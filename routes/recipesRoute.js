const recipesController = require("../controllers/recipesController");
const express = require("express");
const router = express.Router();
router
  .route("/")
  .get(recipesController.getAllRecipes)
  .post(recipesController.createRecipe);
router
  .route("/:id")
  .get(recipesController.getRecipe)
  .patch(recipesController.updateRecipe)
  .delete(recipesController.deleteRecipe);

module.exports = router;
