import React, { useState } from 'react';
import "./Header.css";
import { HashLink as Link } from 'react-router-hash-link';
import download from './download.png'

function Header() {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    // document.querySelectorAll('#root p').forEach(element => {
    //   element.style.color = isDark?'black':'white';
    // });
    if (isDark) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
      document.body.classList.add('dark-theme');
    }
    setIsDark(!isDark)
  }

  return (
    <div className="header" id='header'>

      <div className="left" id='left'>
        <Link to="/#intro">Introduction</Link>
        <Link to="/#education">Education</Link>
        <Link to="/#skills">Skills</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/#hobbies">Hobbies</Link>
        <Link to="/#experience">Experience</Link>
        <Link to="/#resume">Resumes <i className="bx bxs-download"></i>
        </Link>
      </div>
      <div className="right">
        <button id='theme' onClick={changeTheme}></button>
      </div>
    </div>
  );
}

export default Header;
