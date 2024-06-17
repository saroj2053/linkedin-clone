import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Feed from "../../components/Feed/Feed.jsx";
import Widget from "../../components/Widget/Widget.jsx";

const Home = () => {
  return (
    <div className="home">
      {/* Header component */}
      <Header />
      <div className="home__body">
        {/* Sidebar Component */}
        <Sidebar />
        {/* Feed Component */}
        <Feed />
        {/* Widgets Component */}
        <Widget />
      </div>
    </div>
  );
};

export default Home;
