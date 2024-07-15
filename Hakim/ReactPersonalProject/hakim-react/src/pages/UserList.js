import React from "react";
const User = ({ userData }) => {
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};

const UserList = () => {
  const users = [
    {
      email: "email1",
      name: "name1",
    },
    {
      email: "email2",
      name: "name2",
    },
    {
      email: "email3",
      name: "name3",
    },
    {
      email: "email4",
      name: "name4",
    },
    {
      email: "email5",
      name: "name5",
    },
  ];

  return (
    <table>
      <tbody>
        {users.map((user) => (
          <User userData={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
