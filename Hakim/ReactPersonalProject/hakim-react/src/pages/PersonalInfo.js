import React from "react";
import { useState } from "react";

const PersonalInfo = () => {
  const [inputs, setInputs] = useState({
    name: "",
    id: "",
    pw: "",
    email: "",
  });
  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };
  return (
    <div>
      <h1>PersonalInfo{this}</h1>
      <input
        id="name"
        placeholder="name"
        value={inputs.name}
        onChange={onChange}
      />
      <input id="id" placeholder="id" value={inputs.id} onChange={onChange} />
      <input id="pw" placeholder="pw" value={inputs.pw} onChange={onChange} />
      <input
        id="email"
        placeholder="email"
        value={inputs.email}
        onChange={onChange}
      />

      <h4>{inputs.name}</h4>
      <h4>{inputs.id}</h4>
      <h4>{inputs.pw}</h4>
      <h4>{inputs.email}</h4>
    </div>
  );
};

export default PersonalInfo;
