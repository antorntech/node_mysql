const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const userRoutes = require("./routes/v1/users.route");

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
