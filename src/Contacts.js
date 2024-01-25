import React from "react";
import { contacts } from "./contact-data";

export default function Contacts() {
  return (
    <div id="contacts">
      <div className="main-container">
        <h1 className="heading"> Контакти</h1>
        <div className="contacts-row">
          {contacts.map((contact) => (
            <div key={contact.name}>
              <h3>{contact.name}</h3>
              <a href={contact.url}>
                <span>{contact.text}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
