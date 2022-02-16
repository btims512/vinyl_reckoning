import styled from "styled-components";

export const FooterStyles = styled.div`
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #263238;
    text-align: center;
    color: #f4f4f4;
  }

  .icons {
    padding-top: 1rem;
  }

  .icons a {
    text-decoration: none;
    font-size: 2rem;
    margin: 0.5rem;
    color: #f4f4f4;
  }

  .company-name {
    font-size: 1.6rem;
    margin-top: 0.5rem;
  }

  /* icons */
  .fa-facebook:hover {
    color: #4267b2;
  }

  .fa-instagram:hover {
    color: #9b2d40;
  }

  .fa-apple:hover {
    color: silver;
  }

  .fa-spotify:hover {
    color: #1db954;
  }

  @media (max-width: 500px) {
    .company-name {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  }

  @media (min-width: 501px) and (max-width: 768px) {
    html {
      font-size: 50%;
    }
  }
`;

export default FooterStyles;
