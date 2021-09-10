import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("start");
  const [num, setNum] = useState(0);
  const [faceshowFlag, setFaceshowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceshowFlag(!faceshowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceshowFlag || setFaceshowFlag(true);
      } else {
        faceshowFlag && setFaceshowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="blue">how are you?</ColorfulMessage>
      <ColorfulMessage color="pink">i'm good!</ColorfulMessage>

      <button onClick={onClickCountUp}>countup</button>
      <button onClick={onClickSwitchShowFlag}> on/off </button>
      <p>{num}</p>
      {faceshowFlag && <p>!(^^)!</p>}
    </>
  );
};

export default App;

//{}java書きますよの合図
//component内で動的に変数を変えるときはuseState()使う
