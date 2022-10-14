import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Footer } from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import WorkFromHome from "../../WorkFromHome/WorkFromHome";

function Search() {
  const [loading, setLoading] = useState(false);
  const selector = useSelector((state) => state.AppReducer);

  useEffect(() => {
    setLoading(selector.isLoading);
  }, [selector.isLoading]);
  return (
    <>
      <div>
        <Navbar />
        <h1>Result</h1>
        {loading &
        (
          <img
            style={{
              margin: "auto",
              marginTop: "200px",
              marginBottom: "100px",
            }}
            src="https://flevix.com/wp-content/uploads/2020/01/Circle-Loading.svg"
            alt="https://flevix.com/wp-content/uploads/2020/01/Circle-Loading.svg"
          />
        )}
        <div style={{marginTop:"70px"}} >
        <WorkFromHome />

        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Search;
