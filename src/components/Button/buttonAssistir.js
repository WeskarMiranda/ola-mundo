import React from "react";

function ButtonAssistir({ assistido }) {
  return (
    <button className="btn btn-primary">
      {assistido ? "Assistir Novamente" : "Assistir"}
    </button>
  );
}

export default ButtonAssistir;