import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsData } from "../Redux/AppReducer/action";
import style from "./WorkFromHome.module.css";
import { FaRegStar } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";

const WorkFromHome = () => {
  const jobs = useSelector((store) => store.AppReducer.jobs);
  const [per_page, setPer_Page] = useState(10);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const locations = useLocation();


  const handleOnChangePage = (e) => {
    setPer_Page(e.target.value);
  }
  const showPerPageData = jobs.slice(0, per_page);
  console.log("shw",showPerPageData);
  
  useEffect(() => {
    if (locations || jobs.length === 0) {
      let getJobsParams = {
        params: {
          CompanyName: searchParams.getAll("companyName"),
          Experience: searchParams.getAll("years"),
          Location: searchParams.getAll("location"),
        },
      };
      dispatch(getJobsData(getJobsParams));
    }
  }, [locations.search]);
  return (
    <>
      <div className={style.WorkFromHome_Left_JobDetails_Pages}>
        <div className={style.WorkFromHome_TopDiv}>
          <div className={style.WorkFromHome_TopDiv_firstSelectTag}>
            <span>Show :&nbsp;</span>
            <select className={style.selectTag} onChange={handleOnChangePage}>
              <option>select</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
            <span>Per Page</span>
          </div>
          <div className={style.WorkFromHome_TopDiv_firstSelectTag}>
            <span>Sort by :</span>
            <select className={style.selectTag}>
              <option value="Relevance">Relevance</option>
              <option value="Freshers">Freshers</option>
            </select>
          </div>
        </div>
        {/* <div>
            {
              isLoading && <img src="https://flevix.com/wp-content/uploads/2020/01/Circle-Loading.svg" alt="" />
            }
          </div> */}
        <div>
          {jobs.length == 0 ? <div>...Loading</div> : showPerPageData.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/work-from-home-jobs/${item.id}`}>
                  <div key={item.id} className={style.Job_mainDiv}>
                    <div className={style.JobPosition}>{item.Role}</div>
                    <div className={style.companyName}>
                      <p>Company Name &nbsp; : &nbsp;{item.CompanyName}</p>
                    </div>
                    <div className={style.location_Expericence_Salary}>
                      <div>Experience &nbsp;: &nbsp; {item.Experience}</div>
                      <div>Salary &nbsp; : &nbsp;{item.Salary}</div>
                    </div>
                    <div className={style.jobDeatails}>{item.Description}</div>
                    <div className={style.jobSkill}>
                      <bold>Location </bold> &nbsp; : &nbsp; {item.Location}
                    </div>
                  </div>
                </Link>
                <div className={style.jobPostingTime}>
                  <div className={style.jobPostingTime_leftSide}>
                    <p>Posted : a hour ago | </p>
                    <p className={style.fontColor}>
                      &nbsp;&nbsp;Work From Home
                    </p>
                  </div>
                  <div className={style.jobPostingTime_rightSide}>
                    <p className={style.reactIcons}>
                      <FaRegStar className={style.icons} />
                    </p>
                    <p className={style.reactIcons}>
                      <HiShare className={style.icons} />
                    </p>
                    <button className={style.applyBtn}>APPLY</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WorkFromHome;
