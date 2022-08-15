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
              <a href="https://podbay.fm/p/the-vinyl-reckoning-podcast">
                episodes
              </a>
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
      {/* Desktop */}
      <div class="navbar-desk">
        <div className="nav-align">
          <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <div class="logo">
              <h1>vinyl reckoning</h1>
              <div class="menu-items">
                <div className="align">
                  <li>
                    <a href="/">home</a>
                  </li>
                  <li>
                    <a href="https://podbay.fm/p/the-vinyl-reckoning-podcast">
                      episodes
                    </a>
                  </li>
                  <li>
                    <a href="https://vinyl-reckoning.creator-spring.com/?">
                      merch
                    </a>
                  </li>
                  <li>
                    <a href="https://us2.list-manage.com/contact-form?u=c898e433485bbd95d0c0e78e3&form_id=a7ff6e901d347fcb18affda0683ef542">
                      contact
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavbarStyles>
  );
}

export default Navbar;
