import React from "react";
import style from "./TopSearch.module.css";
import { IoIosSearch } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import RightContainer from "./RightContainer";

const TopSearch = () => {
  return (
    <div className={style.topSearch}>
      <div className={style.leftContainer}>
        <div className={style.searchBox}>
          <p className={style.header}>5000,000+ Jobs. Find Better.Faster</p>
          <ul>
            <li>All Jobs</li>
            <li>Work From Home</li>
            <li>Contract Jobs</li>
            <li>Fresher Jobs</li>
          </ul>
          <div className={style.searchDiv}>
            <div className={style.searchInput}>
              <p>
                <IoIosSearch />
              </p>
              <input
                type="text"
                placeholder="Search by Skills, Company & Job Title"
                id=""
              />
              <p>
                <IoMicOutline />
              </p>
            </div>
            <button>Search</button>
          </div>
          <p className={style.advanceSearch}>Advance Search</p>
          <p className={style.trandingSearch}>
            <b>Trending Searches:</b> Jobs in Delhi, Jobs in Mumbai, Jobs in
            Hyderabad, Jobs in Bangalore, Jobs in Chennai, Jobs in Pune, Jobs in
            Kolkata, Jobs in Lucknow
          </p>
        </div>
      </div>
      <RightContainer/>
    </div>
  );
};

export default TopSearch;
