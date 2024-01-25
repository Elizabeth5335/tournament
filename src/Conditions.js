import React from "react";
import { conditions } from "./conditions-data";


export default function Conditions() {
  return (
    <div id="conditions">
      <div className="main-container">
        <h1 className="heading">Умови участі</h1>
        <div className="cards-row">
          {conditions.map((item) => {
            return (
              <div key={item.img} className="card">
                <img src={item.img} alt={item.alt ?? item.text} />
                <div className="text">
                  <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
                </div>
              </div>
            );
          })}
        </div>
        <a href="https://forms.gle/87MRgHMy8Z7n867T6" target="_blank">
          <button className="register-conditions">Зареєструвати команду</button>
        </a>
      </div>
    </div>
  );
}
