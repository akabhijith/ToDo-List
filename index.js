import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
// const ejs=require('ejs');

// app.set('view engine','ejs')
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let newitems = []
app.get("/",(req,res)=>{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let day = today.toLocaleDateString("en-US", options);
    res.render("index.ejs",{KindOfDay: day, newListItems:newitems});
})

app.post("/",(req,res)=>{
      let newitem=req.body.newitem;
      newitems.push(newitem);
     res.redirect("/");

})

app.listen(3000,()=>{
    console.log("running");
})