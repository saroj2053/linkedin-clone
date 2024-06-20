import React, { useContext } from "react";
import "./HeaderOption.css";

import Avatar from "@mui/material/Avatar";
import { UserContext } from "../../context/user-context";

const HeaderOption = ({ avatar, Icon, title }) => {
  const { user } = useContext(UserContext);
  const isProfileIcon = avatar === user.user.avatar;
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          className={`${
            isProfileIcon ? "headerOption__profileIcon" : "headerOption__icon"
          }`}
          src={avatar}
        />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
