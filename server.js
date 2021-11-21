const express=require('express');
const app= express();
const mongoose =require("mongoose");
//monggose連接db server
mongoose.connect("mongodb://mongo:27017/users",{useNewUrlParser: true ,useUnifiedTopology: true })
//取得mongoose連線資料
const db=mongoose.connection;

db.on('error',()=>{
    console.log('db error')
});
db.once('open',()=>{
    console.log('db connected')
})
app.get('/',(req,res)=>{
    res.send('server created')
})

app.listen(3000,()=>{
    console.log(`http://localhost:3000`);
})
