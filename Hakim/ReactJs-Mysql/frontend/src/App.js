import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Math from "./pages/Math";
import AddUser from "./pages/AddUser";
import BoardList from "./pages/BoardList";
import UserList from "./pages/UserList";

function App() {
  return (
    <div className="App">
      <Header />
      <nav className="headerNav">
        <Link to="/home">Home</Link>
        <Link to="/math">Math</Link>
        <Link to="/boardList">BoardList</Link>
        <Link to="/addUser">AddUser</Link>
        <Link to="/users">UserList</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/math" element={<Math />} />
        <Route path="/boardList" element={<BoardList />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/users/*" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
