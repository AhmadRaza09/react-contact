import styles from "./Header.module.css";

import logo from "./../../assests/img/logo.png";

const Header = (props) => {
  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1>
          <a href="/">Contact</a>
        </h1>
      </div>
      <div className={styles.link}>
        <ul>
          <li>
            <a href="/">Create Account</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">user name</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
