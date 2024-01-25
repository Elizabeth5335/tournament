import React from "react";
import { ref, onValue } from "firebase/database";


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
    <div id="tournamentInfo" className="main-container">
      <h1 className="heading"> Про турнір</h1>
      <span>
        {aboutText}
      </span>
    </div>
  );
}
