console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
// const fs = require("fs");

//Mongo DB chaqirish
const db = require("./server").db();
// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if (err) {
//         console.log("ERROR:", err);
//     } else {
//         user = JSON.parse(data);
//     }
// });
// 1: KIrish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: section  code

// 3: views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
// app.get("/hello", function (req, res) {
//     res.end(`<h1>HELLO WORLD by John</h1>`);
// });

// app.get("/gift", function (req, res) {
//     res.end(`<h1>Sz sovgalar bolimidasz</h1>`);
// });
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
          res.end("successfully added");  
        }
    });
    // TOTO: code with db here
});
// app.get("/author", (req, res) => {
//     res.render("author", { user: user });
// });

app.get("/", function (req, res) {
    console.log("user entered /create-item");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            
            res.render("reja", { items: data});
        }
    });
});
module.exports = app;

