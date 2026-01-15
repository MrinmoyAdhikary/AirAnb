const express=require("express");
const mongoose=require("mongoose");
main().then(() => console.log("Connection success"))
.catch(()=>console.log("fail"));

async function main(params) {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const app=express();
const port=8080;
app.listen(port,()=>{
    console.log("App is listening");
});