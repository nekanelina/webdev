const express = require("express");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");
const app = express();
const PORT = 4001;

app.use(express.json());
app.use("/users", require("./routes/usersRoutes"));
app.use("/services", require("./routes/servicesRoutes"));
app.use("/tours", require("./routes/toursRoutes"));

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
