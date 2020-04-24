import React from "react";

import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";

import { hedgehogScene, raccoonScene, squirrelScene } from "./scenes";

import "./App.css";

function App() {
  const currentScene = hedgehogScene;
  return (
    <div className="hero">
      <IconHolder icon={currentScene.icon} text={currentScene.text} />
      <ImageHolder
        img={currentScene.image1}
        className="animal-image animal-image__one"
      />
      <ImageHolder
        img={currentScene.image2}
        className="animal-image animal-image__two"
      />
      <ImageHolder
        img={currentScene.image3}
        className="animal-image animal-image__three"
      />
    </div>
  );
}

export default App;
