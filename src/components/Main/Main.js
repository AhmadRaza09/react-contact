import styles from "./Main.module.css";

const Main = (props) => {
  const classes = `${props.className}`;

  return <p className={classes}>Entire website content is here</p>;
};

export default Main;
