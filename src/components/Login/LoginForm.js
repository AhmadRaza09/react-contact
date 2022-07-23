import { Email, Security } from "@material-ui/icons";

import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  const classes = `${props.className}`;

  return (
    <div className={classes}>
      <div className={styles.card}>
        <form className={styles.form}>
          <p className={styles["form-title"]}>Login to Your Account</p>

          <fieldset className={styles["form-input"]}>
            <legend className={styles["input-label"]}>Email Address:</legend>
            <input />
            <div className={styles["input-icon"]}>
              <Email className={styles["input-icon-color"]} />
            </div>
          </fieldset>

          <fieldset className={styles["form-input"]}>
            <legend className={styles["input-label"]}>Password:</legend>
            <input />
            <div className={styles["input-icon"]}>
              <Security className={styles["input-icon-color"]} />
            </div>
          </fieldset>

          <button className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
