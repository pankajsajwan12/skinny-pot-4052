import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobsData } from '../Redux/AppReducer/action'
import style from './WorkFromHome.module.css'
import {FaRegStar} from 'react-icons/fa'
import {HiShare} from 'react-icons/hi'

const WorkFromHome = () => {
    const jobs = useSelector((store) => store.AppReducer.jobs)
    const dispatch = useDispatch()

    useEffect(() => {
       if(jobs.length === 0) {
        dispatch(getJobsData())
       }
    },[])
    console.log("jobs",jobs)
  return (
    <div className={style.WorkFromHome_Left_JobDetails_Pages}>
    <div className={style.WorkFromHome_TopDiv}>
        <div className={style.WorkFromHome_TopDiv_firstSelectTag}>
           <span>Show :&nbsp;</span>
           <select className={style.selectTag}>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
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
    <div>
      {
        jobs.map((item) => {
            return (
                <>
                <div key={item.id} className={style.Job_mainDiv}>
                    <div className={style.JobPosition}>{item.Role}</div>
                    <div className={style.companyName}><p>Company Name &nbsp; : &nbsp;{ item.CompanyName}</p></div>
                    <div className={style.location_Expericence_Salary}>
                        <div>Experience &nbsp;: &nbsp; {item.Experience}</div>
                        <div>Salary &nbsp; : &nbsp;{item.Salary}</div>
                    </div>
                    <div className={style.jobDeatails}>{item.Description}</div>
                    <div className={style.jobSkill}></div>
                </div>
                
                <div className={style.jobPostingTime}>
                        <div className={style.jobPostingTime_leftSide}>
                            <p>Posted : a hour age | </p>
                            <p className={style.fontColor}>&nbsp;&nbsp;Work From Home</p>
                        </div>
                        <div className={style.jobPostingTime_rightSide}>
                            <p className={style.reactIcons}><FaRegStar className={style.icons}/></p>
                            <p className={style.reactIcons}><HiShare className={style.icons}/></p>
                            <button className={style.applyBtn}>APPLY</button>
                        </div>
                    </div>
                </>
            )
        })
      }
    </div>
    </div>
  )
}

export default WorkFromHome
