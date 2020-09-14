const express = require("express");
const router = express.Router();

//@route        POST "/api/users"
//@desc         User Registration
//@access       Public
router.post("/", (req, res) => {
  res.send(" USer Registration ");
});

module.exports = router;
