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
        <p>Download App for Android and IOS mobile phone</p>
        <Link to="https://play.google.com/store/games?hl=en"><img src={playStore} alt="playstore" /></Link>
        <Link to="https://www.apple.com/in/app-store/"><img src={appStore} alt="Appstore" /></Link>
      </div>

      <div className="midFooter">
        <h1>My Portfolio</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; MeRiteshPandit</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/">Instagram</a>
        <a href="https://studio.youtube.com/channel/UC3jrErO58aI4kiCER_cn5IQ/videos">Youtube</a>
        <a href="http://instagram.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
