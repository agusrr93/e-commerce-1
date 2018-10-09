var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name : {
        type:String,
        required:true
    }
    ,
    description :{
        type:String,
        required:true
    }
});

var Category = mongoose.model('Category', categorySchema);

module.exports=Category