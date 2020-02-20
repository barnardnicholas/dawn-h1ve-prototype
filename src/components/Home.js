import React from "react";
import "./home.css";
import HomeSplash from "./HomeSplash";
import HomeFindOutMore from "./HomeFindOutMore";
import HomeBookNow from "./HomeBookNow";
import HomeCommunity from "./HomeCommunity";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div id="home">
      <NavBar />
      <HomeSplash />
      <HomeFindOutMore />
      <HomeBookNow />
      <HomeCommunity />
      <Footer />
    </div>
  );
};

export default Home;
