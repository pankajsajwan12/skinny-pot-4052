import * as types  from './actionType'
import axios from 'axios'

export const getJobsData = (params) => (dispatch) => {
    dispatch({type : types.GET_JOBS_REQUEST})
    return axios.get('https://monsterjobs.herokuapp.com/JobData',params)
    .then((res) => {
        console.log("res",res.data);
        dispatch({type:types.GET_JOBS_SUCCESS, payload:res.data})
    })
    .catch(() => {
        dispatch({type :types.GET_JOBS_FAILURE})
    })
}