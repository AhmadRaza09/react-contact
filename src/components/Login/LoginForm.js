import { Email, Person, Phone, Security } from "@material-ui/icons";

import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  const classes = `${props.className}`;

  return (
    <div className={classes}>
      <div className={styles.card}>
        <form className={styles.form}>
          <p className={styles["form-title"]}>Create Account</p>

          <fieldset className={styles["form-input"]}>
            <legend className={styles["input-label"]}>Full Name:</legend>
            <input />
            <div className={styles["input-icon"]}>
              <Person className={styles["input-icon-color"]} />
            </div>
          </fieldset>

          <fieldset className={styles["form-input"]}>
            <legend className={styles["input-label"]}>Email Address:</legend>
            <input />
            <div className={styles["input-icon"]}>
              <Email className={styles["input-icon-color"]} />
            </div>
          </fieldset>

          <fieldset className={styles["form-input"]}>
            <legend className={styles["input-label"]}>Phone Number:</legend>
            <input />
            <div className={styles["input-icon"]}>
              <Phone className={styles["input-icon-color"]} />
            </div>
          </fieldset>

          <fieldset className={styles["form-input"]}>
            <legend className={styles["input-label"]}>Password:</legend>
            <input />
            <div className={styles["input-icon"]}>
              <Security className={styles["input-icon-color"]} />
            </div>
          </fieldset>

          <button className={styles.button}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
