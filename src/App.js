import React from "react";
import motion from "framer-motion";

import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";

/* Icons and text */
import hedgehogIcon from "./assets/icons/hedgehog/hedgehog.svg";
import hedgehogText from "./assets/icons/hedgehog/text.svg";
import raccoonIcon from "./assets/icons/raccoon/raccoon.svg";
import raccoonText from "./assets/icons/raccoon/text.svg";
import squirrelIcon from "./assets/icons/squirrel/squirrel.svg";
import squirrelText from "./assets/icons/squirrel/text.svg";

/* png images */
import hedgehog1 from "./assets/images/hedgehog/hedgehog1-min.png";
import hedgehog2 from "./assets/images/hedgehog/hedgehog2-min.png";
import hedgehog3 from "./assets/images/hedgehog/hedgehog3-min.png";
import raccoon1 from "./assets/images/raccoon/raccoon1-min.png";
import raccoon2 from "./assets/images/raccoon/raccoon2-min.png";
import raccoon3 from "./assets/images/raccoon/raccoon3-min.png";
import squirrel1 from "./assets/images/squirrel/squirrel1-min.png";
import squirrel2 from "./assets/images/squirrel/squirrel2-min.png";
import squirrel3 from "./assets/images/squirrel/squirrel3-min.png";

import "./App.css";

function App() {
  const scene = {
    icon: { src: hedgehogIcon, alt: "Hedgehog icon" },
    textImage: { src: hedgehogText, alt: "Hedgehog" },
    image1: { src: hedgehog1, alt: "Picture of hedgehog" },
    image2: { src: hedgehog2, alt: "Picture of hedgehog" },
    image3: { src: hedgehog3, alt: "Picture of hedgehog" },
  };

  /* Framer motion: orchestration */
  return (
    <div className="hero">
      <IconHolder icon={scene.icon} textImage={scene.textImage} />
      <ImageHolder img={scene.image1} />
      <ImageHolder img={scene.image2} />
      <ImageHolder img={scene.image3} />
    </div>
  );
}

export default App;
