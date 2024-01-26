import React from "react";

export default function Banner({ scrollToSection }) {
  return (
    <div id="banner" className="banner">
      <div className="banner-container">
        <h1 className="text-left">Турнір</h1>
        <h1 className="text-main">української спільноти R6</h1>
        <h1 className="text-right">01.03 - 03.03 </h1>
        <div className="button-group">
          <button
            className="participation-banner"
            onClick={() => scrollToSection("conditions")}
          >
            Умови участі
          </button>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSL9UQgquwyKj43sQYdwzxtFStTHHYdkghMsZsDVi4x2dpUg/viewform?pli=1" target="_blank">
            <button className="register-banner">Зареєструвати команду</button>
          </a>
        </div>
      </div>
    </div>
  );
}
