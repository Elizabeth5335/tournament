import React from "react";
import { ref, onValue } from "firebase/database";
import banner from "./assets/banner.png";

export default function About(props) {
  const textRef = ref(props.database, "about/text");

  const [aboutText, setAboutText] = React.useState();

  React.useEffect(() => {
    onValue(textRef, (snapshot) => {
      setAboutText(snapshot.val());
      console.log(snapshot.val());
    });
  }, []);

  return (
    <div id="tournamentInfo">
      <div className="main-container">
        <h1 className="heading"> Про турнір</h1>
        <div className="flex">
          <img src={banner} alt="banner" className="about-banner" />
          <div className="about-text">
            <span>Формат гри – Pro League 5х5</span>
            <span>
              Участь лише для команд, вступний внесок 500 грн з команди. Кожному
              учаснику необхідно мати мінімум 300 годин у грі
            </span>
            <span>
              Формат проведення: до 16 команд double elimination, більше 16 –
              single elimination. Можливий максимум команд – 32. Всі матчі Bo1,
              гранд-фінал Bo3.
            </span>
            <span>
              Трансляція буде відбуватись на Твіч:{" "}
              <a href="https://www.twitch.tv/cybercatua">@cybercatua</a> Також
              на Ютюб:{" "}
              <a href="https://www.youtube.com/@r6Cat-UA">Кібер Котик</a>
            </span>
            <span>
              Обов’язково прочитайте{" "}
              <a
                className="rules-link"
                href="https://firebasestorage.googleapis.com/v0/b/tournament-a1dca.appspot.com/o/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0_%D1%82%D1%83%D1%80%D0%BD%D1%96%D1%80%D1%83.pdf?alt=media&token=86157d9d-7861-4083-8393-99ed49ad2a37"
                download
                target="_blank"
              >
              правила турніру
              </a>
              !
            </span>
            <strong className="center">
              Хутчіш до{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfSL9UQgquwyKj43sQYdwzxtFStTHHYdkghMsZsDVi4x2dpUg/viewform?pli=1"
                target="_blank"
              >
              реєстрації
              </a>
              !
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
