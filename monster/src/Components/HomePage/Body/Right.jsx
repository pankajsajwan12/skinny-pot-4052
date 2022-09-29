import React from "react";
import { Link } from "react-router-dom";
import Beware from "../../../Images/Beware.png";
import style from "./Right.module.css";

const JobBySkill = [
  "Accounting Jobs",
  "Analytics Jobs",
  "Animation Jobs",
  "Architecture Jobs",
  "Banking Jobs",
  "BPO Jobs",
  "Data Science Jobs",
  "Java Jobs",
  "Marketing Jobs",
  "Mechanical Engineering Jobs",
  "Networking Jobs",
  "Online Marketing Jobs",
  "SEO Jobs",
  "Teaching Jobs",
  "UX/UI Jobs",
];

const Popular = [
  "Business Analyst Jobs",
  "Digital Marketing Head Jobs",
  "Engineering Manager Jobs",
  "HR Head Jobs",
  "Marketing Head Jobs",
  "Marketing Manager Jobs",
  "Product Manager Jobs",
  "VP Business Development Jobs",
  "VP Finance Jobs",
  "VP HR Jobs",
  "VP Marketing Jobs",
  "VP Operations Jobs",
  "VP Sales Jobs",
  "Brand Manager Jobs",
  "CEO Jobs",
];

function Right() {
  return (
    <div className={style.right}>
      <img
        className={style.rightLogo}
        style={{ marginTop: "10px" }}
        src={Beware}
        alt=""
      />

      <div className={style.jobBySkills}>
        <h3>Jobs by Top Skills</h3>
        {JobBySkill.map((item) => {
          return (
            <p key={item}>
              <Link to="/work-from-home-jobs">{item}</Link>
            </p>
          );
        })}
      </div>
      <div className={style.jobBySkills}>
        <h3>Popular Designations</h3>
        {Popular.map((item) => {
          return (
            <p key={item}>
              <Link to="/work-from-home-jobs">{item} </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Right;
