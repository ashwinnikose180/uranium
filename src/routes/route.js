const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("where is my first api")
})

router.post("/createBook", UserController.createBook  )

router.get("/getBookData", UserController.getBookData)

module.exports = router;