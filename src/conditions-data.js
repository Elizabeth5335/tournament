import money from "./assets/money.jpg";
import hours from "./assets/300.jpg";
import rules from "./assets/rules.jpg";
import team from "./assets/team.jpg";
import ua from "./assets/ua.jpg";

export const conditions = [
  {
    img: ua,
    text: "Участь у турнірі можлива тільки для громадян України",
  },
  {
    img: hours,
    text: "Необхідно мати мінімум 300 годин у грі",
  },
  {
    img: team,
    text: "Участь можлива тільки у команді з 5 чоловік (+заміна)",
  },
  {
    img: money,
    text: "Вступний внесок: 500 грн з команди",
  },
  {
    img: rules,
    alt: "Правила",
    text: "Реєструючи команду, ви погоджуєтесь із <a className='rules-link' href='https://firebasestorage.googleapis.com/v0/b/tournament-a1dca.appspot.com/o/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D1%82%D1%83%D1%80%D0%BD%D1%96%D1%80%D1%83.pdf?alt=media&token=35419248-7ab5-427f-9e60-3466d46327d0' download target='_blank'> правилами турніру </a>",
  },
];