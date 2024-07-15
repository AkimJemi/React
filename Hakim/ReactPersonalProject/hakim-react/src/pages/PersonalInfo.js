import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

const PersonalInfo = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [deleteFlag, setDeleteFlag] = useState(null);
  const updateUserDeleteFlag = (e) => {
    // 20240715 deleteFlag Update
    console.log(userInfo.delete_flag);
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value === 0 ? 1 : 0,
    });
    setDeleteFlag(userInfo.delete_flag === 0 ? "✔️" : "✖️");
  };
  useEffect(() => {
    fetch(`http://localhost:8081/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
        setDeleteFlag(userInfo.delete_flag === 0 ? "✔️" : "✖️");
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
    </div>
  );
};

export default PersonalInfo;
