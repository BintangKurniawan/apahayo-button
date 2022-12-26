import React from "react";
import "../style/NewsList.css";
function QuestList() {
  return (
    <div className="listQuest">
      <div className="titleDetQuest">
        <h5>Info Relawan Baksos</h5>
        <p>by HABIB at 12 Nov 2022</p>
      </div>
      <div className="goDetQuest">
        <button className="d-flex justify-content-center align-items-center">
          <i className="material-icons">north_east</i>
        </button>
      </div>
    </div>
  );
}

export default QuestList;
