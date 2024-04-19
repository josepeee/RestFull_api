const { addUser, login, refreshToken} = require("../controllers/userControllers");
const veryfytoken = require("../middlewares/auth");
const User = require("../models/userModels");
const { route } = require("./mobilesRouters");

const router = require("express").Router();

router.post("/signup", addUser);
router.post("/login", login)
router.get("/refreshToken", veryfytoken, refreshToken);


module.exports = router;
