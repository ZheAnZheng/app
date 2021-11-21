const mongoose=require("mongoose");
//get Schema Constructer
const Schema=mongoose.Schema;

const userSchema=new Schema({
    //id
    name:{
        type:String,
        require:true
    },
    account:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
//model為在mongodb://mongo:27017 的users的collection的model
module.exports=mongoose.model("user",userSchema);
