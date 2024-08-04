import React from "react";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
const BoardList = () => {
  const [boardInfo, setBoardInfo] = useState([]);
  axios
    .get("/board/select/list")
    .then((res) => {
      setBoardInfo(res.data);
    })
    .catch((error) => {});
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
            {boardInfo.map((d) => (
              <tr key={d.no}>
                <td>
                  <Link to={`/users/personalInfo/${d.no}`}>{d.no}</Link>
                </td>
                <td>{d.title}</td>
                <td>{d.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="details">{/* <Routes></Routes> */}</div>
    </div>
  );
};

export default BoardList;
