import React from "react";
import "../style/NewsStyle.css";
import QuestList from "./QuestList";
function Quest() {
  return (
    <div className="quest-sect">
      <div className="quest-title">
        <i className="material-icons">question_answer</i>
        <h3>Quests</h3>
      </div>
      <div className="quest-body">
        <QuestList />
        <QuestList />
        <QuestList />
        <QuestList />
      </div>
      <div className="quest-btn">
        <button className="d-flex justify-content-center align-items-center">
          <h6>More</h6>
        </button>
      </div>
    </div>
  );
}

export default Quest;
