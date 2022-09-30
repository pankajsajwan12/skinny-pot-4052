import styles from "../Navbar/Navbar.module.css";
import { FaPhoneSquareAlt, FaEnvelope, FaTwitterSquare } from "react-icons/fa";
import { GrInstagram, GrLinkedin, GrFacebook } from "react-icons/gr";
export function Footer() {
  return (
    <div>
      <table className={styles.footer_table}>
        <tr>
          <td>Jobs by Locations</td>
          <td>
            : Jobs in Bangalore | Jobs in Delhi | Jobs in Mumbai | Jobs in
            Chennai | Jobs in Hyderabad | Jobs in Kolkata | Jobs in Pune |Jobs
            in Chandigarh | Jobs in Lucknow | Jobs in Coimbatore
          </td>
        </tr>
        <tr>
          <td>Jobs by Skill - IT</td>
          <td>
            : Biotechnology Jobs | Digital Marketing Jobs | Graphic Design Jobs
            | Networking Jobs | Oracle Jobs | SEO Jobs | Software Testing Jobs |
            Sql Jobs | Web Design Jobs |{" "}
          </td>
        </tr>
        <tr>
          <td>Jobs by Skill - Non IT</td>
          <td>
            Accounting Jobs | BPO Jobs | Call Center Jobs | Civil Engineering
            Jobs | Content Writing Jobs | Electrical Engineering Jobs | Event
            Management Jobs | Hotel Management Jobs | HR Jobs | Sales Jobs |{" "}
          </td>
        </tr>
        <tr>
          <td>Jobs by Role</td>
          <td>
            Air Hostess Jobs | Accountant Jobs | Assistant Professor Jobs |
            Business Analyst Jobs | Computer Operator jobs | Data Analyst Jobs |
            Data Entry Operator Jobs | Fashion Designer Jobs | Graphics Designer
            jobs | Software Engineer Jobs |{" "}
          </td>
        </tr>
        <tr>
          <td>International Jobs</td>
          <td>
            Jobs in Gulf | Jobs in Singapore | Jobs in Malaysia | Jobs in
            Philippines | Jobs in Hong Kong | Jobs in Vietnam | Jobs in
            Indonesia | Jobs in Thailand | Jobs in Dubai | Jobs in UAE
          </td>
        </tr>
        <tr>
          <td>Other Jobs </td>
          <td>
            Walk-in Jobs | Part Time Jobs | Contract Jobs | Jobs | for
            WomenFresher Jobs | Freelance Jobs | Work from Home Jobs | 12th Pass
            Jobs | 10th Pass Jobs | Diploma Jobs |{" "}
          </td>
        </tr>
      </table>
      <div className={styles.footer_contact}>
        <div>
          <select name="" id="">
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Singapore">Singapore</option>
            <option value="Thailand">Thailand</option>
            <option value="Malaysia">Malaysia</option>
          </select>
          <p>
            <span>
              <FaPhoneSquareAlt />
            </span>{" "}
            Toll No: +91-40-66116611 <br />
            Toll Free No: 1-800-4196666
          </p>
          <p>
            {" "}
            <span>
              <FaEnvelope />
            </span>{" "}
            info@monsterindia.com
          </p>
          <span>
            <GrInstagram />
          </span>
          <span>
            <GrLinkedin />
          </span>
          <span>
            <FaTwitterSquare />
          </span>
          <span>
            <GrFacebook />
          </span>
        </div>
      </div>
      <div className={styles.footer_info}>
        <ul>
          <li> Job Seekers</li>
          <li>Job Search</li>
          <li>Job Seekers Login</li>
          <li>Upload Resume</li>
          <li>Career Advice</li>
          <li>Search Tips</li>
          <li>Free Job Alert</li>
          <li>Find Companies</li>
          <li>Help</li>
        </ul>
        <ul>
          <li> Employers</li>
          <li>Employer Login</li>
          <li>Job Posting</li>
          <li>Access Resume Database</li>
          <li>Join mRecruiters</li>
          <li>Advertise with uss</li>
          <li>Research Reportst</li>
          <li>Buy Online</li>
        </ul>
        <ul>
          <li>Monster</li>
          <li>Job Search</li>
          <li>Job Seekers Login</li>
          <li>Upload Resume</li>
          <li>Career Advice</li>
          <li>Search Tips</li>
          <li>Free Job Alert</li>
          <li>Find Companies</li>
          <li>Help</li>
        </ul>
        <ul>
          <li>Stay connected</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>Youtube</li>
          <li>
            <img
              src="https://media.monsterindia.com/trex/public/default/images/android-footer.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://media.monsterindia.com/trex/public/default/images/ios-footer.png"
              alt=""
            />
          </li>
        </ul>
        <ul>
          <li> Legal</li>
          <li>Security and Fraud</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Be Safe</li>
          <li>Complaints</li>
        </ul>
      </div>
      <div>
        <p style={{ marginLeft: "130px" }}>
          © 2022 Monster - All Rights Reserved
        </p>
      </div>
    </div>
  );
}