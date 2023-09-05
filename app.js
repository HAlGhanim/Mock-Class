const express = require("express");
const morgan = require("morgan");
const app = express();
const userRoutes = require("./api/Auth/routes");

app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", userRoutes);

app.listen(8000, () => {
  console.log(`The application is running on PORT: 8000`);
});
