import img1 from "../../../Images/premium1.png";
import img2 from "../../../Images/premium2.png";
import img3 from "../../../Images/premium3.png";
import img4 from "../../../Images/premium4.png";
import style from "./Premium.module.css";
import React from "react";

const data = [
  {
    img: img1,
    title: "Resume Writing",
    dis: "Professionally written resume + cover letter",
  },
  {
    img: img2,
    title: "Featured Profile",
    dis: "Better your chances of getting shortlisted",
  },
  {
    img: img3,
    title: "Profile Highlighter",
    dis: "Grab the attention of employers",
  },
  {
    img: img4,
    title: "Career Booster",
    dis: "Get the power of two in one & speed up your job search",
  },
];

function Premium() {
  return (
    <div className={style.premium} >
      <div>
        <h1>Premium Services</h1>
        <p>View All</p>
      </div>
      <div>
        {data.map((item) => {
          return (
            <div key={item.title}>
              <img src={item.img} alt={item.img} />
              <h1>{item.title}</h1>
              <p>{item.dis}</p>
              <h2>Read More</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Premium;
