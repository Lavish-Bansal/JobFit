const dotenv = require("dotenv");
const app = require("./src/app.js");
const connectDB = require("./src/db/index.js");

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`App is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed ", err);
  });
