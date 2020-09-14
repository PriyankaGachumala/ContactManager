const express = require("express");
const router = express.Router();

//@route        GET "/api/contacts"
//@desc         Get all contacts of the specific user
//@access       private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

//@route        POST  "/api/contacts"
//@desc         Add new contact
//@access       private
router.post("/", (req, res) => {
  res.send("Add new contact");
});
//@route        PUT "/api/contacts/:id"
//@desc         update contact
//@access       private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route        DELETE "/api/contacts/:id"
//@desc         Delete contact
//@access       private
router.delete("/:id", (req, res) => {
  res.send("Delete id");
});

module.exports = router;