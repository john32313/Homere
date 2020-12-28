const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db.js");

router.post("/signup", async (req, res, next) => {
  const { email, password, name, lastname } = req.body;
  try {
    const results = await connection.query(
      "INSERT INTO users(email, password, name, lastname) VALUES (?,?,?,?)",
      [email, password, name, lastname]
    );
    res.status(201).json({ flash: "User has been signup !" });
  } catch (error) {
    res.status(500).json({ flash: error.message });
  }
});

module.exports = router;
