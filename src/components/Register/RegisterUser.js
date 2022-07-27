import { Email, Person, Phone, Security } from "@material-ui/icons";
import FieldSet from "../FieldSet/FieldSet";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";

import styles from "./RegisterUser.module.css";

const RegisterUser = (props) => {
  const classes = `${props.className}`;

  return (
    <div className={classes}>
      <Card>
        <Form>
          <p className={styles["form-title"]}>Create Account</p>

          <FieldSet label="Full Name:">
            <input />
            <div className={styles["input-icon"]}>
              <Person className={styles["input-icon-color"]} />
            </div>
          </FieldSet>

          <FieldSet label="Email Address:">
            <input />
            <div className={styles["input-icon"]}>
              <Email className={styles["input-icon-color"]} />
            </div>
          </FieldSet>

          <FieldSet label="Phone Number:">
            <input />
            <div className={styles["input-icon"]}>
              <Phone className={styles["input-icon-color"]} />
            </div>
          </FieldSet>

          <FieldSet label="Password:">
            <input />
            <div className={styles["input-icon"]}>
              <Security className={styles["input-icon-color"]} />
            </div>
          </FieldSet>

          <Button type="submit">Create Account</Button>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterUser;
