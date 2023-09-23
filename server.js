console.log("Web serverni boshlash");
const express = require("express");
const  app = express();
const http = require("http");

// 1: KIrish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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
console.log(req);
res.json({test: "success"});
})
app.get("/", function (req, res) {
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});


