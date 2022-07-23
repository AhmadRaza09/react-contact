import { useState } from "react";
import styles from "./App.module.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import LoginForm from "./components/Login/LoginForm";
import Main from "./components/Main/Main";
import RegisterUser from "./components/Register/RegisterUser";

function App() {
  const [showContent, setShowContent] = useState("");
  const showContentHandler = (value) => {
    setShowContent(value);
  };

  // console.log(showContent);

  let whichComponentToShow = "";

  switch (showContent) {
    case "account":
      whichComponentToShow = <RegisterUser className={styles.others} />;
      break;
    case "login":
      whichComponentToShow = <LoginForm className={styles.others} />;
      break;
    default:
      whichComponentToShow = <Main className={styles.others} />;
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
