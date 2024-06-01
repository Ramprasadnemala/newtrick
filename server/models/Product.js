const mongoose= require("mongoose");

const ProductModel= new mongoose.Schema({
    // name, email, phone, city
    name:{
         type:String,
         required:true
    },
    userNo:{
        type:String,
        required:true
    },
    earn:{
        type:Number,
        default:false
    },
   expense:{
       type:Number, 
   },
   date:{
        type:String,
   },
   work:{
        type:String,
   }

})

module.exports = mongoose.model('products', ProductModel)