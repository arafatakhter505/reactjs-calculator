import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("");
  const handleButton = (value) => {
    if (value === "C") {
      setScreen("");
      return;
    }

    if (value === "del") {
      setScreen(screen.toString().slice(0, -1));
      return;
    }

    if (value === "x") {
      setScreen(screen + "*");
      return;
    }

    if (value === "=") {
      if (screen) {
        setScreen(eval(screen));
        return;
      }
      return;
    }

    if (
      value === "/" ||
      value === "x" ||
      value === "-" ||
      value === "+" ||
      value === "."
    ) {
      setScreen(screen + value);
      return;
    }

    setScreen(screen + value);
  };

  return (
    <div className="App">
      <div className="screen">
        <h2>{screen}</h2>
      </div>
      <div className="btn-container">
        <div className="clear">
          <Button text={"C"} handleButton={handleButton} />
        </div>
        <div className="delete">
          <Button text={"del"} handleButton={handleButton} />
        </div>
        <Button text={"/"} handleButton={handleButton} />
        <Button text={"x"} handleButton={handleButton} />
        <Button text={"7"} handleButton={handleButton} />
        <Button text={"8"} handleButton={handleButton} />
        <Button text={"9"} handleButton={handleButton} />
        <Button text={"-"} handleButton={handleButton} />
        <Button text={"4"} handleButton={handleButton} />
        <Button text={"5"} handleButton={handleButton} />
        <Button text={"6"} handleButton={handleButton} />
        <Button text={"+"} handleButton={handleButton} />
        <Button text={"1"} handleButton={handleButton} />
        <Button text={"2"} handleButton={handleButton} />
        <Button text={"3"} handleButton={handleButton} />
        <div className="equal">
          <Button text={"="} handleButton={handleButton} />
        </div>
        <div className="zero">
          <Button text={"0"} handleButton={handleButton} />
        </div>
        <Button text={"."} handleButton={handleButton} />
      </div>
    </div>
  );
}

export default App;
