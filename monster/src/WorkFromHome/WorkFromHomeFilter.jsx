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
                  <Box flex="1" textAlign="left" w="1" fontWeight='bold' fontSize={['13px','15px']}>
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
                  <input type="checkbox" 
                        value="IT"
                        onChange={handleFilterCheckbox}
                        checked={category.includes("IT")} 
                        />
                  <p>&nbsp; IT</p>
                  <p>(1349)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  
                    <input 
                        type="checkbox"
                        value="Health Care"
                        onChange={handleFilterCheckbox}
                        checked={category.includes("Health Care")}
                  />
                  <p>&nbsp; Health Care</p>
                  <p>(566)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                        type="checkbox"
                        value="Admin/Secretarial/Fron..."
                        onChange={handleFilterCheckbox}
                        checked={category.includes("Admin/Secretarial/Fron")}
                        />
                  <p> &nbsp;  Admin </p>
                  <p>(332)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                       type="checkbox"
                       value="IT/Software Developme..."
                       onChange={handleFilterCheckbox}
                       checked={category.includes("IT/Software Developme")}
                       />
                       <p>&nbsp; IT/Software</p>
                  <p>(267)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                        type="checkbox"
                        value="Sales/Business Develop..."
                        onChange={handleFilterCheckbox}
                        checked={category.includes("Sales/Business Develop...")} 
                        /><p>&nbsp; Sales/Business
                        </p>
                  <p>(255)</p>
                </Box>
                <Box textAlign='right' pt='2' fontSize={['12px','14px']}> 
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
                  <Box flex="1" textAlign="left" w="1" fontSize={['13px','15px']}>
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
                  <input 
                       type="checkbox"
                       value="Software Engineer/Prog..."
                       onChange={handleFilterCheckbox}
                       checked={category.includes("Software Engineer/Prog...")}  
                       />
                       <p>&nbsp; Software Engineer</p>
                  <p>(749)</p>
                </Box>
                <Box className={style.boxIcons}> 
                 <input 
                       type="checkbox"
                       value="Medical Coder"
                       onChange={handleFilterCheckbox}
                       checked={category.includes("Medical Coder")}  
                       />
                  <p>&nbsp; Medical Coder</p>
                  <p>(558)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                       type="checkbox"
                       value="Fresher"
                       onChange={handleFilterCheckbox}
                       checked={category.includes("Fresher")}  
                       />
                  <p>&nbsp; Fresher</p>
                  <p>(323)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" /> <p>&nbsp; SDE</p>
                  <p>(250)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" /><p>&nbsp; Other Roles</p>
                  <p>(232)</p>
                </Box>
                <Box textAlign='right' pt='2' fontSize={['12px','14px']}> 
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
                  <Box flex="1" textAlign="left" w="1" fontSize={['13px','15px']} fontWeight='450'> 
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
                  <input 
                       type="checkbox"
                       value=" 0-1 years"
                       onChange={handleFilterYears}
                       checked={years.includes(" 0-1 years")}  
                       />
                  <p>&nbsp; 0-1 &nbsp; Years</p>
                  <p>(1349)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                       type="checkbox"
                       value=" 1-4 years"
                       onChange={handleFilterYears}
                       checked={years.includes(" 1-4 years")}  
                       /> <p>&nbsp; 1-4 &nbsp; Years</p>
                  <p>(566)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                       type="checkbox"
                       value="2-6 Years"
                       onChange={handleFilterYears}
                       checked={years.includes("2-6 Years")}  
                       /> <p>&nbsp; 2-6 &nbsp; Years</p>
                  <p>(332)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                       type="checkbox"
                       value="3-8 Years"
                       onChange={handleFilterYears}
                       checked={years.includes("3-8 Years")}  
                       /> <p>&nbsp; 3-8 &nbsp; Years</p>
                  <p>(267)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                       type="checkbox"
                       value="10-15 Years"
                       onChange={handleFilterYears}
                       checked={years.includes("10-15 Years")}  
                       /> <p>&nbsp; 10-15 &nbsp; Years</p>
                  <p>(255)</p>
                </Box>
                <Box textAlign='right' pt='2' fontSize={['12px','14px']}> 
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
                  <Box flex="1" textAlign="left" w="1" fontSize={['13px','15px']}>
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
                  <input 
                       type="checkbox"
                       value="Bengaluru / Bangalore"
                       onChange={handleFilterCity}
                       checked={location.includes("Bengaluru / Bangalore")}  
                       /><p>&nbsp; Bangalore</p>
                  <p>(948)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                       type="checkbox"
                       value="Anna Malai / Chennai"
                       onChange={handleFilterCity}
                       checked={location.includes("Anna Malai / Chennai")}  
                       /><p>&nbsp; Chennai</p>
                  <p>(770)</p>
                </Box>
                <Box className={style.boxIcons}> 
                 <input 
                       type="checkbox"
                       value="Surat / Gujraat"
                       onChange={handleFilterCity}
                       checked={location.includes("Surat / Gujraat")}  
                       /><p>&nbsp; Surat / Gujraat...</p>
                  <p>(332)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                       type="checkbox"
                       value="Remote"
                       onChange={handleFilterCity}
                       checked={location.includes("Remote")}  
                       /><p>&nbsp; Remote</p>
                  <p>(442)</p>
                </Box>
                <Box className={style.boxIcons}> 
                 <input 
                       type="checkbox"
                       value="lucknow / UP"
                       onChange={handleFilterCity}
                       checked={location.includes("lucknow / UP")}  
                       /><p>&nbsp; UP</p>
                  <p>(415)</p>
                </Box>
                <Box textAlign='right' pt='2' fontSize={['12px','14px']}> 
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
                  <Box flex="1" textAlign="left" w="1" fontSize={['13px','15px']}>
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
                  <input type="checkbox" name="" id="" /><p>&nbsp; 0-1 Lakhs</p>
                  <p>&nbsp; (1349)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" /><p>&nbsp; 1-2 Lakhs</p>
                  <p>&nbsp; (566)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" /> <p>&nbsp; 2-5 Lakhs</p>
                  <p>&nbsp; (332)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" /><p>&nbsp; 5-10 Lakhs</p>
                  <p>&nbsp; (267)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" /><p>&nbsp; 10-20 Lakhs</p>
                  <p>&nbsp; (255)</p>
                </Box>
                <Box textAlign='right' pt='2' fontSize={['12px','14px']}> 
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
                  <Box flex="1" textAlign="left" w="1" fontSize={['13px','15px']}>
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
                  <input type="checkbox"   /><Box fontSize={['12px']} textAlign='left'>&nbsp; Show Only GPTW Jobs</Box>
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
                  <Box flex="1" textAlign="left" w="1" fontSize={['13px','15px']}>
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
                <input type="checkbox"/>
                <Box fontSize={['12px','10px']} pt={'4px'}>Bachelor of Technology</Box>
                  <Box fontSize={['12px','10.5px']} pt={'4px'}>&nbsp; (1500)</Box>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox"/>
                  <Box fontSize={['12px','10.5px']} pt={'4px'}>&nbsp; Bachelor of Science</Box>
                  <Box fontSize={['12px','10.5px']} pt={'4px'}>&nbsp; (1001)</Box>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" />
                  <Box fontSize={['12px','10.5px']} pt={'4px'}>&nbsp; Bachelor of Pharmacy</Box>
                  <Box fontSize={['12px','10.5px']} pt={'4px'}>&nbsp;(861)</Box>
                </Box>
                <Box className={style.boxIcons}> 
                 <input type="checkbox" name="" id="" />
                 <Box fontSize={['12px','10.5px']} pt={'4px'}>&nbsp; Bachelor in Hotel</Box>
                  <Box fontSize={['12px','10.5px']} pt={'4px'}>&nbsp;(844)</Box>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" />
                  <Box fontSize={['12px','10.5px']} pt={'4px'}>&nbsp; Other</Box>
                  <Box fontSize={['12px','10.5px']} pt={'4px'} >&nbsp; (809)</Box>
                </Box>
                <Box textAlign={'right'} pt='2' fontSize={['12px','14px']}> 
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
                  <Box flex="1" textAlign="left" w="1" fontSize={['13px','15px']}>
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
                  <input type="checkbox" name="" id="" /><p>&nbsp; Company</p>
                  <p>&nbsp;(2484)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" /><p>&nbsp; Consultant</p>
                  <p>&nbsp;(1064)</p>
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
                  <Box flex="1" textAlign="left" w="1" fontSize={['13px','15px']}>
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
                  <input 
                      type="checkbox"
                      value="Amazon"
                      onChange={handleFilterCompanyName}
                      checked={companyName.includes("Amazon")} />
                      <p>&nbsp; Amazon</p>
                  <p>&nbsp; (714)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                      type="checkbox"
                      value="Harita Techserv Private Limited"
                      onChange={handleFilterCompanyName}
                      checked={companyName.includes("Harita Techserv Private Limited")} />
                     <p>&nbsp;Harita Techserv Ptd</p>
                  <p>(516)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                      type="checkbox"
                      value="Google"
                      onChange={handleFilterCompanyName}
                      checked={companyName.includes("Google")} 
                      /><p>&nbsp; Google
                  </p>
                  <p>&nbsp; (217)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                      type="checkbox"
                      value="Mesho"
                      onChange={handleFilterCompanyName}
                      checked={companyName.includes("Mesho")} 
                      />
                   <p>&nbsp; Meesho
                  </p>
                  <p>&nbsp; (129)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input 
                      type="checkbox"
                      value="Standard Chartered"
                      onChange={handleFilterCompanyName}
                      checked={companyName.includes("Standard Chartered")} 
                      /><p>Standard Chartered
                  </p>
                  <p>(255)</p>
                </Box>
                <Box textAlign={'right'} pt='2' fontSize={['12px', '14px']}> 
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
                  <Box flex="1" textAlign="left" w="1" fontSize={['13px','15px']}>
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
                  <input type="checkbox" name="" id="" /><p>&nbsp; IT/Software</p>
                  <p>&nbsp; (1918)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" /><p>&nbsp; Bio Technology...</p>
                  <p>&nbsp; (893)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" /><p>&nbsp; Healthcare</p>
                  <p>&nbsp; (716)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" /><p>&nbsp; IT/Hardwa...</p>
                  <p>&nbsp; (660)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" name="" id="" /><p>&nbsp; Other</p>
                  <p>&nbsp; (604)</p>
                </Box>
                <Box textAlign={'right'} pt='2' fontSize={['12px','14px']}> 
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
                  <Box flex="1" textAlign="left" w="1" fontSize={['13px','15px']}>
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
                  <input type="checkbox" /><p>&nbsp; Last 30Days</p>
                  <p>&nbsp; (1122)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox"  /><p>&nbsp; Last 15Days</p>
                  <p>&nbsp; (811)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" /> <p>&nbsp; Last 7Days</p>
                  <p>&nbsp; (507)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox"  /><p>&nbsp;  Last 3Days</p>
                  <p>&nbsp; (258)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <input type="checkbox" /> <p>&nbsp; Last 1Days</p>
                  <p>&nbsp; (87)</p>
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
