const { Server } = require("socket.io");
const { createServer } = require("http");
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

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
  socket.on("event-a", (arg) => {
    console.log("arg : ", arg);
    const room = findRoom();
    room.count += 1;
    roomMap[socket.id] = room.id;
    console.log("room: ", room);
    socket.join(room.id);
  });
  socket.on("signal", () => {
    const id = roomMap[socket.id];
    socket.to(id).emit("signal");
    console.log(socket.rooms);
  });
  console.log("socket.rooms : ", socket.rooms);
});
io.listen(4000, () => console.log("app is listening"));
