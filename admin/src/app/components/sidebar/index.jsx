import React, { useState, useEffect } from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { dashboard, quickMenu } from "./data";

export default function Sidebar() {
  const [sideBarType, setSideBarType] = useState("");
  const [dashboardType, setDashboardType] = useState("");

  console.log(dashboardType);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {dashboard.map((item, index) => (
              <Link to={item.link} className="link" key={index}>
                <li
                  onClick={() => setDashboardType(item.type)}
                  className={
                    dashboardType === item.type
                      ? "sidebarListItem active"
                      : "sidebarListItem"
                  }
                >
                  {item.icon}
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            {quickMenu.map((item, index) => (
              <Link to={item.link} className="link" key={index}>
                <li
                  onClick={() => setDashboardType(item.type)}
                  className={
                    dashboardType === item.type
                      ? "sidebarListItem active"
                      : "sidebarListItem"
                  }
                >
                  {item.icon}
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
