const { Server } = require("socket.io");
const { createServer } = require("http");
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
console.log(process.env.DB);
mongoose
  .connect(process.env.DB, {})
  .then(() => console.log("connected to database"));

module.exports = app;

const rooms = [];
const roomMap = [];

const findRoom = () => {
  const room = rooms.find((room) => room.count < 2);
  if (room) {
    return room;
  } else {
    const newRoom = {
      id: rooms.length,
      count: 0,
    };
    rooms.push(newRoom);
    return newRoom;
  }
};
io.on("connection", (socket) => {
  // Event : event-a
  socket.on("event-a", (arg) => {
    console.log("arg : ", arg);
    const room = findRoom();
    room.count += 1;
    roomMap[socket.id] = room.id;
    console.log("room: ", room);
    socket.join(room.id);
  });
  // Event : siginal
  socket.on("signal", () => {
    const id = roomMap[socket.id];
    socket.to(id).emit("signal");
    console.log(socket.rooms);
  });
  socket.on("login", (userName, cb) => {
    console.log("Backend login info ", userName);
    cb(true, "Login Succeed");
  });
});
io.listen(4000, () => console.log("app is listening"));
