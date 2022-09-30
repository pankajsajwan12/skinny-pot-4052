import React from 'react'
import Main1 from "../../../Images/Main1.png"
import Main101 from "../../../Images/Main101.png"
import Findjob from '../FindJob/Findjob'
import Premium from '../Premium/Premium'
import WorkFromHome from '../WorkFromHome/WorkFromHome'
import style from "./Main.module.css"
const jobs=[
  {
   heading: "Samppoorna Constultants",
   title: "Principal Expert Enginner",
   experience: "Experience : 12-18 Years",
   location: "Location(s) : Bengaluru",
 },
 {
   heading: "G9 Recruiters",
   title: "International Inbound Proc...",
   experience: "Experience : 0-3 Years",
   location: "Location(s) : Gurugram",
 },
 {
   heading: "Freelancer ThirumalaSEt",
   title: "We are hiring for Front end...",
   experience: "Experience : 0-0 Years",
   location: "Location(s) : Bengaluru",
 },
 {
  heading: "Sampoorna Consultants...",
  title: "Java Developer",
  experience: "Experience : 3-6 Years",
  location: "Location(s) : Hyderabad",
},
{
  heading: "Sampoorna Consultants...",
  title: "Front End Vue.js Developer",
  experience: "Experience : 3-6 Years",
  location: "Location(s) : Bengaluru",
},
{
  heading: "Freelancer Pushpa...",
  title: "Backend Developer",
  experience: "Experience : 7-9 Years",
  location: "Location(s) : Chennai",
},
{
  heading: "Sampoorna Consultants...",
  title: "Java Developer",
  experience: "Experience : 3-6 Years",
  location: "Location(s) : Hyderabad",
},
{
  heading: "Sampoorna Consultants...",
  title: "Front End Vue.js Developer",
  experience: "Experience : 3-6 Years",
  location: "Location(s) : Bengaluru",
},
{
  heading: "Freelancer Pushpa...",
  title: "Backend Developer",
  experience: "Experience : 7-9 Years",
  location: "Location(s) : Chennai",
},

 
]

const work = [
  {
    heading: "Valde Tech (India) Private...",
    title: "CEC OFFICER SA WFH",
    experience: "Experience : 0-2 Years",
    location: "Location(s) : Mumbai",
  },
  {
    heading: "Aspire Systems India Pri...",
    title: "Dot Net Developer",
    experience: "Experience : 3-8 Years",
    location: "Location(s) : Chennai",
  },
  {
    heading: "InfoDriven Solutions Priv...",
    title: "Senior Mobile Enginner",
    experience: "Experience : 1-5 Years",
    location: "Location(s) :",
  },
  {
    heading: "Aspire Systems India Pri...",
    title: "Dot Net Technical Leader",
    experience: "Experience : 7-17 Years",
    location: "Location(s) : Chennai",
  },
 
];


function Main() {

  return (
    <div>
        <img className={style.main1} src={Main1} alt="" />
        <img className={style.main101} src={Main101} alt="" />
        <WorkFromHome data={work} heading={"Work From Home Jobs"} />
        <WorkFromHome data={jobs} heading={"Recent jobs"} />
        <Premium/>
        <Findjob/>
    </div>
  )
}

export default Main