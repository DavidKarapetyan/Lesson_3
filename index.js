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

// var express = require("express");
// var app = express();

// app.use(express.static("public"));

// app.get("/", function(req, res){
//    res.redirect("index.html");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });


// var express = require("express");
// var app = express();

// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea());
// }
// main();
// app.use(express.static("public"));

// app.get("/", function (req, res) {
//     res.redirect("index.html");
// });

// app.listen(3000, function () {
//     console.log("Example is running on port 3000");
// });

// var fs = require('fs');
// var dummyText = "Apple yep";

// function main() {
//    fs.writeFileSync("dummytext.txt", dummyText);
//    var text = fs.readFileSync("dummytext.txt").toString();
//    console.log(dummyText == text);
//    console.log(text);
//    fs.writeFileSync("undummytext.txt",
//        text.replace("Apple", "Microsoft")
//    );
// }
// main();

var obj =
{
"first_name":"David",
"last_name":"Karapetyan",
"age":16,
"tumo_student":true
};
var myJSON = JSON.stringify(obj);
var fs = require('fs');
var obj = myJSON;

function main() {
   fs.writeFileSync("obj.json", obj);
   var text = fs.readFileSync("obj.js").toString();
   console.log(obj == myJSON);
   console.log(myJSON);
   fs.writeFileSync("obj.js",
       text.replace("obj")
   );
}
main();
