const mongoose=require("mongoose")
mongoose.connect('mongodb://mongo:27017/users',{useNewUrlParser:true,useUnifiedTopology: true });
const User=require('../user.js');
const db = mongoose.connection;

db.on('error',()=>{
    console.log('db error');
})
db.once('open',()=>{
    console.log('db connected');
})


