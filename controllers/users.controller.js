const db = require("../db/db.connect");
const { v4: uuidv4 } = require("uuid");

module.exports.getUsers = (req, res) => {
  try {
    const sql = "SELECT * FROM users";

    db.query(sql, (err, data) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json(data);
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.createUser = (req, res) => {
  try {
    const { name, email } = req.body;

    const sql = "INSERT INTO users (name, email) VALUES (?, ?)";

    db.query(sql, [name, email], (err, data) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(200).json(data);
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
