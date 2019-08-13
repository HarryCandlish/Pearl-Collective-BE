const express = require("express");
const router = express.Router();

const { getTeam } = require("../db/team");

router.get("/", (req, res) => {
  getTeam()
    .then(team => {
      res.json(team);
    })
    .catch(err => {
      res.status(500).json({ error: "error" });
    });
});

module.exports = router;
