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
    res.status(201).send(`Inserted at id ${results.insertId}`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
