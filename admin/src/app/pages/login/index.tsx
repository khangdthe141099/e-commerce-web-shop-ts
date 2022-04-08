import React from "react";
import { useState } from "react";
import { loginStart } from '../../../features/user/userSlice'
import { useUser } from '../../../features/hook'
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    e.preventDefault()
    dispatch(loginStart({username, password}))
  } 


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width: 100 }}>Login</button>
    </div>
  );
};

export default Login;
