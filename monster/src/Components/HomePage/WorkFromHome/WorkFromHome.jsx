import React from "react";
import style from "./WorkFromHome.module.css";
import { Link } from "react-router-dom";

function WorkFromHome({ data, heading }) {
  return (
    <div className={style.workfromhome}>
      <div className={style.top}>
        <h1>{heading}</h1>
        <p>View All</p>
      </div>
      <div className={style.container}>
        {data &&
          data.map((item, index) => {
            return (
              <Link to="/work-from-home-jobs">
                <div key={index}>
                  <h1>{item.heading}</h1>
                  <p>{item.title}</p>
                  <p>{item.experience}</p>
                  <p>{item.location}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default WorkFromHome;
