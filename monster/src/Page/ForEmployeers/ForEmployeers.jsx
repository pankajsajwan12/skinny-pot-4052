import { Button, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "./Header";
import styles from "./Header.module.css";

const ForEmployeers = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <br />
      {/* <div style={{display:"flex",height:"100%", border:"1px solid black"}} >
          <div>
            <img style={{height:"100%"}} src="body.png" alt="" />
          </div>
          <div style={{backgroundColor:"#380c5e"}}>
            <b style={{color:"white"}} >Login</b>
            <input type="email" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button className={styles.login}>Login</button>
          </div>
        </div> */}
      <div className={styles.employeers}>
        <img
          style={{ textAlign: "left", height: "400px" }}
          className={styles.backgroundimg}
          src="IT.png"
          alt="It"
        />
        <div className={styles.body}>
          <div style={{ display: "flex", gap: "10px" }}>
            {" "}
            <img src="icon-bg.png" alt="tickicon" />{" "}
            <span>AI in Recruting Technology</span>{" "}
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {" "}
            <img src="icon-bg.png" alt="tickicon" /> Conversional UI
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {" "}
            <img src="icon-bg.png" alt="tickicon" />
            Data Security
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {" "}
            <img src="icon-bg.png" alt="tickicon" />
            Power Recruiting
          </div>
          <br />
          <div style={{ paddingLeft: "50px" }}> Introducing</div>
          <div style={{ paddingLeft: "50px" }}>
            {" "}
            <b>Monster Better Together</b>{" "}
          </div>
          <div style={{ paddingLeft: "50px" }}>
            <b>Experience</b>{" "}
          </div>
        </div>
        <div className={styles.employeerslogin}>
          <b>Login</b>
          <br />
          <input
            className={styles.employeesinput}
            type="email"
            placeholder="Username"
          />
          <br />
          <input
            className={styles.employeesinput}
            type="password"
            placeholder="Password"
          />
          <br />
          <br />
          <button className={styles.loginbtn}>Login</button>
          <br />
          <br />
          <hr style={{ border: "0.1px solid grey" }} />
          <br />
          <div style={{ display: "flex", margin: "auto", gap:"20px",marginLeft:"50px" }}>
            <h5>New User?</h5>
            <a href="/">Sign up</a>
          </div>
        </div>
      </div>
      <div>
        <Text fontSize="5xl">Our Services</Text>
        <Text style={{ fontWeight: "400" }}>
          For employers who need great people. Find Better, Faster.
        </Text>
        <br />
        <div className={styles.servicesbuttons}>
          <button
            style={{ backgroundColor: "#5d4da8", color: "white" }}
            className={styles.servicesbtn}
          >
            CORE SERVICES
          </button>
          <button className={styles.servicesbtn}>BETTER TOGETHER</button>
          <button className={styles.servicesbtn}>MORE SOLUTIONS</button>
        </div>
        <br />
        <div className={styles.services}>
          <div className={styles.database}>
            <img src="resume-database-1.jpg" alt="resume-database-1.jpg" />
            <br />
            <b>Resume Database Access</b>
            <br />
            <br />
            <Text>
              Find your next hire with all new RDA powered by Semantic Search
              technology that makes it easy and quick to find the talent
              matching your requirements.
            </Text>
            <br />
            <button className={styles.knowmore}>KNOW MORE</button>
          </div>
          <div className={styles.database}>
            <img src="Job-Posting-1.jpg" alt="Job-Posting-1.jpg" />
            <br />
            <b>Job Posting</b>
            <br />
            <br />

            <Text>
              Reach your next hire faster. Get relevant responses to your job
              ads with our new age technology.
            </Text>
            <br />
            <br />
            <button className={styles.knowmore}>KNOW MORE</button>
          </div>
          <div className={styles.database}>
            <img src="Monster-Social-1.jpg" alt="Monster-Social-1.jpg" />
            <br />
            <b>Monster Social Job Ads (MSJ)</b>
            <br />
            <br />

            <Text>
              Use the power of MSJ to take your job posting to a large pool of
              active and passive job seekers on social media & beyond. Find
              Better, Faster
            </Text>
            <br />
            <br />
            <button className={styles.knowmore}>KNOW MORE</button>
          </div>
        </div>
        <br />
        <br />
        <div className={styles.bottom}>
          <Text fontSize="2xl">Many more hiring solutions</Text>
          <button className={styles.connectwithusbtn}>Connect with us</button>
        </div>
      </div>
    </div>
  );
};

export default ForEmployeers;
