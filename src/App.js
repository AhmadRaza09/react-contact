import { useState } from "react";
import styles from "./App.module.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";

function App() {
  const [showContent, setShowContent] = useState("");
  const showContentHandler = (value) => {
    setShowContent(value);
  };

  // console.log(showContent);

  let whichComponentToShow = "";

  switch (showContent) {
    case "account":
      whichComponentToShow = (
        <div className={styles.others}>create account</div>
      );
      break;
    case "login":
      whichComponentToShow = <div className={styles.others}>login</div>;
      break;
    default:
      whichComponentToShow = <div className={styles.others}>main content</div>;
  }

  return (
    <>
      <Header showContent={showContentHandler} />
      {whichComponentToShow}
      <Footer />
    </>
  );
}

export default App;
