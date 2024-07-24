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
        .then((res1) => {
          alert(res1.data);
          // 20240724
          axios
            .get(`/users/${userInfo.id}`)
            .then((res2) => {
              setUserInfo(res2.data);
            })
            .catch((err2) => {
              alert(err2);
            });
        })
        .catch((err1) => {
          alert(err1);
        });
    }
    alert(userInfo.id);
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
      <form className="PersonalInfoForm">
        <h2>User Information</h2>
        <div className="form-group">
          <label>ID:</label>
          <input
            name="id"
            value={userInfo.id}
            onChange={handleChange}
            disabled={updateMode}
          />
        </div>
        <div className="form-group">
          <label>パスワード:</label>
          <input
            name="pw"
            value={userInfo.pw}
            onChange={handleChange}
            disabled={updateMode}
          />
        </div>
        <div className="form-group">
          <label>名前:</label>
          <input
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            disabled={updateMode}
          />
        </div>
        <div className="form-group">
          <label>削除有無:</label>
          <button
            onClick={updateUserDeleteFlag}
            id="delete_flag"
            value={userInfo.delete_flag}
            disabled={updateMode}
          >
            {deleteFlag}
          </button>
        </div>
        <div className="form-group">
          <label>更新日付:</label>
          <span>
            {userInfo.updated_at === "0000-00-00 00:00"
              ? "×"
              : userInfo.updated_at}
          </span>
        </div>
        <div className="form-group">
          <label>登録日付:</label>
          <span>{userInfo.created_at}</span>
        </div>
        <div className="form-group">
          <input
            type="button"
            onClick={updateModeChange}
            value={updateMode ? "編集" : "更新"}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
