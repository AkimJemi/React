var express = require("express");


const { Server } = require("socket.io");
const io = new Server();
// var app = express();
// app.get("/ok", (req, res) => {
//   res.send("OK");
// });

// app.listen([port[, host[, backlog]]][, callback])
// app.listen(4000, () => console.log("app is listening"));

// node app.js
io.on("connection", (socket) => {
    console.log("on connection", socket);
});
io.listen(4000);
