import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Math from "./pages/Math";
import AddUser from "./pages/AddUser";
import PersonalInfo from "./pages/PersonalInfo";
import UserList from "./pages/UserList";
function App() {
  return (
    <div className="App">
      <Header />
      <nav className="headerNav">
        <Link to="/home">Home</Link>
        <Link to="/math">Math</Link>
        <Link to="/personalInfo">Info</Link>
        <Link to="/addUser">AddUser</Link>
        <Link to="/users">UserList</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/math" element={<Math />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
