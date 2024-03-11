const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    password: String,
    phone: Number,
    image: String
})

const RegisterModel = mongoose.model("users", RegisterSchema);
module.exports = RegisterModel;