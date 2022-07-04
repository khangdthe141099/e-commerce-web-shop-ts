import React, { useEffect } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../../../features/user/userSlice";
import { useUser } from "../../../features/hook";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Topbar() {
  const { currentUser } = useUser();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  useEffect(() => {
    currentUser === null && navigate("/login");
  }, [currentUser, navigate]);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <div className="topLeft">
            <span
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
              }
              className="logo"
            >
              K-Tech Admin
            </span>
          </div>
        </Link>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Tooltip title="Notifications">
              <NotificationsNone />
            </Tooltip>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Tooltip title="Language">
              <Language />
            </Tooltip>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Tooltip title="Settings">
              <Settings />
            </Tooltip>
          </div>
          <div onClick={handleLogout} className="topbarIconContainer">
            <Tooltip title="Logout">
              <LogoutIcon />
            </Tooltip>
          </div>
          <img
            src={
              currentUser?.img ||
              "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
            }
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
