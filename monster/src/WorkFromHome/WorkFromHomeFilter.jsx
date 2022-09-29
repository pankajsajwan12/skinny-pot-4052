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
  const [category, setCategory] = useState([])

  const handleFilterCheckbox = (e) => {
    const newCategory = [...category]
    if(newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value),1)
    } else {
      newCategory.push(e.target.value)
    }
    setCategory(newCategory)
  }
  console.log("cat",category);
  useEffect(() => {
    if(category) {
      let params = {};
      category && (params.category = category)
      setSearchParams(params);
    }
  })
  return (
    <div>
      <Box
        borderBottom="1px solid black"
        textAlign="left"
        p="3"
        fontWeight="500"
      >
        Filter By{" "}
      </Box>
      <Accordion >
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" w="1">
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
                  <p><input 
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
                       value="Software Engineer/Prog..."
                       onChange={handleFilterCheckbox}
                       checked={category.includes("Software Engineer/Prog...")}  
                       />&nbsp; Medical Coder</p>
                  <p>(558)</p>
                </Box>
                <Box className={style.boxIcons}> 
                  <p><input type="checkbox" name="" id="" />&nbsp; Fresher</p>
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
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT</p>
                  <p>(1349)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Health Care</p>
                  <p>(566)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Admin/Secretarial/Fron...</p>
                  <p>(332)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT/Software Developme...</p>
                  <p>(267)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Sales/Business Develop...</p>
                  <p>(255)</p>
                </Box>
                <Box> 
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
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT</p>
                  <p>(1349)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Health Care</p>
                  <p>(566)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Admin/Secretarial/Fron...</p>
                  <p>(332)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT/Software Developme...</p>
                  <p>(267)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Sales/Business Develop...</p>
                  <p>(255)</p>
                </Box>
                <Box> 
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
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT</p>
                  <p>(1349)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Health Care</p>
                  <p>(566)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Admin/Secretarial/Fron...</p>
                  <p>(332)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT/Software Developme...</p>
                  <p>(267)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Sales/Business Develop...</p>
                  <p>(255)</p>
                </Box>
                <Box> 
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
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT</p>
                  <p>(1349)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Health Care</p>
                  <p>(566)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Admin/Secretarial/Fron...</p>
                  <p>(332)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT/Software Developme...</p>
                  <p>(267)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Sales/Business Develop...</p>
                  <p>(255)</p>
                </Box>
                <Box> 
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
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT</p>
                  <p>(1349)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Health Care</p>
                  <p>(566)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Admin/Secretarial/Fron...</p>
                  <p>(332)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT/Software Developme...</p>
                  <p>(267)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Sales/Business Develop...</p>
                  <p>(255)</p>
                </Box>
                <Box> 
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
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT</p>
                  <p>(1349)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Health Care</p>
                  <p>(566)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Admin/Secretarial/Fron...</p>
                  <p>(332)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT/Software Developme...</p>
                  <p>(267)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Sales/Business Develop...</p>
                  <p>(255)</p>
                </Box>
                <Box> 
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
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT</p>
                  <p>(1349)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Health Care</p>
                  <p>(566)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Admin/Secretarial/Fron...</p>
                  <p>(332)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT/Software Developme...</p>
                  <p>(267)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Sales/Business Develop...</p>
                  <p>(255)</p>
                </Box>
                <Box> 
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
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT</p>
                  <p>(1349)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Health Care</p>
                  <p>(566)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Admin/Secretarial/Fron...</p>
                  <p>(332)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT/Software Developme...</p>
                  <p>(267)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Sales/Business Develop...</p>
                  <p>(255)</p>
                </Box>
                <Box> 
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
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT</p>
                  <p>(1349)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Health Care</p>
                  <p>(566)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Admin/Secretarial/Fron...</p>
                  <p>(332)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> IT/Software Developme...</p>
                  <p>(267)</p>
                </Box>
                <Box> 
                  <p><input type="checkbox" name="" id="" /> Sales/Business Develop...</p>
                  <p>(255)</p>
                </Box>
                <Box> 
                  +50 more
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
