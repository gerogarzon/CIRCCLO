import React from "react";
import Fade from "react-reveal/Fade";
import foto from "../../src/assets/beneficio.png";
// import foto1 from "../../src/assets/cuidar.png";
// import foto2 from "../../src/assets/cuidar2.png";

import "./Beneficios.css";

function Beneficios({ active }) {
  return (
    <div className=" flex flex-col sm:flex-row  w-screen h-screen sm:pt-10 pb-40">
      <div className="flex flex-row self-start sm:flex-col w-full h-full sm:pt-10 ">
        <Fade clear delay={300} when={active}>
          <img
            className="self-center w-full h-full reward"
            data-src={foto}
            alt="avatar"
          />
        </Fade>
      </div>
      {/* <div className="flex flex-row sm:flex-col w-full h-full">
        <Fade left>
          <img
            className="self-center reward w-full h-full reward1"
            data-src={foto1}
            alt="avatar"
          />
        </Fade>
      </div>
      <div className="flex flex-row sm:flex-col w-full h-full">
        <Fade left>
          <img
            className="self-center reward w-full h-full reward1"
            data-src={foto2}
            alt="avatar"
          />
        </Fade>
      </div> */}
      
    </div>
  );
}

export default Beneficios;
