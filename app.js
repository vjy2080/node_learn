const express = require("express");
const userRoutes = require("./routes/user.routes");
const logger = require("./middleware/logger.middleware");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
