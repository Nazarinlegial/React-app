import React from "react";
import './Site-bar.css';

const Nav = () => {
  return (
    <nav className="nav">
        <div>
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Music</a></li>
        </ul>
        </div>
        <div className="profile-setting"><a href="#">Settings</a></div>
      </nav>
  )
};

export default Nav;