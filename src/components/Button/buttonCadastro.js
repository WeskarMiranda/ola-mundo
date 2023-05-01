import React, { useState } from "react";
import Button from "./button";

function ButtonCadastro(props) {
  const [selectedButton, setSelectedButton] = useState("button1");

  function handleButtonClick(button) {
    setSelectedButton(button);
  }

  return (
    <div>
      <div className="mt-3">
        <label htmlFor="NumerocvcInput">Selecione um Plano:</label>
        <br />
        <div className="mt-3">
          <Button label="Free" isSelected={selectedButton === "button1"} onClick={() => handleButtonClick("button1")} />
          <Button label="Plus" isSelected={selectedButton === "button2"} onClick={() => handleButtonClick("button2")} />
        </div>
      </div>
    </div>
  );
}

export default ButtonCadastro;