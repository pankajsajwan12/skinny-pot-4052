import React from "react";
import style from "./TopSearch.module.css";
import { IoIosSearch } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import RightContainer from "./RightContainer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TopSearch = () => {
  // const selector = useSelector((state) => state.auth);

  //(selector)

  return (
    <div className={style.topSearch}>
      <div className={style.leftContainer}>
        <div className={style.searchBox}>
          <p className={style.header}>5000,000+ Jobs. Find Better.Faster</p>
          <ul>
            <li>
              <Link to="/work-from-home-jobs">All Jobs</Link>
            </li>
            <li>
              <Link to="/work-from-home-jobs">Work From Home</Link>
            </li>
            <li>
              <Link to="/work-from-home-jobs">Contract Jobs</Link>
            </li>
            <li>
              <Link to="/work-from-home-jobs">Fresher Jobs</Link>
            </li>
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
            <Link to="/search">
              <button>Search</button>
            </Link>
          </div>
          <p className={style.advanceSearch}>Advance Search</p>
          <p className={style.trandingSearch}>
            <b>Trending Searches:</b> Jobs in Delhi, Jobs in Mumbai, Jobs in
            Hyderabad, Jobs in Bangalore, Jobs in Chennai, Jobs in Pune, Jobs in
            Kolkata, Jobs in Lucknow
          </p>
        </div>
      </div>
      <RightContainer />
    </div>
  );
};

export default TopSearch;
