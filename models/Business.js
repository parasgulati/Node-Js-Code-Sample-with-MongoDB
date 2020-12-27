const mongoose = require("mongoose");
const Business = mongoose.Schema({
    Email:{type:String},
    Name:{type:String},
    Type:{type:String},
    Category:{type:String}
})
module.exports = mongoose.model("Business",Business);