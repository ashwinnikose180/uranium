// const express = require('express');
// const router = express.Router();
// // const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// module.exports = router;
// router.get("/bookList", async function(req, res){
//     let allBooks = await BookModel.find().select({bookName : 1,authorName :1})
//     res.send({msg: allBooks})

// })

const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookControlls= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookControlls.createBook  )

router.get("/bookList", bookControlls.bookList)

router.get("/getBookInYear", bookControlls.getBookInYear)


router.get("/getXINRBooks", bookControlls.getXINRBooks)

router.get("/getRandomBooks", bookControlls.getRandomBooks)
router.get("/getParticularBooks", bookControlls.getParticularBooks)


module.exports = router;
