const recipesController = require("../controllers/recipesController");
const express = require("express");
const router = express.Router();
router
  .route("/")
  .get(recipesController.getAllRecipes)
  .post(recipesController.createRecipe);
router
  .route("/:id")
  .get(recipesController.checkId, recipesController.getRecipe)
  .patch(recipesController.checkId, recipesController.updateRecipe)
  .delete(recipesController.checkId, recipesController.deleteRecipe);

module.exports = router;
