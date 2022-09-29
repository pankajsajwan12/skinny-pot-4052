import * as types  from './actionType'
import axios from 'axios'

export const getJobsData = () => (dispatch) => {
    dispatch({type : types.GET_JOBS_REQUEST})
    return axios.get('https://monsterjobs.herokuapp.com/JobData')
    .then((res) => {
        console.log("res",res.data);
        dispatch({type:types.GET_JOBS_SUCCESS, payload:res.data})
    })
    .catch(() => {
        dispatch({type :types.GET_JOBS_FAILURE})
    })
}