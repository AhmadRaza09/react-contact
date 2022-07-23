import { useState } from "react";
import "./App.css";

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
      whichComponentToShow = <div>create account</div>;
      break;
    case "login":
      whichComponentToShow = <div>login</div>;
      break;
    default:
      whichComponentToShow = <div>main content</div>;
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
