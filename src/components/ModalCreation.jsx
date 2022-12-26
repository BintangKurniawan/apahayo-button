import React from "react";
import "../style/ModalCreat.css";
function ModalCreat() {
  return (
    <div className="post">
      <div className="img img-creat"></div>
      <div className="postbio">
        <div className="postbio2">
          <div className="imgprof"></div>
          <div className="user">
            <h5>John doe</h5>
            <p>ilustrator</p>
          </div>
        </div>
        <div className="like">
          <button className="creatLike">
            <i className="material-icons">favorite</i>
            <p>69</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ModalCreat;
