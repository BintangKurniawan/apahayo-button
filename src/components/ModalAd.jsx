import React from "react";
import "../style/ModalCreat.css";

function ModalAd() {
  return (
    <div className="post">
      <div className=" img img-ad"></div>
      <div className="postbio">
        <div className="postbio2">
          <div className="user">
            <h5>DONATSU</h5>
            <p>by Akbar</p>
          </div>
        </div>
        <div className="like">
          <button className="creatLike">
            <h5>AD</h5>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAd;
