import React, { useContext } from "react";

import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import AppsIcon from "@mui/icons-material/Apps";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "../HeaderOption/HeaderOption.jsx";
import { UserContext } from "../../context/user-context.jsx";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="header">
      <div className="header__contents">
        <div className="header__left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
            alt="logo"
          />

          <div className="header__search">
            <span style={{ marginRight: "10px" }}>
              <SearchIcon />
            </span>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          {user ? (
            <HeaderOption avatar={user.user.avatar} />
          ) : (
            <HeaderOption
              avatar="https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1680547808~exp=1680548408~hmac=b170bcf0cc4136c35be651998885374c7b45899297002c7d25f7b863eac727ff"
              title="me"
            />
          )}
          <span
            style={{ borderRight: "1px solid lightgray", margin: "0 20px" }}
          ></span>
          <HeaderOption Icon={AppsIcon} title="For Business" />
          <HeaderOption
            Icon={WorkspacePremiumIcon}
            title="Try Premium for free"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
