import styles from "./FieldSet.module.css";

const FieldSet = (props) => {
  const classes = `${props.className} ${styles.fieldset}`;

  return (
    <fieldset className={classes}>
      <legend className={styles["fieldset-label"]}>{props.label}</legend>
      {props.children}
    </fieldset>
  );
};

export default FieldSet;
