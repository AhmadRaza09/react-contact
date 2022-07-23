import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  const classes = `${props.className}`;

  return <p className={classes}>Login from your Account</p>;
};

export default LoginForm;
