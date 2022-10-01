import React from "react";
import style from "./Findjob.module.css";

function Findjob() {
  return (
    <div className={style.findjob}>
      <h1>Find Job Vacancies by</h1>
      <div>
        <ul>
          <li>Skills</li>
          <li>Location</li>
          <li>Industry</li>
          <li>Function</li>
          <li>Roles</li>
          <li>Company</li>
        </ul>
      </div>
      <div>
        <div>
          <ul>
            <li>Jio Customer Associate - Freelancer JP</li>
            <li>Sales</li>
            <li>Java</li>
            <li>OperationsJio Customer Associate - Freelancer JP</li>
            <li>Sql</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Javascript</li>
            <li>Python</li>
            <li>Customer Support</li>
            <li>Customer Service</li>
            <li>Software Eng</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Voice Process</li>
            <li>Marketing</li>
            <li>HTML</li>
            <li>BpoResident Jio Associate - Freelancer JP</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Problem Solver</li>
            <li>Lead Generation</li>
            <li>C#</li>
            <li>Good Communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Findjob;
