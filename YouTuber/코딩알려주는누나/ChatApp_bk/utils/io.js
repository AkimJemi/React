module.exports = function (io) {
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);
    socket.on("login", (userName, cb) => {
      console.log(userName);
    });
    socket.on("disconnect", () => {
      console.log("user is disconnected");
    });
  });
};
