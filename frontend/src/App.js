import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");
console.log(socket);
function App() {
  return <div className="App"></div>;
}
export default App;
