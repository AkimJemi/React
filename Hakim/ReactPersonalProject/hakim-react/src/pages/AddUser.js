import React from "react";
import { useState } from "react";
import axios from "axios";
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
    console.log(formData);
    console.log("test");
    e.preventDefault();
    axios
      .post("http://localhost:8081/register", formData)
      .then((response) => {
        console.log(response.data);
        alert("User registered successfully");
      })
      .catch((error) => {
        console.error("There was an error registering the user!", error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="pw">pw:</label>
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
          <label htmlFor="password">Password:</label>
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
