const express=require("express");
const mongoose=require("mongoose");
const path = require("path");
const methodOverride = require('method-override')
main().then(() => console.log("Connection success"))
.catch(()=>console.log("fail"));

async function main(params) {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const app=express();
const port=8080;
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public"))); 
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(methodOverride('_method'))

app.listen(port,()=>{
    console.log("App is listening");
});