const express = require("express");
const router = express.Router();

//@route        GET "/api/auth"
//@desc         Get logged user
//@access       Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

//@route        POST "/api/auth"
//@desc         authenticate user and get token
//@access       public
router.post("/", (req, res) => {
  res.send("login user");
});

module.exports = router;
