/*eslint-disable*/
import { useState, useEffect } from "react";

function App() {
  const [cont, setCont] = useState(0);
  const [action, setAction] = useState("");
  const message = "Cuidado!";

  const handleClick = () => {
    setCont(cont + 1);
    console.log(cont % 2 === 0, cont);
  };
  const handleClickRest = () => {
    setCont(cont - 1);
  };
  useEffect(() => {
    cont % 2 === 0
      ? setAction("")
      : (window.alert(message), setAction(message));
  });

  return (
    <div className="App">
      <p>{cont}</p>
      <button type="button" onClick={handleClick}>
        suma
      </button>
      <button type="button" onClick={handleClickRest}>
        resta
      </button>
      <p>{action}</p>
    </div>
  );
}

export default App;
