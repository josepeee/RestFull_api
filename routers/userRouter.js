const { addUser, login} = require("../controllers/userControllers");
const User = require("../models/userModels");

const router = require("express").Router();

router.post("/signup", addUser);
router.post("/login", login)

module.exports = router;
