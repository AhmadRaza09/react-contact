import { Email, Security } from "@material-ui/icons";
import FieldSet from "../FieldSet/FieldSet";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";

import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  const classes = `${props.className}`;

  return (
    <div className={classes}>
      <Card>
        <Form>
          <p className={styles["form-title"]}>Login to Your Account</p>

          <FieldSet label="Email Address:">
            <input />
            <div className={styles["input-icon"]}>
              <Email className={styles["input-icon-color"]} />
            </div>
          </FieldSet>

          <FieldSet label="Password:">
            <input />
            <div className={styles["input-icon"]}>
              <Security className={styles["input-icon-color"]} />
            </div>
          </FieldSet>

          <Button type="submit">Login</Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
