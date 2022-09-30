import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Select,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import axios from "axios"
import { useForm } from "react-hook-form";
import styles from "../CSS/Register.module.css";


const Register = () => {
  // const [address, setAddress] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    axios.post("https://monsterjobs.herokuapp.com/register",data).then((res)=>{
        console.log(res.data)
    }).catch((err)=>{
        console.log(err.message)
        alert("Your Account has been Registered")
    })
}
  const ref = useRef();
  // const handleChange = (e) => {
  //   let { value, name } = e.target;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("form", form);
  //   localStorage.setItem("userData", JSON.stringify(form));
  //   const UserInfo = JSON.parse(localStorage.getItem("userData"));
  //   console.log("UserInfo", UserInfo);
  //   dispatch(signUp(UserInfo));
  //   // navigate("/login");
  // };


  return (
    <div>
      <button
        className={styles.register}
        onClick={onOpen}
      >
        Register with us
      </button>

      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">
            <Text fontSize="2xl">Create an Account(it's free)</Text>
            <Text fontSize="md">
              It only takes a couple of minutes to get started
            </Text>
            <div
              style={{ display: "flex", gap: "20px", justifyContent: "center" }}
            >
              <a href="https://www.google.com/" target="-blank">
                {" "}
                <div className={styles.google}>
                  {" "}
                  <img
                    src="https://img.icons8.com/parakeet/28/000000/experimental-google-logo-parakeet.png"
                    alt="google"
                  />
                  <Text fontSize="sm">Sign Up with Google</Text>{" "}
                </div>
              </a>
              <a href="https://www.facebook.com/" target="-blank">
                <div className={styles.facebook}>
                  {" "}
                  <img
                    src="https://img.icons8.com/nolan/28/facebook-new.png"
                    alt="facebook"
                  />
                  <Text fontSize="sm">Sign Up with facebook</Text>{" "}
                </div>
              </a>
            </div>
          </DrawerHeader>
          <hr />
          <DrawerBody>
            <label>
              Upload Resume (*.doc, *.docx, *.rtf, *.txt, *.pdf) 6 MB max
            </label>
            <div style={{ display: "flex" }}>
              <Input type="file"  /> 
              <div>Or</div>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton width="100%" >Copy and paste resume</AccordionButton>
                  <AccordionPanel>
                    <Textarea width="300px" placeholder="Here is a sample placeholder" />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label >Full name *</label>
            <br/>
            <input placeholder="Enter your Full name" name="username" ref={ref}  {...register("username",{ required: true })}  />
            {errors.username && <span style={{color:"red"}}>Enter your Full name</span>}
            <br/>
            <br/>
            <label >Email ID *</label>
            <br/>
            <input placeholder="Enter your email" name="email" ref={ref} {...register("email", { required: true })} />
            {errors.email && <span style={{color:"red"}}>Enter your Email</span>}
            <br/>
            <br/>
            <label>Password *</label>
            <br/>
            <input type="password" className='inputbox' ref={ref}  placeholder="password should be minimum 6characters" name="password"  {...register("password", { required: true , minLength:5})}  />
            {errors.password && <span style={{color:"red"}}>Enter your password</span>}
            <br/>
            <br/>
            <label>Mobile Number *</label>
            <br/>
            <input type="number" placeholder="Enter your Mobile Number" ref={ref} name="number" {...register("number", { required: true })} />
            {/* {...register("number", { required: true })} */}
            {errors.number && <span style={{color:"red"}}>Enter your Mobile Number</span>}
            <br/>
            <br/>
            <label>Current Location *</label>
            <br/>
            <input type="search" placeholder="Enter your location" name="location" ref={ref} {...register("location", { required: true })} />
            {errors.location && <span style={{color:"red"}}>Enter your location</span>}
            <br/>
            <br/>
            <label>Total Experience *</label>
            <Select >
            <option value="" disabled selected hidden>Select experience</option>
              <option value="fresher">Fresher</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Select>
            <br/>
            <div style={{display:"flex",textAlign:"left",}}>
            <input type="checkbox" style={{height:"15px",}} />
            <label>Immediately available due to covid-19 situation</label>
            </div>
            <br/>
            <label htmlFor="">Key Skills *</label>
            <br/>
            <input placeholder="Enter your skills" />
            <br/>
            <br/>
            <label>Preferred Industry *</label>
            <Select>
              <option value="" disabled selected hidden>Select your Preferred Industry</option>
              <option value="advertising">Advertising</option>
              <option value="automotive">Automotive</option>
              <option value="agriculture">Agriculture</option>
              <option value="bevarages">Bevarages</option>
              <option value="it">IT</option>
              <option value="civil">Civil</option>
              <option value="communication">Communication</option>
              <option value="sales">Sales</option>
              <option value="electrical">Electrical</option>
              <option value="food">Food</option>
              <option value="insurance">Insurance</option>
            </Select>
            <br />
            <label htmlFor="">Preferred Department/Function *</label>
            <Select>
            <option value="" disabled selected hidden>Select your Preferred Department </option>
              <option value="">Front Office</option>
              <option value="">Front End Developer</option>
              <option value="">Export Import</option>
              <option value="">Entertainment & Media</option>
              <option value="">Full stack</option>
              <option value="">Digital Marketing</option>
            </Select>
            <br />
            <p>By registering, you agree to our Terms and Conditions, Privacy Policy and default mailer and communications settings governing the use of monsterindia.com.</p>
            <br />
            <button className={styles.registerbtn}>Register Me</button>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Register;
