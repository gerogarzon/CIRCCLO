import React from "react";

// import Zoom from "react-reveal/Zoom";
// import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import como from "../assets/como-funciona.png";
import paso1 from "../assets/paso1.png";
import paso2 from "../assets/paso2.png";
import paso3 from "../assets/paso3.png";
// import paso4 from "../assets/logo.png";

import "./ComoFunciona.css";

const ComoFunciona = ({ active }) => {

  return (
    <div className="flex flex-col funciona sm:pt-40  justify-center sm:flex-row sm:justify-center ">
      <div className="flex-row  self-center pb-5 sm:pb-0 px-10 ">
        <Fade left  when={active}>
          <img
            className="self-center avatar md:w-full"
            data-src={como}
            alt="avatar"
          />
        </Fade>
      </div>

      <div className="flex-row self-center pb-5 sm:pb-0 px-10">
        <div className="flex-row self-start">
          <Fade bottom delay={600}  when={active}>
            <img
              className="self-center avatar "
              data-src={paso1}
              alt="avatar"
            />
          </Fade>
        </div>
        <div className="flex-row self-center">
          <Fade bottom delay={1200}  when={active}>
            <img className="self-center avatar" data-src={paso2} alt="avatar" />
          </Fade>
        </div>
        <div className="flex-row self-center">
          <Fade bottom delay={1800}  when={active}>
            <img className="self-center avatar" data-src={paso3} alt="avatar" />
          </Fade>
        </div>
      </div>
      {/* <div className="flex-row self-center px-10">
      <Fade clear  delay={4000} when={active}>
        <img
          className="self-auto avatar2 md:w-full "
          data-src={paso4}
          alt="avatar"
        />
         </Fade>
      </div> */}
      
    </div>
  );
};

export default ComoFunciona;
