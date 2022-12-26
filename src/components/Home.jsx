import React from "react";
import ModalCreat from "./ModalCreation";
import "../style/Home.css";
import ModalAd from "./ModalAd";
import News from "./News";
import Quest from "./Quest";
function Home() {
  return (
    <div className="main">
      <div className="postingan">
        <ModalCreat />
        <ModalCreat />
        <ModalCreat />
        <ModalAd />
      </div>
      <div className="news">
        <News />
        <Quest />
      </div>
    </div>
  );
}

export default Home;
