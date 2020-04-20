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

const hedgehogScene = {
  icon: { src: hedgehogIcon, alt: "Hedgehog icon" },
  textImage: { src: hedgehogText, alt: "Hedgehog" },
  image1: { src: hedgehog1, alt: "Picture of hedgehog" },
  image2: { src: hedgehog2, alt: "Picture of hedgehog" },
  image3: { src: hedgehog3, alt: "Picture of hedgehog" },
};

const raccoonScene = {
  icon: { src: raccoonIcon, alt: "raccoon icon" },
  textImage: { src: raccoonText, alt: "raccoon" },
  image1: { src: raccoon1, alt: "Picture of raccoon" },
  image2: { src: raccoon2, alt: "Picture of raccoon" },
  image3: { src: raccoon3, alt: "Picture of raccoon" },
};

const squirrelScene = {
  icon: { src: squirrelIcon, alt: "squirrel icon" },
  textImage: { src: squirrelText, alt: "squirrel" },
  image1: { src: squirrel1, alt: "Picture of squirrel" },
  image2: { src: squirrel2, alt: "Picture of squirrel" },
  image3: { src: squirrel3, alt: "Picture of squirrel" },
};

function App() {
  const scene = squirrelScene;

  /* Framer motion: orchestration */
  return (
    <>
      <div className="hero">
        <IconHolder icon={scene.icon} textImage={scene.textImage} />
        <ImageHolder
          img={scene.image1}
          className="animal-image animal-image__one"
        />
        <ImageHolder
          img={scene.image2}
          className="animal-image animal-image__two"
        />
        <ImageHolder
          img={scene.image3}
          className="animal-image animal-image__three"
        />
      </div>

      <div className="hero">
        <IconHolder
          icon={raccoonScene.icon}
          textImage={raccoonScene.textImage}
        />
        <ImageHolder
          img={raccoonScene.image1}
          className="animal-image animal-image__one"
        />
        <ImageHolder
          img={raccoonScene.image2}
          className="animal-image animal-image__two"
        />
        <ImageHolder
          img={raccoonScene.image3}
          className="animal-image animal-image__three"
        />
      </div>

      <div className="hero">
        <IconHolder
          icon={hedgehogScene.icon}
          textImage={hedgehogScene.textImage}
        />
        <ImageHolder
          img={hedgehogScene.image1}
          className="animal-image animal-image__one"
        />
        <ImageHolder
          img={hedgehogScene.image2}
          className="animal-image animal-image__two"
        />
        <ImageHolder
          img={hedgehogScene.image3}
          className="animal-image animal-image__three"
        />
      </div>
    </>
  );
}

export default App;
