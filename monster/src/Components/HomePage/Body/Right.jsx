import React from 'react'
import Beware from "../../../Images/Beware.png"
import style from "./Right.module.css"

const JobBySkill=["Accounting Jobs",
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
"UX/UI Jobs",]

function Right() {
  return (
    <div>
        <img style={{marginTop:"10px"}}  src={Beware} alt="" />

        <div className={style.jobBySkills} >
            <h3>Jobs by Top Skills</h3>
            {
                JobBySkill.map(item=>{
                    return <p key={item}>{item}</p>
                })
            }
        </div>
    </div>
  )
}

export default Right