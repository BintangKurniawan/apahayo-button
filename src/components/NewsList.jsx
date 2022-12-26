import React from "react";
import "../style/NewsList.css";
function NewsList() {
  return (
    <div className="listNews">
      <div className="titleDet">
        <h5>Porseni Tiba</h5>
        <p>by OSIS at 20 Jan 2022</p>
      </div>
      <div className="goDet">
        <button className="d-flex justify-content-center align-items-center">
          <i className="material-icons">north_east</i>
        </button>
      </div>
    </div>
  );
}

export default NewsList;
