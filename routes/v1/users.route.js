const express = require("express");
const app = express.Router();

const userController = require("../../controllers/users.controller");

app.get("/", userController.getUsers);
app.post("/create_user", userController.createUser);

module.exports = app;
