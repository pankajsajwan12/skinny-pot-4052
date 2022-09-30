import styles from "./Navbar.module.css";
import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
  const Navbar = () => {
  const [login, setLogin] = React.useState(false);
  const x = JSON.parse(localStorage.getItem("loggedin"));
  useEffect(() => {
    if (x === "1") setLogin(true);
    else setLogin(false);
  }, []);
 const [show, setShow] = React.useState(0);

  const dropdown = (a) => {
    setShow(a);
  };
  const hide = () => {
    setShow(0);
  };
  const changeLogin = () => {
  };

  return (
    <div className={styles.home_nav}>
      <div>
        {/* <NavLink to={"/"}> */}
          <img
            src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg"
            alt=""
          />
        {/* </NavLink> */}
        <div className={styles.home_nav_ele}>
          <div>
            <ul>
              <li onMouseEnter={() => dropdown(1)} onMouseLeave={hide}>
                <label htmlFor="job search">
                  <a href="#a">JOB SEARCH</a>
                </label>
                {show === 1 ? (
                  <>
                    <div>
                      <ul className={styles.drop}>
                        <li>JOBS BY LOCATION</li>
                        <li>jOBS BY SKILLS</li>
                        <li>JOBS BY TITLE</li>
                        <li>JOBS BY FUNCTIONS</li>
                        <li>JOBS BY INDUSTRY</li>
                        <li>JOBS BY EDUCATION</li>
                        <li>JOBS BY COMPANY</li>
                        <li>JOBS BY CONSULTANT</li>
                        <li>JOBS BY RECRUITER</li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </li>
              <li onMouseEnter={() => dropdown(2)} onMouseLeave={hide}>
                <label htmlFor="Work">
                  <a href="#a">WORK FROM HOME</a>
                </label>
                {show === 2 ? (
                  <>
                    <div>
                      <ul className={styles.drop}>
                        <li>WORK FROM HOME JOBS IN BANGALORE</li>
                        <li>WORK FROM HOME JOBS IN MUMBAI</li>
                        <li>WORK FROM HOME JOBS IN CHENNAI</li>
                        <li>WORK FROM HOME JOBS IN HYDERABAD</li>
                        <li>WORK FROM HOME JOBS IN KOLKATA</li>
                        <li>WORK FROM HOME JOBS IN PUNE</li>
                        <li>WORK FROM HOME JOBS IN DELHI</li>
                        <li>WORK FROM HOME JOBS IN NOIDA</li>
                        <li>WORK FROM HOME JOBS IN GURGAON</li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </li>
              <li onMouseEnter={() => dropdown(3)} onMouseLeave={hide}>
                <label htmlFor="Work">
                  <a href="#a">CAREER TIPS</a>
                </label>
                {show === 3 ? (
                  <>
                    <div>
                      <ul className={styles.drop}>
                        <li>CAREER TIPS</li>
                        <li>COVID-19 CAREER ADVICE</li>
                        <li>JOB SEARCH STRATEGY</li>
                        <li>RESUME AND COVER LETTER</li>
                        <li>INTERVIEW TIPS</li>
                        <li>EXPERTS' VIDEOS</li>
                        <li>CAREER MANAGEMENT</li>
                        <li>SALARY NEGOTIATIONS</li>
                        <li>RESEARCH REPORTS</li>
                        <li>COURSES</li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </li>
              <li onMouseEnter={() => dropdown(4)} onMouseLeave={hide}>
                <label htmlFor="Work">
                  <a href="#a">PREMIUM SERVICES</a>
                </label>
                {show === 4 ? (
                  <>
                    <div>
                      <ul className={styles.drop}>
                        <li>XPRESS RESUME+</li>
                        <li>RESUME HIGHLIGHTER</li>
                        <li>CAREER BOOSTER</li>
                        <li>RIGHT RESUME</li>
                        <li>PSYCHOMETRIC TEST</li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </li>
              <li onMouseEnter={() => dropdown(5)} onMouseLeave={hide}>
                <label htmlFor="Work">
                  <a href="#a">MORE</a>
                </label>
                {show === 5 ? (
                  <>
                    <div>
                      <ul className={styles.drop}>
                        <li>SPECIAL ABILITY JOBS</li>
                        <li>FREE JOB ALERT</li>
                        <li>EMPLOYMENT INDEX</li>
                        <li>SALARY INDEX</li>
                        <li>SEARCH TIPS</li>
                        <li>JOBS APP</li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </li>
            </ul>
            <ul className={styles.user_info}>
              <li>
                <div>
                  {/* <h5>job effected by covid-19</h5> */}
                  <div>
                    {/* <input type="radio" name="Yes" /> */}
                    {/* <span>Yes</span> */}
                  </div>
                </div>
              </li>
              {login ? (
               <> 
                  <li>
                    <div>
                      {/* <AiOutlineDashboard style={{ fontSize: "30px" }} /> */}
                    </div>
                  </li>
                  <li>
                    <div>
                      {/* <FaBell style={{ fontSize: "30px" }} /> */}
                    </div>
                  </li>
                  <li>
                    <div>
                      {/* <FaUserCircle style={{ fontSize: "30px" }} /> */}
                    </div>
                  </li>
                </>
              ) : (
                <li className={styles.login}>
                  <NavLink to={"/login"}>
                    <button style={{ marginTop:"10px" ,paddingTop:"0.5px" }} onClick={changeLogin}>
                      <RiUser3Line />
                      <span>JOBSEEKER LOGIN</span>
                    </button>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar