import React from 'react'
import style from './jobSearch.module.css'
import {BiSearch} from 'react-icons/bi';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GrLocation } from 'react-icons/gr'

const AdvanceJobSearch = () => {
  return (
    <>
    <div className={style.AdvanceJobSearch_main}>
       <div className={style.fontStyle}> <p>Advance Job Search</p> </div>
    <div className={style.AdvanceJobSearch}>
      <div className={style.FormStyle_left}>
        <form >
            <div className={style.fromKeyword}>
                <BiSearch />
                <input type="text" placeholder='Keyword'/>
            </div>
            <div className={style.ExpericenceAndLocation_Input}>
                <div className={style.exInput}>
                <BsFillBriefcaseFill />
                <input type="text" placeholder='Experience' />
                </div>
                <div className={style.exInput_location}>
                  <GrLocation/> 
                  <input type="text" placeholder='Location' />
                </div>
            </div>
            <div className={style.fromKeyword}>
                <input type="text" placeholder='Industry' />
            </div>
            <div className={style.fromKeyword}>
                <input type="text" placeholder='Function' />
            </div>
            <div className={style.fromKeyword}>
                <input type="text" placeholder='Role' />
            </div>
            <div className={style.ExpericenceAndLocation_Input}>
               <div className={style.minimumSalary}>
                <label>Minimum Salary</label>
                 <select name='Pankaj '>
                    <option value=""></option>
                    <option value="10000">10000</option>
                    <option value="20000">20000</option>
                 </select>
               </div>
               <div className={style.maximumSalary}>
               <label>Maximum Salary</label>
                 <select name='Pankaj '>
                    <option value=""></option>
                    <option value="10000">10000</option>
                    <option value="20000">20000</option>
                    <option value="30000">30000</option>
                 </select>
               </div>
               <div className={style.jobsCheckbox}>
                 <input type="checkbox"/>
                 <label> Jobs that don't include salary</label>
              </div> 
            </div>
            <div className={style.submitButton}>
                <button type='submit'className={style.btn}> Search</button>
            </div>
        </form>
      </div>
      <div className={style.FromStyle_Right}>
        <div>
            <img src="https://tpc.googlesyndication.com/simgad/14167931370119027316" width="350" height="250" className={style.image}/>
        </div>
        <div className={style.FromStyle_Right_Bottom}>
            <p className={style.SearchTips_font}>Search Tips</p>
            <div className={style.FromStyle_Right_Bottom_bottom}>
                <div  className={style.searchTips_left}>
                  <div style={{display:'flex',width:'80px',marginTop:'1rem',marginLeft:'1.5rem'}}>
                <BsFillBriefcaseFill />
                  <BiSearch style={{paddingTop:'5px',paddingRight:'10px'}} />
                  </div>
                </div>
                <div className={style.searchTips_Right}>
                    <p className={style.ExactJobSearch_font}>Exact Job Search</p>
                    <div>
                        <p className={style.Looking_font}>Looking for an keyword search?</p>
                        <p className={style.Looking_font}>Put dobule quotes around the "Keyword" to search for exact word/phrases.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className={style.AdvanceJobSearch_bottom}></div>
    </div>
    </>
  )
}

export default AdvanceJobSearch
