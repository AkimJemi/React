import { useEffect } from "react";
import "./App.css";

import socket from "./server";

function App() {
  useEffect(() => {
    askUserName();
  }, []);
  const askUserName = () => {
    const userName = prompt("What is your name?");
    socket.emit("login", userName, (res) => {
      console.log("Res", res);
    });
  };
  return (
    <div>
      <div className="App"></div>
    </div>
  );
}

export default App;
