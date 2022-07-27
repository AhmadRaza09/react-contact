import styles from "./AncherTag.module.css";

const AncherTag = (props) => {
  const classes = props.className;
  return (
    <a
      href={props.link}
      alt={props.alt}
      onClick={props.onClick}
      id={props.id}
      className={classes}
    >
      {props.children}
    </a>
  );
};

export default AncherTag;
