import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import "./CSS/UserList.css";

const UserList = () => {
  const [userInfo, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("err " + err));
  }, []);

  return (
    <div className="container">
      <div className="list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>名前</th>
              <th>削除有無</th>
            </tr>
          </thead>
          <tbody>
            {userInfo.map((d) => (
              <tr key={d.id}>
                <td>
                  <Link to={`/users/personalInfo/${d.id}`}>{d.id}</Link>
                </td>
                <td>{d.name}</td>
                <td>{d.delete_flag === 0 ? "O" : "X"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="details">
        <Routes>
          <Route path="/personalInfo/:id" element={<PersonalInfo />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserList;
