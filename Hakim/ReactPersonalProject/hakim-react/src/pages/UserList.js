import React from "react";
import { useEffect, useState } from "react";

// const User = ({ userData }) => {
//   return (
//     <tr>
//       <td>{userData.name}</td>
//       <td>{userData.email}</td>
//     </tr>
//   );
// };

const UserList = () => {
  const [userInfo, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("err " + err));
  }, []);

  return (
    <table>
      <thead>
        <th>ID</th>
        <th>name</th>
        <th>IsDeleted</th>
        <th>CreateDate</th>
        <th>UpdateDate</th>
      </thead>
      <tbody>
        {userInfo.map((d, i) => (
          <tr key={i}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.delete_flag}</td>
            <td>{d.created_at}</td>
            <td>{d.updated_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
