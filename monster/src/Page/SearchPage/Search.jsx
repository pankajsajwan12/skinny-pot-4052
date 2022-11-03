import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsData } from "../../Redux/AppReducer/action";
import style from "../../WorkFromHome/WorkFromHome.module.css";
import { FaRegStar } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
// import Navbar from "../Components/Navbar/Navbar";

const Search = () => {
  const [search,setSearch]=useState([])
  const jobs = useSelector((store) => store.AppReducer.jobs);
  // const isLoading = useSelector((store) => store.AppReducer.isLoading);
  const params=useParams()
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const filted=jobs.filter((item)=> item.CompanyName.toLowerCase()==params.query)
  console.log(filted)
  const locations = useLocation();



  useEffect(() => {
    if (locations || jobs.length === 0) {
      let getJobsParams = {
        params: {
          CompanyName: searchParams.getAll("companyName"),
          Experience: searchParams.getAll("years"),
          Location: searchParams.getAll("location"),
        },
      };
      //("getJobsParams :", getJobsParams);
      dispatch(getJobsData(getJobsParams));
    }
  }, [locations.search]);
  //   //("jobs", jobs);
  return (
    <>
    <Navbar/>
      <h1 style={{marginTop:"100px",fontSize:"25px",fontWeight:"bold", marginBottom:"20px"}}>Showing result for:- "{params.query.toUpperCase()}"</h1>
      <div className={style.WorkFromHome_Left_JobDetails_Pages}>
        
        {/* <div>
            {
              isLoading && <img src="https://flevix.com/wp-content/uploads/2020/01/Circle-Loading.svg" alt="" />
            }
          </div> */}
        <div>
          {filted.map((item) => {
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
                    <p>Posted : a hour age | </p>
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

export default Search;
