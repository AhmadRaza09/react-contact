import styles from "./Header.module.css";

import logo from "./../../assests/img/logo.png";
import { useState } from "react";
import AncherTag from "../UI/AncherTag";

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
          <AncherTag
            link="/"
            id="main"
            onClick={activeLinkHandler}
            className={mainActiveClass}
          >
            Contact
          </AncherTag>
        </h1>
      </div>

      <div className={styles.link}>
        <ul>
          <li>
            <AncherTag
              link="/"
              id="account"
              onClick={activeLinkHandler}
              className={accountActiveClass}
            >
              Create Account
            </AncherTag>
          </li>

          <li>
            <AncherTag
              link="/"
              id="login"
              onClick={activeLinkHandler}
              className={loginActiveClass}
            >
              Login
            </AncherTag>
          </li>

          <li>user name</li>

          <li>
            <AncherTag link="/">Logout</AncherTag>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
