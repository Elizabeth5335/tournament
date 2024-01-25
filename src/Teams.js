import React from "react";
import { ref, onValue } from "firebase/database";

export default function Teams(props) {
  const imageRef = ref(props.database, "tGrid");

  const [tGrid, setTGrid] = React.useState();

  React.useEffect(() => {
    onValue(imageRef, (snapshot) => {
      setTGrid(snapshot.val());
    });
  }, []);

  return (
    <div id="teams" className="main-container">
      <h1 className="heading"> Турнірна сітка</h1>
      <img className="teams-image" src={tGrid} alt="teams" />
    </div>
  );
}
