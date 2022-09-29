import * as types from './actionType'
const initialState = {
    jobs:[],
    isLoading:false,
    isError:false
}

export const reducer = (state=initialState,action) => {
    const { type, payload} = action
    switch(type) {
        case types.GET_JOBS_REQUEST : {
            return {
                ...state,
            isLoading : true
            }
        }
        case types.GET_JOBS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                jobs : payload
            }
        }
        case types.GET_JOBS_FAILURE : {
            return {
                ...state,
                isError : true
            }
        }
        default :
         return state;
    }
}