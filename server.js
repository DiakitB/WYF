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

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
