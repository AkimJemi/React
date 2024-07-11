// import logo from "./logo.svg";
import { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");
console.log(socket);
socket.on("event-b", () => {
  console.log("get event b");
});
function App() {
  const [input, setInput] = useState(0);
  // useEffect(() => {
  // setInput(input + 1);
  // });n

  return (
    <div className="App">
      <button
        onClick={(event) => {
          setInput(input + 1);
        }}
      >
        Emit
      </button>
      <a>{input}</a>
    </div>
  );
}

export default App;
