import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { loginStart } from '../../../features/user/userSlice'
import { getProductStart } from "../../../features/product/productSlice";
import { getUserStart } from "../../../features/user/userSlice";
import { useUser } from '../../../features/hook'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser } = useUser()
  const admin = currentUser?.isAdmin
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    e.preventDefault()
    dispatch(loginStart({username, password}))
    dispatch(getProductStart())
    dispatch(getUserStart())
  } 

  useEffect(() => {
    admin && navigate('/')
  }, [admin, navigate])

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
