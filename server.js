const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
    "mongodb+srv://John:MS9rm7BBeNbjnpLD@cluster0.gmbdcan.mongodb.net/Reja?retryWrites=true&w=majority&appName=AtlasApp";
mongodb.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("Mongo DB connection succeed ");
            // console.log(client);
            module.exports = client;
            
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully on port:${PORT}, http://localhost:${PORT}`
                );
            });
        }
    });
