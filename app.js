const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")
const app = express();
app.use(express.static("public"));
var items = ["Buy Food","Cook Food","Eat Food"];
var workItems = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    var day = date.getDate();
    
    

    res.render("list",{listTitle:day,newListItems:items});
    
  
});


app.get("/work",function(req,res){
    res.render("list",{listTitle:"work list",newListItems:workItems});
});



app.post("/",function(req,res){
    let item = req.body.newItem;

    if (req. body.list === "work"){
        workItems.push(item)
        res.redirect("/work")
    }
    else{
        items.push(item);
        res.redirect("/")

    }
   
    });

app.get("/about",function(){
res.render("about");
});
app.listen(5000,function(){
    console.log("Listing to port 5000")
}); 