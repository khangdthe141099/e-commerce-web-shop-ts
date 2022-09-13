import React, { useState, useEffect } from "react";
import "./login-page.css";
import banner from "../../../assets/images/login-page.jpg";
import { Facebook, Google, Twitter } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginStart } from "../../../features/user/userSlice";
import { getProductStart } from "../../../features/product/productSlice";
import { getUserStart } from "../../../features/user/userSlice";
import { useUser } from "../../../features/hook";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser, isFetching } = useUser();
  const admin = currentUser?.isAdmin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!isFetching) {
      e.preventDefault();
      dispatch(loginStart({ username, password }));
      dispatch(getProductStart());
      dispatch(getUserStart());
    }
  };

  useEffect(() => {
    admin && navigate("/");
  }, [admin, navigate]);

  return (
    <div className="loginContainer">
      <div className="loginContainer_left">
        <img src={banner} alt="" />
      </div>

      <div className="loginContainer__right">
        <div className="loginContainer__right-top">
          <div className="loginContainer__right-top-title">Login</div>

          <div className="loginContainer__right-top-input">
            <label for="username">Username</label>
            <input
              type="text"
              placeholder="username"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="loginContainer__right-top-input">
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="loginContainer__right-top-checkbox">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>

          <button
            onClick={handleClick}
            className={isFetching ? "signInBtn btnLoad" : "signInBtn"}
          >
            Sign in
          </button>

          <div className="signUp">
            Don't have an account ? <a href="/">Sign up</a>
          </div>
        </div>

        <div className="loginContainer__right-bottom">
          <div className="loginContainer__right-bottom-title">
            Login with social media
          </div>

          <div className="list__socialMedia">
            <div className="icon">
              <Facebook sx={{ width: "30px", height: "30px" }} />
            </div>
            <div className="icon">
              <Google sx={{ width: "30px", height: "30px" }} />
            </div>
            <div className="icon">
              <Twitter sx={{ width: "30px", height: "30px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
