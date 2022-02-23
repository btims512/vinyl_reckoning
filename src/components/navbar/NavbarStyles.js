import styled from "styled-components";

export const NavbarStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* max-width: 1200px; */
  }

  body {
    font-family: "Poppins", sans-serif;
    max-width: 1200px;
  }

  .container {
    width: 90%;
    margin: auto;
  }

  .navbar {
    width: 100vw;
    max-width: 100vw;
    box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
    background-color: rgba(41, 50, 56);
  }
  .navbar-desk {
    width: 100vw;
    max-width: 100vw;
    box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
    background-color: rgba(41, 50, 56);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
  }

  .navbar .menu-items {
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    background-color: #293238;
  }

  .navbar .nav-container li {
    list-style: none;
  }

  .navbar .nav-container a {
    text-decoration: none;
    color: rgb(234, 51, 161);
    font-weight: 500;
    font-size: 2rem;
    padding: 0.7rem;
  }

  .navbar .nav-container a:hover {
    font-weight: bolder;
  }

  .nav-container {
    display: block;
    /* position: relative; */
    height: 60px;
    margin-left: 1.3rem;
  }

  .nav-container .checkbox {
    position: absolute;
    display: block;
    height: 32px;
    width: 32px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .nav-container .hamburger-lines {
    display: block;
    height: 26px;
    width: 32px;
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .nav-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: rgb(234, 51, 161);
  }

  .nav-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .nav-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .nav-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 120px;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0);
    height: 100vh;
    width: 100vw;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -20px;
    padding-top: 90px;
    /* padding-left: 50px; */
    transition: transform 0.5s ease-in-out;
    text-align: center;
  }
  .navbar .menu-items {
    padding-top: 120px;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0);
    height: 100vh;
    width: 100vw;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -20px;
    padding-top: 90px;
    /* padding-left: 50px; */
    transition: transform 0.5s ease-in-out;
    text-align: center;
  }

  .navbar .menu-items li {
    margin-bottom: 1.2rem;
    font-size: 2.5rem;
    font-weight: 500;
  }

  .logo {
    position: absolute;
    top: 5px;
    display: flex;
    right: 15px;
    font-size: 1.2rem;
    color: #fafafa;
    flex-direction: row-reverse;
    align-items: center;
  }

  .nav-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }

  .nav-container input[type="checkbox"]:checked ~ .logo {
    display: none;
  }

  @media (max-width: 866px) {
    .navbar {
      width: 100vw;
      max-width: 100vw;
      box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
      background-color: rgba(41, 50, 56);
    }

    .navbar-desk {
      display: none;
    }
  }

  @media (min-width: 866px) and (max-width: 12000px) {
    .navbar {
      display: none;
    }

    .navbar .menu-items {
      gap: 43px;
    }
    .nav-container .checkbox {
      display: none;
    }

    .nav-container .hamburger-lines {
      display: none;
    }

    .nav-container .hamburger-lines .line {
      display: none;
    }

    .navbar-desk .menu-items {
      display: flex;
      padding-left: 20px;
      background-color: rgba(0, 0, 0, 0.5);
      background-color: #293238;
    }

    .navbar-desk .nav-container li {
      list-style: none;
    }

    .navbar-desk .nav-container a {
      text-decoration: none;
      color: rgb(234, 51, 161);
      font-weight: 500;
      font-size: 2rem;
      padding: 0.7rem;
    }

    .navbar-desk .nav-container a:hover {
      font-weight: bolder;
    }

    .align {
      display: flex;
    }

    .logo {
      position: absolute;
      top: 5px;
      width: 100vw;
      justify-content: space-between;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      right: 15px;
      font-size: 1.2rem;
      color: #fafafa;
      -webkit-flex-direction: row-reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
`;
