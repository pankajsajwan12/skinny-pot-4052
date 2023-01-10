import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getJobsData } from "../Redux/AppReducer/action";
import style from "../CSS/WorkDetails.module.css";
import { FaRegStar, FaUserAlt } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { Box, Button, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";

const WorkDetailsPage = () => {
  const [curentJob, setCurrentJob] = useState([]);
  const jobsData = useSelector((store) => store.AppReducer.jobs);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (jobsData.length === 0) {
      dispatch(getJobsData());
    }
  }, [dispatch, jobsData.length]);
 useEffect(() => {
    if (id) {
      const currentJobs = jobsData.find((item) => item.id == id);
      currentJobs && setCurrentJob(currentJobs);
    }
  }, [id, curentJob]);
  return (
    <>
      <Navbar />
      <div className={style.WorkDetails_main}>
        <div className={style.WorkDetails_main_leftMain}>
          <Box
            className={style.WorkDetails_main_leftMain_TopSection}
            display={{base:'block',md:"flex"}}
            width="90%"
            margin="auto"
            justifyContent="space-between"
            pt="2rem"
          >
            <Box fontWeight="400"  fontSize={'1.5rem'}  pb={"1.8rem"}
            className={style.about_the_job_text}
            >
              About the Job in Details
            </Box>
            <Box className={style.jobPostingTime_rightSide} pr={['0px','3px','5']}>
              <p className={style.reactIcons}>
                <FaRegStar className={style.icons} />
              </p>
              <p className={style.reactIcons}>
                <HiShare className={style.icons} />
              </p>
              <Button
                className={style.applyBtn}
                backgroundColor="rgba(108,84,218,0.9)"
                color="white"
                width="6rem"
                fontWeight="500"
              >
                APPLY
              </Button>
            </Box>
          </Box>
          <div className={style.smallJobDetails_Div}>
            <div className={style.JobPosition}>{curentJob.Role}</div>
            <div className={style.companyName}>
              <p>Company Name &nbsp; : &nbsp;{curentJob.CompanyName}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ marginRight: "2rem" }}>{curentJob.Location}</div>
              <div>{curentJob.Experience}</div>
              <div style={{ marginRight: "2rem" }}>{curentJob.Salary}</div>
            </div>
          </div>
          <div>
            <Box
              display="flex"
              width={{base:"100%",md:"90%"}}
              margin="auto"
              backgroundColor="rgb(235,235,235)"
              p="0.5rem 1rem"
              flexDirection={{base:'column',md:'row'}}
            >
              <Box textAlign={{md:'center',lg:'left'}}>Posted On : 2 days ago &nbsp; | &nbsp;</Box>
              <Box textAlign={{md:'center',lg:'left'}}> Total Views: 1954 &nbsp; | &nbsp;</Box>
              <Box textAlign={{md:'center',lg:'left'}}> Total Applications : 551 &nbsp; | &nbsp;</Box>
              <Box textAlign={{md:'center',lg:'left'}}> Job Id : {Math.floor(Math.random() * 100000)}</Box>
              <Box marginLeft="8.7%"> Perment Job, Work From Home</Box>
            </Box>
          </div>
          <div className={style.WorkDetailsPage_jobDescription_Main}>
            <Box
              display={{base:"block", md:'flex'}}
              justifyContent={'space-between'}
              pt={'1rem'}
            >
              <Box fontWeight="bold" fontSize={{base:"1rem",md :"1.7rem"}}>
                Job Description
              </Box>
              <Box color="rgb(108,84,219)" fontWeight="bold" fontSize="1.1rem">
                Send me similar jobs
              </Box>
            </Box>
            <Box fontWeight="bold" pt="1rem" fontSize="1.1rem">
              Description :
            </Box>
            <Box fontWeight="bold" fontSize="17px">
              Work From Home
            </Box>
            <Box textAlign="left">
              <p className={style.pText}>
                To respond to customer complaints/issues received on
                calls/emails and provide effective resolution
              </p>
              <p className={style.pText}>
                To handle escalations at level 1 and ensure that the complaint
                gets resolved rather than getting further escalated
              </p>
              <p className={style.pText}>
                Seek advice and escalate the issue to relevant teams{" "}
              </p>
              <p className={style.pText}>
                {" "}
                Co-ordinate and follow up with support teams for resolution of
                customer complaints{" "}
              </p>{" "}
              <p className={style.pText}>
                To ensure that customers do not have to approach senior
                management for resolution of issues{" "}
              </p>{" "}
              <p className={style.pText}>
                {" "}
                Maintain TAT of commitments given to customer{" "}
              </p>{" "}
              <p className={style.pText}>
                {" "}
                Escalate the issue to higher ups whenever required{" "}
              </p>
              <p className={style.pText}>
                {" "}
                Maintain the data of escalations which will be required for
                training need and analysis for the teams. This data will also be
                used to analyze the current processes and future process
                improvements to better customer experience{" "}
              </p>
              <p className={style.pText}> Suggest process improvements.</p>
            </Box>
            <div>
              <Box fontWeight="bold" fontSize="1.2rem" pt="1.8rem">
                Requirements :
              </Box>
              <Box fontSize="1.1rem"> Graduate </Box>
              <p className={style.pText}>
                Minimum 0-2 experience in customer service{" "}
              </p>{" "}
              <p className={style.pText}>
                {" "}
                Excellent communication skills Verbal & Written{" "}
              </p>{" "}
              <p className={style.pText}>
                Flexible to work 24/7 (For Females: 7AM till 8PM) including
                Sunday/holidays{" "}
              </p>{" "}
              <p className={style.pText}>
                Flexible to get scattered 8 Week Offs in a month with 9hours
                shift{" "}
              </p>{" "}
              <p className={style.pText}>
                {" "}
                Good listening skills and strong communication abilities.{" "}
              </p>{" "}
              <p className={style.pText}>
                {" "}
                Be Confident and willing to learn with a flair for
                knowledge.Possess an upbeat, positive can-do attitude& works
                with integrity{" "}
              </p>{" "}
              <p className={style.pText}>
                Team Player, collaborative Self-motivated person including the
                ability to act as a role model within the{" "}
              </p>{" "}
              <p className={style.pText}>
                {" "}
                organization.Should be able to establish rapport quickly with
                peers, managers & customers
              </p>
            </div>
          </div>
          <Box
            display={{base:"block",md:"flex"}}
            justifyContent="space-between"
            width="90%"
            margin="auto"
            backgroundColor="rgb(108,84,218)"
          >
            <Box display={'flex'} p="1.3rem 0rem">
              <Box pl="5">
                <FaUserAlt className={style.FaUser_icons} />
              </Box>
              <Box ml={{base:'12px',md:"3"}} mt={{base:'3px'}} color="white" fontWeight="500" fontSize={{base:"0.8rem",md:"1.1rem"}}>
                {" "}
                NOT REGISTERED ON MONSTER YET?
              </Box>
            </Box>
            <Box p={{base:'0rem 0rem 0.9rem 0rem', md:"1rem 2rem"}}>
              <Button backgroundColor="white">REGISTER NOW</Button>
            </Box>
          </Box>

          <div className={style.JobDetails_card}>
            <Box fontSize="1.5rem" fontWeight="550">
              Job Detailas
            </Box>
            <Box display="flex">
              <Box
                display="flex"
                flexDirection="column"
                fontSize={["0.8rem",'1.1rem']}
                fontWeight="bold"
                width={["3.8rem",'7rem']}
              >
                <Text >Employment Types :</Text>
                <Text pt={{ base : "1rem", md: "1.2rem", lg:"1.2rem"}}>Industry :</Text>
                <Text pt={{ base : "2.7rem", md: "2.7rem", lg:"1.2rem"}}>Function :</Text>

                <Text pt={{ base : "1.7rem", md: "2.7rem", lg:"1.2rem"}}>Roles:</Text>
                <Text pt={{ base : "2rem", md: "2.7rem", lg:"1.2rem"}}> Skill:</Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                marginLeft={['1.8rem',"2.5rem"]}
                fontSize={['0.9rem',"1.1rem"]}
              >
                <span style={{ height: "2rem", paddingTop: "0.3rem" }}>
                  Full time
                </span>
                <span style={{ paddingTop: "2.3rem" }}>
                  Banking / Accounting / Financial Services
                </span>
                <span style={{ paddingTop: "1.3rem" }}>
                  Customer Service / Call Centre / BPO
                </span>
                <span style={{ paddingTop: "1.2rem" }}>
                  Customer Service Executive (Voice) , Customer Service
                  Executive (Non-voice)
                </span>
                <Box display="grid" pt="2" gridTemplateColumns={{base :"repeat(2,1fr)",md :"repeat(2,1fr)",lg:"repeat(5,1fr)"}} className={style.skills_box}>
                  <span className={style.roundBox_skill}>Nonvoice</span>
                  <span className={style.roundBox_skill}>Backend</span>
                  <span className={style.roundBox_skill}>Voice</span>
                  <span className={style.roundBox_skill}>Backoffice</span>
                  <span className={style.roundBox_skill}>Processing</span>
                  <span className={style.roundBox_skill}>Inbound</span>
                  <span className={style.roundBox_skill}>Outbound</span>
                  <span className={style.roundBox_skill}>Fresher</span>
                  <span className={style.roundBox_skill}>Voice</span>
                </Box>
              </Box>
            </Box>
          </div>
          <Box
            className={style.JobDetails_card}
            display="flex"
            justifyContent="space-between"
            height="5rem"
          >
            <Box display="flex">
              <p className={style.reactIcons}>
                <FaRegStar className={style.icons} />
              </p>
              <p className={style.reactIcons}>
                <HiShare className={style.icons} />
              </p>
            </Box>
            <div>
              {/* <Button
                color="rgb(108,84,218)"
                backgroundColor="White"
                border="3px solid rgb(108,84,218)"
                mr="0.7rem"
              >
                REGISTER TO APPLY
              </Button> */}
              <Button
                backgroundColor="rgba(108,84,218,0.9)"
                color="white"
                width="11rem"
                // className={style.applybtn}
              >
                APPLY NOW
              </Button>
            </div>
          </Box>

          <div className={style.JobDetails_card}>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" fontSize="1.2rem">
                {" "}
                <Box fontWeight="600">About</Box>
                <Box color="rgb(108,84,218)" fontWeight="500" pl="3">
                  {curentJob.CompanyName}
                </Box>
              </Box>
              <div>
                <Button
                  color="rgb(108,84,218)"
                  backgroundColor="White"
                  border="3px solid rgb(108,84,218)"
                  fontWeight="bold"
                >
                  Follow
                </Button>
              </div>
            </Box>
            <Box>
              <p className={style.pText}>
                {curentJob.CompanyName} India has been providing an efficient,
                effective and enjoyable staffing experience to job-seekers and
                employers since 2006. We know that a resume is important, but
                it’s also just a piece of paper. Our job as consultants is to
                understand the needs of the employers and job seekers to help
                bring together the perfect match in expertise, skill and
                personality.
              </p>
              <p className={style.pText}>
                Our clients receive side by side comparisons of the newest
                opportunities and receive objective guidance from our team of
                qualified experts. Ready to make your next career move with
                confidence Get in touch with us today and move one step closer
                to achieving your employment goals.
              </p>
            </Box>
          </div>
        </div>
        <div className={style.WorkDetails_main_RightMain}>
          <Box width="90%" backgroundColor="white" pb="1rem">
            <Box fontWeight="bold" pt="4" fontSize="1rem">
              NEW TO MONSTER ?{" "}
            </Box>
            <Box
              fontWeight="bold"
              pt="4"
              fontSize="1rem"
              color="rgb(108,84,219)"
            >
              REGISTER WITH US
            </Box>
            <Box display="flex">
              <p
                style={{
                  borderBottom: "1px solid #ccc",
                  width: "40%",
                  marginLeft: "1rem",
                }}
              ></p>
              <p style={{ paddingTop: "0.5rem" }}>OR</p>
              <p
                style={{
                  borderBottom: "1px solid #ccc",
                  width: "43%",
                  marginLeft: "1rem",
                }}
              ></p>
            </Box>
            <Box
              backgroundColor="rgb(245,166,35)"
              width="90%"
              margin="auto"
              mt="1rem"
              mb="1rem"
            >
              <Box fontWeight="bold" pt="4" fontSize="1rem" color="white">
                UPLOAD RESUME
              </Box>
              <Box pb="4" fontSize="1rem" color="white">
                We Will create your profile
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default WorkDetailsPage;
