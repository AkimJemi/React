import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CSS/PersonalInfo.css";

const PersonalInfo = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [deleteFlag, setDeleteFlag] = useState(null);
  const [updateMode, setUpdateMode] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const updateUserDeleteFlag = (e) => {
    e.preventDefault();
    axios
      .post("/user/update/delete_flag", {
        id,
        delete_flag: e.target.value === "0" ? 1 : 0,
      })
      .then((response) => {
        alert(response.data.message);
        setUserInfo({
          ...userInfo,
          [e.target.id]: response.data.delete_flag,
        });
        setDeleteFlag(response.data.delete_flag === 0 ? "O" : "X");
      })
      .catch((error) => {
        alert(error.response?.data?.error || "An error occurred");
      });
  };
  const updateModeChange = (e) => {
    if (updateMode === false) {
      e.preventDefault();
      axios
        .post(`/user/update/${id}`, userInfo)
        .then((response) => {
          alert(response.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
    setUpdateMode(!updateMode);
  };
  useEffect(() => {
    fetch(`http://localhost:8081/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
        setDeleteFlag(data.delete_flag === 0 ? "O" : "X");
      })
      .catch((err) => console.log("Error: ", err));
  }, [id]);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form className="addUserForm">
        <h2>User Information</h2>
        <p>
          ID:{" "}
          <input
            name="id"
            value={userInfo.id}
            onChange={handleChange}
            disabled={updateMode}
          />
        </p>
        <p>
          パスワード:{" "}
          <input
            name="pw"
            value={userInfo.pw}
            onChange={handleChange}
            disabled={updateMode}
          />
        </p>
        <p>
          名前:{" "}
          <input
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            disabled={updateMode}
          />
          {updateMode}
        </p>
        <p>
          削除有無:{" "}
          <button
            onClick={updateUserDeleteFlag}
            id="delete_flag"
            value={userInfo.delete_flag}
            disabled={updateMode}
          >
            {deleteFlag}
          </button>
        </p>
        <p>登録日付: {userInfo.created_at}</p>
        <p>
          更新日付:{" "}
          {userInfo.updated_at === "0000-00-00 00:00"
            ? "更新なし"
            : userInfo.updated_at}
        </p>
        <p>
          <input
            type="button"
            onClick={updateModeChange}
            value={updateMode === true ? "編集" : "更新"}
          />
        </p>
      </form>
    </div>
  );
};

export default PersonalInfo;
