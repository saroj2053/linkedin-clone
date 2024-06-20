import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import "./Sidebar.css";
import { UserContext } from "../../context/user-context";

const Sidebar = () => {
  const { user } = useContext(UserContext);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__top">
          <img
            src="https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <Avatar className="sidebar__avatar" />
          <h2>{user.user.name}</h2>
          <h4>{user.user.email}</h4>
        </div>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who's viewed your profile</p>
            <p className="sidebar__statNumber">25</p>
          </div>
          <div className="sidebar__stat">
            <p>Impressions of your post</p>
            <p className="sidebar__statNumber">284</p>
          </div>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("reactjs")}
          {recentItem("programming")}
          {recentItem("softwareengineering")}
          {recentItem("design")}
          {recentItem("developer")}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
