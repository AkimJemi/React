import logo from "./logo.svg";
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
    socket.emit("join");
  }, []);
  return (
    <div className="App">
      <button
        onClick={() => {
          socket.emit("signal");
        }}
      >
        Emit
      </button>
    </div>
  );
}

export default App;
