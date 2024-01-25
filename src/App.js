import React from "react";
import "./index.css";
import Banner from "./banner";
import Main from "./Main";

export default function App() {
  function scrollToSection (sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Banner scrollToSection={scrollToSection}/>
      <Main scrollToSection={scrollToSection}/>
    </div>
  );
}
