import React from "react";
import r6Logo from "./assets/r6Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faTrophy, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Menu({scrollToSection}) {
  

  return (
    <div id="menu">
      <img className="r6-logo" src={r6Logo} alt="r6Logo" onClick={() => scrollToSection("banner")} />      
      <div className="tooltip" onClick={() => scrollToSection("conditions")}>
        <FontAwesomeIcon title="Умови участі" className="menu-icon" icon={faHand} />
        <span className="tooltiptext">Умови участі</span>
      </div>
      <div className="tooltip" onClick={() => scrollToSection("contacts")}>
        <FontAwesomeIcon className="menu-icon" icon={faDiscord} />
        <span className="tooltiptext">Контакти</span>
      </div>
      <div className="tooltip" onClick={() => scrollToSection("tournamentInfo")}>
        <FontAwesomeIcon className="menu-icon" icon={faTrophy} />
        <span className="tooltiptext">Про турнір</span>
      </div>
      <div className="tooltip" onClick={() => scrollToSection("teams")}>
        <FontAwesomeIcon className="menu-icon" icon={faUsers} />
        <span className="tooltiptext">Команди</span>
      </div>
    </div>
  );
}
