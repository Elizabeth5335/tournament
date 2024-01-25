import React from "react";
import Menu from "./Menu";
import Conditions from "./Conditions";
import Contacts from "./Contacts";
import About from "./About";
import Teams from "./Teams";
import underConstruction from "./assets/under-construction.png";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAJwUiaQXYwJja5iCOjrra6PzJMWV7HCkI",
  authDomain: "tournament-a1dca.firebaseapp.com",
  databaseURL: "https://tournament-a1dca-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tournament-a1dca",
  storageBucket: "tournament-a1dca.appspot.com",
  messagingSenderId: "867482847071",
  appId: "1:867482847071:web:4ab882a305c7d5130658ea",
  measurementId: "G-S0CLHK29G0"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export default function Main({ scrollToSection }) {
  return (
    <div id="main">
      <Menu scrollToSection={scrollToSection} />
      <div className="main-container">
        <Conditions />
        <Contacts />
        <div className="construction">
          <About database={database}/>
          <Teams database={database}/>
          <div className="under-construction">
            <img src={underConstruction} alt="under construction" />
            <h3>Ця частина сайту стане доступною трохи пізніше! Слідкуйте за оновленнями.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
