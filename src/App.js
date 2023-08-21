import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "./Navbar/Navbar";
import ComoFunciona from "./ComoFunciona/comoFunciona";
import Beneficios from "./Beneficios/Beneficios";
import Contact from "./Contact/Contact";

import "./App.css";

function App() {
  const [activeComoFunciona, setActiveComoFunciona] = useState(false);

  const handleAfterLoad = (origin, destination, direction, trigger) => {
    if (destination.anchor === "firstPage" | destination.anchor === "secondPage" | destination.anchor === "thirdPage") {
      // Cambiar "thirdPage" al ancla de la sección ComoFunciona
      setActiveComoFunciona(true);
    } else {
      setActiveComoFunciona(false);
    }
    
  };

  return (
    <div className="App">
      <Navbar />
      <ReactFullpage
      touchSensitivity={15}
       fitToSection={true}
       scrollBar={false}
       scrollHorizontally={false}
        afterLoad={handleAfterLoad}
        //fullpage options
        navigation
        anchors={["firstPage", "secondPage", "thirdPage"]}
        navigationTooltips={["¿Cómo Funciona?", "Beneficios", "Contactenos"]}
        // slidesNavigation={false}
        // slidesNavPosition={"bottom"}
        scrollingSpeed={500}
        // easing={"easeInOutCubic"}
        parallax={true}
        lazyLoading={true}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div id="section1" className="section" data-anchor="firstPage">
                <ComoFunciona active={activeComoFunciona} />
              </div>
              <div id="section2" className="section" data-anchor="secondPage">
                <Beneficios active={activeComoFunciona} />
              </div>
              <div id="section3" className="section" data-anchor="thirdPage">
                <Contact active={activeComoFunciona} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
