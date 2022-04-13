// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
    // isIndian: Boolean
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, 

// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String,
//     authorName: String,
//     categories : String, 
//     year : Number, 
   
// }, { timestamps: true });

// module.exports = mongoose.model('Book', bookSchema) //books



// String, Number
// Boolean, Object/json, array

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type : String,
        required : true
    }, 
    authorName: String,
    categories : String, 
    totalPages : Number,
    tags : [ String ], 
    price : {
        indianPrice : String,
        europeanPrice  : String
    }
    ,
    stockAvailable : Boolean ,
    year : {
        type : Number, 
        default : 2021
    }
}
, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books



// String, Number
// Boolean, Object/json, array