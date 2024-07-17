import React from "react";
import { useState } from "react";
import axios from "axios";
import "./CSS/AddUser.css";
const AddUser = () => {
  const [formData, setFormData] = useState({
    id: "",
    pw: "",
    name: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/user/register", formData)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="addUserForm">
        <h1>ユーザー登録</h1>
        <div>
          <label htmlFor="ID">ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="pw">Password:</label>
          <input
            type="text"
            id="pw"
            name="pw"
            value={formData.pw}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">name:</label>
          <input
            type="name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <input type="submit" value="登録" />
      </form>
    </div>
  );
};

export default AddUser;
