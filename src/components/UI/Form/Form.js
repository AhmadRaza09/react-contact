import styles from "./Form.module.css";

const Form = (props) => {
  const classes = `${props.className} ${styles.form}`;

  return (
    <from className={classes} onSubmit={props.onSubmit}>
      {props.children}
    </from>
  );
};

export default Form;
