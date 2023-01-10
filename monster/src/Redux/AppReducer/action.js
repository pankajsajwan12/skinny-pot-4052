import * as types from "./actionType";
import axios from "axios";

export const getJobsData = (params) => (dispatch) => {
  //("params",params);
  dispatch({ type: types.GET_JOBS_REQUEST });
  return axios
    .get("https://monster-jsonserver.onrender.com/JobData", params)
    .then((res) => {
      //("res",res.data);
      dispatch({ type: types.GET_JOBS_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.GET_JOBS_FAILURE });
    });
};
