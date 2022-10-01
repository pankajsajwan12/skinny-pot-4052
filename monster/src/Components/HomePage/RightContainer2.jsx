import React from "react";
import { Link } from "react-router-dom";
import style from "./TopSearch.module.css"

function RightContainer2() {
  return (
    <div className={style.rightContainer2}>
      <div className={style.uploadResume}>
        <p>NEW TO MONSTER?</p>
        <p><Link to="/for-employeers" >REGISTER WITH US</Link></p>
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

export default RightContainer2;
