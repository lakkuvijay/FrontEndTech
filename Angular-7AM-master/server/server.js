//import node modules
//require() function, used to import the node modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");



//rest object
const app = express();
//where "app" is the rest object
//where "app" used to create the rest services Ex. GET,POST,PUT,DELETE,.....



//enable cors policy
app.use( cors() );






//MIME Type
app.use(bodyparser.json());



//parse the client data
app.use(bodyparser.urlencoded({extended:false}));



//connect to database
const miniproject = mongodb.MongoClient;
//where "miniproject" is the refernce variable, used to connect to database


//middleware
//to check headers
//if header contain miniproject === ashokit then "/products" endpoint
//otherwise throw error

// const tokenMiddleware = (req,res,next)=>{
//     const allHeaders = req.headers;
//     console.log(allHeaders.miniproject);
//     if(allHeaders.miniproject == "ashokit"){
//          return next();
//     }else{
//         res.status(401).send({"message":"unauthorised user"})
//     }
// }



//create the GET Request
app.get("/products",(req,res)=>{
    miniproject.connect("mongodb+srv://admin:admin@cluster0.jgnmk.mongodb.net/ngworkshop?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("ngworkshop");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});


//assign the port number
let port = process.env.PORT || 8080; 
app.listen(port,()=>{
    console.log("serve started successfully !!!");
});


