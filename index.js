const express = require ("express")
const app = express()
const date = require("./date");


app.use(express.static(dirname+"/public"));

app.get("/home",date, (req,res) =>{
  res.sendFile(dirname+"/public/home.html")  
});

app.get("/about",date,(req,res) =>{
    res.sendFile(dirname+"/public/about.html")  
  });

  app.get("/contact", date, (req, res) => {
    res.sendFile(dirname + "/public/contact.html");
  });
  
  app.get("/ourservices", date, (req, res) => {
    res.sendFile(dirname + "/public/ourservices.html");
  });
  
  app.get("*", (req, res) => {
    res.sendFile(dirname + "/public/PageNotFound.html");
  });
  

app.get("./public/style.css", (req, res) => {
    res.sendFile(dirname + "/public/Styles.css");
  });


app.listen(5000, (err)=> {
 err?console.log (err):console.log("server is running on port 5000")})