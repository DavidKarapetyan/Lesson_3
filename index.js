// var express = require ("express");
// var app = express();

// app.get("/",function(req,res){
//     res.send("Hello world");
// });

// app.listen(3000, function(){
//     console.log("Example is running on port 3000");
// });



// var express = require("express");
// var app  = express();


// app.get("/google/:search",function(req,res){
//     var e = req.params.search;
//     res.redirect('http://google.com/search?q='+ e );
// });
// app.get("/",function(req,res){
//     res.send("<h1>Hello world</h1>");
// });
// app.get("/:name/:surname/",function(req,res){
//     var n  = req.params.name;
//     var m = req.params.surname;
//     res.send("<h1>Hello"+ " " + n+ " "+ m + "</h1>");
// });
// app.listen(3000,function(){
//     console.log("Example is running on port 3000")
// });
// app.get("/google",function(req,res){
//     res.redirect('http://google.com');
// });
// app.get("/*",function(req,res){
//     res.send("Error 404");
// })

var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
