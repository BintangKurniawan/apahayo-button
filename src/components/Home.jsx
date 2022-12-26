import React from "react";
import ModalCreat from "./ModalCreation";
import "../style/Home.css";
import ModalAd from "./ModalAd";
function Home() {
  return (
    <div className="main">
      <div className="postingan">
        <ModalCreat />
        <ModalCreat />
        <ModalCreat />
        <ModalAd />
      </div>
    </div>
  );
}

export default Home;
