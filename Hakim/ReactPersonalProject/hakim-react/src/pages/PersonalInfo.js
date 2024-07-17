import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CSS/PersonalInfo.css";

const PersonalInfo = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [deleteFlag, setDeleteFlag] = useState(null);
  const [updateMode, setUpdateMode] = useState(null);
  // 2024717
  const updateUserDeleteFlag = (e) => {
    e.preventDefault();
    axios
      .post("/user/update/delete_flag", {
        id,
        delete_flag: e.target.value === "0" ? 1 : 0,
      })
      .then((response) => {
        alert(response.data.message); // Assuming the server responds with { message: "..." }
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
    return <div>Loading...</div>; // 데이터 로드 중일 때 로딩 메시지 표시
  }

  return (
    <div>
      <h2>User Information</h2>
      <p>ID: {userInfo.id}</p>
      <p>パスワード: {userInfo.pw}</p>
      <p>名前: {userInfo.name}</p>
      <p>
        削除有無:{" "}
        <button
          onClick={updateUserDeleteFlag}
          id="delete_flag"
          value={userInfo.delete_flag}
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
        <button onClick={updateUserDeleteFlag}>編集</button>
      </p>
    </div>
  );
};

export default PersonalInfo;
