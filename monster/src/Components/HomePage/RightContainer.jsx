import React from "react";
import style from "./TopSearch.module.css"

function RightContainer() {
  return (
    <div className={style.rightContainer}>
      <div className={style.uploadResume}>
        <p>NEW TO MONSTER?</p>
        <p>REGISTER WITH US</p>
        <p>Or</p>
        <button>
          <span>UPLOAD RESUME</span> <br /> We will create you profile
        </button>
      </div>
      <div className={style.createJob}>
        <p>FREE JOB ALERT</p>
        <p>Get an email on jobs matching your criteria</p>
        <p>No registration required</p>
        <button>CREATE JOB ALERT</button>
      </div>
    </div>
  );
}

export default RightContainer;
