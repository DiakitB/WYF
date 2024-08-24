const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then((con) => {
    console.log("DB connection successful");
  });

//// creating the schema

// const test = new Recipe({
//   label: "big ass wet pussy",
//   image: "testing image",
//   imgredientLines: [
//     "2 ¾ cups unsalted chicken stock (such as Swanson)",
//     "1 cup fresh orange juice (about 4 oranges)",
//     "½ cup chopped cilantro stems",
//     "1 medium orange, quartered",
//     "1 ¾ teaspoons kosher salt, divided",
//   ],
//   calories: 457,
// });

// test
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//////

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
