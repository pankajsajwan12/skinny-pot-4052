import React from 'react'
import { Location , itSkill, nonItSkill, byRole,internationalJobs,otherJobs } from './jobLoacation'
import style from './jobSearch.module.css'

const JobSearchBottom = () => {
    
  return (
    <div className={style.JobSearchBottom_Main}>
       <div className={style.jobSearh_main_Home_mainFont}>
         <p>Home / Job Search </p>
       </div>
       <div className={style.jobSearh_main}>
            <div className={style.JobSearchBottom_jobByLocations}>
                <div className={style.JobSearchBottom_FontDiv}>
                    <p className={style.jobsType_font}>Jobs by Locations &nbsp;&nbsp; :</p>
                </div>
                <div className={style.JobByLocation}>
                    {/* <p>{":"}</p> */}
                    {     
                        Location.map((itme) => (
                         <div key={itme.id} className={style.JobByLocation_Map}> {itme.name}</div>
                        ))
                    }
                </div>
            </div>
            <div className={style.JobSearchBottom_jobByITSkill}>
                <div className={style.JobSearchBottom_FontDiv}>
                    <p className={style.jobsType_font}>Jobs by Skill - IT &nbsp;&nbsp; :</p>
                </div>
                <div className={style.JobByLocation}>
                    {
                        itSkill.map((itme) => (
                         <div key={itme.id} className={style.JobByLocation_Map}> {itme.skill}</div>
                        ))
                    }
                </div>
            </div>
            <div className={style.JobSearchBottom_jobByITSkill}>
                <div className={style.JobSearchBottom_FontDiv}>
                    <p className={style.jobsType_font}>Jobs by Skill-Non IT &nbsp;&nbsp; :</p>
                </div>
                <div className={style.JobByNonIT}>
                    {
                        nonItSkill.map((itme) => (
                         <div key={itme.id} className={style.JobByNonIT_Map} > {itme.skill}</div>
                        ))
                    }
                </div>
            </div>
            <div className={style.JobSearchBottom_jobByITSkill}>
                <div className={style.JobSearchBottom_FontDiv}> 
                    <p className={style.jobsType_font}>Jobs by Role &nbsp;&nbsp; :</p></div>
                <div className={style.JobByNonIT}>
                    {
                        byRole.map((itme) => (
                         <div key={itme.id} className={style.JobByNonIT_Map}> {itme.role}</div>
                        ))
                    }
                </div>
            </div>
            <div className={style.JobSearchBottom_jobByITSkill}>
                <div className={style.JobSearchBottom_FontDiv}><p className={style.jobsType_font}>International Jobs &nbsp;&nbsp; :</p></div>
                <div className={style.InternationalJobs}>
                    {
                        internationalJobs.map((itme) => (
                         <div key={itme.id} className={style.JobByNonIT_Map} > {itme.country}</div>
                        ))
                    }
                </div>
            </div>
            <div className={style.JobSearchBottom_jobByITSkill}>
                <div className={style.JobSearchBottom_FontDiv}><p className={style.jobsType_font}>Other Jobs &nbsp;&nbsp; :</p></div>
                <div className={style.InternationalJobs}>
                    {
                        otherJobs.map((itme) => (
                         <div key={itme.id} className={style.JobByNonIT_Map}> {itme.type}</div>
                        ))
                    }
                </div>
            </div>
       </div>
    </div>
  )
}

export default JobSearchBottom
