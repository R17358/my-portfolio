import React from "react";
import playStore from "./googlePlay.png";
import appStore from "./appStore.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h2>DOWNLOAD OUR APP</h2>
        <p>We will soon publish apps ....</p>
        <a target="_blank" href="http://play.google.com/store/games?hl=en"><img src={playStore} alt="playstore" /></a>
        <a target="_blank" href="http://www.apple.com/in/app-store/"><img src={appStore} alt="Appstore" /></a>
      </div>

      <div className="midFooter">
        <h1>My Portfolio</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; MeRiteshPandit</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a target="_blank" href="http://instagram.com/">Instagram</a>
        <a target="_blank" href="https://www.youtube.com">Youtube</a>
        <a target="_blank" href="https://www.facebook.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
