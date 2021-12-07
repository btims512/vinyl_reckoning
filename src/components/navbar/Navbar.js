import React from "react";
import { NavbarStyles } from "./NavbarStyles.js";

function Navbar() {
  return (
    <NavbarStyles>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="logo">
            <h1>vinyl reckoning</h1>
          </div>
          <div class="menu-items">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="https://vinylreckoning.podbean.com">episodes</a>
            </li>
            <li>
              <a href="https://vinyl-reckoning.creator-spring.com/?">merch</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </div>
        </div>
      </div>
    </NavbarStyles>
  );
}

export default Navbar;
