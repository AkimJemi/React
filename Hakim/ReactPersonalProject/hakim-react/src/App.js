import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Math from "./pages/Math";
import PersonalInfo from "./pages/PersonalInfo";
import UserList from "./pages/UserList";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("err " + err));
  }, []);
  return (
    <div className="App">
      <Header />
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/math">Math</Link>
        <Link to="/personalInfo">Info</Link>
        <Link to="/users">UserList</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/math" element={<Math />} />
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
      <div>
        <table>
          <thead>
            <th>ID</th>
            <th>name</th>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.pk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
