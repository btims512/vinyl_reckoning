import React from "react";
import FooterStyles from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faInstagram,
  faApple,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterStyles>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Footer</title>
      <link rel="stylesheet" href="./Footer.css" />
      <footer className="footer">
        <div className="icons">
          <a href="https://www.youtube.com/channel/UCt7RykV_2ImMZ9m06KiHmLQ">
            <i className="fab fa-facebook" />
            <FontAwesomeIcon icon={faYoutube} className="hover:text-blue" />
          </a>
          <a href="https://www.facebook.com/pages/category/Podcast/Vinyl-Reckoning-113882210005620/">
            <i className="fab fa-facebook" />
            <FontAwesomeIcon icon={faFacebook} className="hover:text-blue" />
          </a>
          <a href="https://www.instagram.com/vinyl_reckoning/">
            <i className="fab fa-instagram" />
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://podcasts.apple.com/us/podcast/the-vinyl-reckoning-podcast/id1452882599">
            <i className="fab fa-apple" />
            <FontAwesomeIcon icon={faApple} />
          </a>
          {/* <a href="https://podcasts.apple.com/us/podcast/the-vinyl-reckoning-podcast/id1452882599">
            <i className="fab fa-spotify" />
            <FontAwesomeIcon icon={faSpotify} />
          </a> */}
          <p className="company-name">
            VINYL RECKONING © 2022, ALL Rights Reserved
          </p>
        </div>
      </footer>
    </FooterStyles>
  );
}

export default Footer;
