import React, { useState, useEffect } from "react";
import axios from "axios";

const MyPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("Test");
  }, []);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/MyPage", {
        email,
        password,
      });
      setMessage(response.data.message);
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred");
      }
    }
  };

  return (
    <div>
      <h2>MyPage</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">MyPage</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MyPage;
