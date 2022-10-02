import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import {useSearchParams } from 'react-router-dom'
import style from './WorkFromHome.module.css'
import { useState } from "react";
import { useEffect } from "react";


const WorkFromHomeFilter = () => {
  const[searchParams, setSearchParams] = useSearchParams()
  const initialYearFilter = searchParams.getAll('years');
  const intialCompanyNameFilters = searchParams.getAll('companyName');
  const intialLocationFilters = searchParams.getAll('location');
  const [companyName, setCompanyName] = useState( intialCompanyNameFilters ||[])
  const [category, setCategory] = useState([]);
  const [years, setYears] = useState(initialYearFilter ||[]);
  const [location, setLocation] = useState(intialLocationFilters ||[]);

  const handleFilterCheckbox = (e) => {
    const newCategory = [...category]
    if(newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value),1)
    } else {
      newCategory.push(e.target.value)
    }
    setCategory(newCategory)
  }


  // Company Name OnChange
  const handleFilterCompanyName = (e) => {
    const newCampName = [...companyName]
    if(newCampName.includes(e.target.value)) {
      newCampName.splice(newCampName.indexOf(e.target.value),1)
    } else {
      newCampName.push(e.target.value)
    }
    setCompanyName(newCampName)
  }
 

  // Year OnChange functions
  const handleFilterYears = (e) => {
    const newYears = [...years]
    if(newYears.includes(e.target.value)) {
      newYears.splice(newYears.indexOf(e.target.value),1)
    } else {
      newYears.push(e.target.value)
    }
    setYears(newYears)
  }

  // City
  const handleFilterCity = (e) => {
    const newCity = [...location]
    if(newCity.includes(e.target.value)) {
      newCity.splice(newCity.indexOf(e.target.value),1)
    } else {
      newCity.push(e.target.value)
    }
    setLocation(newCity)
  }

  useEffect(() => {
    if(companyName || years || location) {
      let params = {};
      years && (params.years = years)
      companyName && (params.companyName = companyName)
      location && (params.location = location)
      setSearchParams(params);
    }
  },[companyName,years,location, setSearchParams])


  return (
    <div className={style.WorkFromHomeFilterComponents}>
      <Box
        borderBottom="1px solid black"
        textAlign="left"
        p="3"
        fontWeight="500"
      >
        Filter By{" "}
      </Box>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" w="1" fontWeight='bold'>
                    Function
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" 
                        value="IT"
                        onChange={handleFilterCheckbox}
                        checked={category.includes("IT")} 
                        />
                        &nbsp; IT
                        </p>
                  <p>(1349)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p>
                    <input 
                        type="checkbox"
                        value="Health Care"
                        onChange={handleFilterCheckbox}
                        checked={category.includes("Health Care")}
                  />&nbsp; Health Care</p>
                  <p>(566)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                        type="checkbox"
                        value="Admin/Secretarial/Fron..."
                        onChange={handleFilterCheckbox}
                        checked={category.includes("Admin/Secretarial/Fron")}
                        />
                        &nbsp; Admin/Secretarial/Fron...
                        </p>
                  <p>(332)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value="IT/Software Developme..."
                       onChange={handleFilterCheckbox}
                       checked={category.includes("IT/Software Developme")}
                       />
                       &nbsp; IT/Software Developme...
                       </p>
                  <p>(267)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                        type="checkbox"
                        value="Sales/Business Develop..."
                        onChange={handleFilterCheckbox}
                        checked={category.includes("Sales/Business Develop...")} 
                        />&nbsp; Sales/Business Develop...
                        </p>
                  <p>(255)</p>
                </Box>
                <Box textAlign='right' pt='2'> 
                  +50 more
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" w="1">
                    Role
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value="Software Engineer/Prog..."
                       onChange={handleFilterCheckbox}
                       checked={category.includes("Software Engineer/Prog...")}  
                       />
                       &nbsp; Software Engineer/Prog...
                       </p>
                  <p>(749)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value="Medical Coder"
                       onChange={handleFilterCheckbox}
                       checked={category.includes("Medical Coder")}  
                       />&nbsp; Medical Coder</p>
                  <p>(558)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value="Fresher"
                       onChange={handleFilterCheckbox}
                       checked={category.includes("Fresher")}  
                       />&nbsp; Fresher</p>
                  <p>(323)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" />&nbsp; Software Developer</p>
                  <p>(250)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" />&nbsp; Other Roles</p>
                  <p>(232)</p>
                </Box>
                <Box textAlign='right' pt='2'> 
                  +95 more
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" w="1">
                    Experience(In Years)
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value=" 0-1 years"
                       onChange={handleFilterYears}
                       checked={years.includes(" 0-1 years")}  
                       /> 0-1 &nbsp; Years</p>
                  <p>(1349)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value=" 1-4 years"
                       onChange={handleFilterYears}
                       checked={years.includes(" 1-4 years")}  
                       /> 1-4 &nbsp; Years</p>
                  <p>(566)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value="2-6 Years"
                       onChange={handleFilterYears}
                       checked={years.includes("2-6 Years")}  
                       /> 2-6 &nbsp; Years</p>
                  <p>(332)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value="3-8 Years"
                       onChange={handleFilterYears}
                       checked={years.includes("3-8 Years")}  
                       /> 3-8 &nbsp; Years</p>
                  <p>(267)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value="10-15 Years"
                       onChange={handleFilterYears}
                       checked={years.includes("10-15 Years")}  
                       /> 10-15 &nbsp; Years</p>
                  <p>(255)</p>
                </Box>
                <Box textAlign='right' pt='2'> 
                  +2 more
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" w="1">
                    City
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value="Bengaluru / Bangalore"
                       onChange={handleFilterCity}
                       checked={location.includes("Bengaluru / Bangalore")}  
                       /> Bengalure / Bangalore</p>
                  <p>(948)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value="Anna Malai / Chennai"
                       onChange={handleFilterCity}
                       checked={location.includes("Anna Malai / Chennai")}  
                       /> Chennai</p>
                  <p>(770)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value="Surat / Gujraat"
                       onChange={handleFilterCity}
                       checked={location.includes("Surat / Gujraat")}  
                       /> Surat / Gujraat...</p>
                  <p>(332)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value="Remote"
                       onChange={handleFilterCity}
                       checked={location.includes("Remote")}  
                       /> Remote</p>
                  <p>(442)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                       type="checkbox"
                       value="lucknow / UP"
                       onChange={handleFilterCity}
                       checked={location.includes("lucknow / UP")}  
                       /> UP</p>
                  <p>(415)</p>
                </Box>
                <Box textAlign='right' pt='2'> 
                  +95 more
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" w="1">
                    Salary(INR)
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> 0-1Lakhs</p>
                  <p>(1349)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> 1-2Lakhs</p>
                  <p>(566)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> 2-5Lakhs</p>
                  <p>(332)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> 5-10Lakhs</p>
                  <p>(267)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> 10-20Lakhs</p>
                  <p>(255)</p>
                </Box>
                <Box textAlign='right' pt='2'> 
                  +4 more
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" w="1">
                    Great Place To Work
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Show Only GPTW Jobs</p>
                  <p>(22)</p>
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" w="1">
                    Qualification
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Bachelor of Technolog...</p>
                  <p>(1500)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Bachelor of Science(B...</p>
                  <p>(1001)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Bachelor of Pharmacy ...</p>
                  <p>(861)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Other</p>
                  <p>(844)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Bachelor in Hotel Mana...</p>
                  <p>(809)</p>
                </Box>
                <Box display='flex' pt='2'> 
                  +40 more
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" w="1">
                    Employer Type
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Company</p>
                  <p>(2484)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Consultant</p>
                  <p>(1064)</p>
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" w="1">
                    Top Companies
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box className={style.boxIcons}> 
                  <p><input 
                      type="checkbox"
                      value="Amazon"
                      onChange={handleFilterCompanyName}
                      checked={companyName.includes("Amazon")} /> Amazon</p>
                  <p>(714)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                      type="checkbox"
                      value="Harita Techserv Private Limited"
                      onChange={handleFilterCompanyName}
                      checked={companyName.includes("Harita Techserv Private Limited")} />
                       Harita Techserv Private Limited
                  </p>
                  <p>(516)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                      type="checkbox"
                      value="Google"
                      onChange={handleFilterCompanyName}
                      checked={companyName.includes("Google")} 
                      /> Google
                  </p>
                  <p>(217)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                      type="checkbox"
                      value="Mesho"
                      onChange={handleFilterCompanyName}
                      checked={companyName.includes("Mesho")} 
                      />
                    Mesho
                  </p>
                  <p>(129)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input 
                      type="checkbox"
                      value="Standard Chartered"
                      onChange={handleFilterCompanyName}
                      checked={companyName.includes("Standard Chartered")} 
                      /> Standard Chartered
                  </p>
                  <p>(255)</p>
                </Box>
                <Box display='flex' pt='2'> 
                  +95 more
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" w="1">
                    Industry
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> IT/Computers - Software</p>
                  <p>(1918)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Bio Technology & Life S...</p>
                  <p>(893)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Hospitals/Healthcare/D...</p>
                  <p>(716)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Other</p>
                  <p>(660)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> IT/Computers - Hardwa...</p>
                  <p>(604)</p>
                </Box>
                <Box display='flex' pt='2'> 
                  +73 more
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" w="1">
                    Job Freshness
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Last 30 Days</p>
                  <p>(1122)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Last 15 Days</p>
                  <p>(811)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Last 7 Days</p>
                  <p>(507)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Last 3 Days</p>
                  <p>(258)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" /> Last 1 Days</p>
                  <p>(87)</p>
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default WorkFromHomeFilter;
