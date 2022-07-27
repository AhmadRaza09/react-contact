import styles from "./Button.module.css";

const Button = (props) => {
  const classes = `${props.className} ${styles.button}`;

  const type = props.type ? props.type : "button";

  return (
    <button type={type} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
