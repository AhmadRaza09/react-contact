import styles from "./Header.module.css";

import logo from "./../../assests/img/logo.png";
import { useState } from "react";

const Header = (props) => {
  const [activeLink, setActiveLink] = useState("");

  const activeLinkHandler = (e) => {
    e.preventDefault();

    setActiveLink(e.target.id);

    props.showContent(e.target.id);
  };

  // console.log(activeLink);

  let mainActiveClass = "";
  let loginActiveClass = "";
  let accountActiveClass = "";

  switch (activeLink) {
    case "account":
      accountActiveClass = styles.active;
      break;
    case "login":
      loginActiveClass = styles.active;
      break;
    default:
      mainActiveClass = styles.active;
  }

  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1>
          <a
            href="/"
            id="main"
            onClick={activeLinkHandler}
            className={mainActiveClass}
          >
            Contact
          </a>
        </h1>
      </div>

      <div className={styles.link}>
        <ul>
          <li>
            <a
              href="/"
              onClick={activeLinkHandler}
              id="account"
              className={accountActiveClass}
            >
              Create Account
            </a>
          </li>

          <li>
            <a
              href="/"
              onClick={activeLinkHandler}
              id="login"
              className={loginActiveClass}
            >
              Login
            </a>
          </li>

          <li>user name</li>

          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
