import React from "react";
import "./Problema.css";

import problema from "../../src/assets/problema.jpg";

function Problema() {
  return (
    <div className="text-black">
      <img className="altura absolute top-0 left-0 z-50  " src={problema} alt="imagen"></img>
      <div className="flex felx-col">
        
        <div className="flex flex-col ">
          <h1 className="self-start">EL</h1>
          <h1 className="self-start">PROBLEMA</h1>
        </div>
      </div>
    </div>
  );
}

export default Problema;
