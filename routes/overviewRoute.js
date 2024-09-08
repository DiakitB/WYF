const express = require("express");
const viewcontroller = require("../controllers/overviewController");
const router = express.Router();

router.get("/", viewcontroller.getOverview);

router.get("/recipe", viewcontroller.getRecipe);

module.exports = router;
