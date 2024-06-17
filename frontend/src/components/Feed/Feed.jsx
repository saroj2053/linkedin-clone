import React from "react";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

import "./Feed.css";

import InputOption from "../InputOption/InputOption.jsx";

const Feed = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Start a post" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} color="#378fe9" title="Photo" />
          <InputOption Icon={SubscriptionsIcon} color="#5f9b41" title="Video" />
          <InputOption Icon={EventNoteIcon} color="#c37d16" title="Event" />
          <InputOption
            Icon={CalendarViewDayIcon}
            color="#e16745"
            title="Write Article"
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
