// import logo from "./logo.svg";
import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");
console.log(socket);
socket.on("event-b", () => {
  console.log("get event b");
});
function App() {
  useEffect(() => {
    askUserName();
    socket.emit("join");
  }, []);
  const askUserName = () => {
    const userName = prompt("What is your name?");
    socket.emit("login", userName, (status, message) => {
      if (status === true) {
        console.log(message);
      } else {
        throw new Error("Login Error");
      }
    });
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          socket.emit("signal");
          askUserName();
        }}
      >
        Emit
      </button>
    </div>
  );
}

export default App;
