import * as types from "./auth.types"

const initialState={
    isAuth: false,
    token: "",
    isAuthLoading:false,
    isAuthError:false
}

const authReducer=(oldState=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case types.USER_LOGIN_REQUEST:{
            return{
                ...oldState,
                isAuthLoading:true,
            }
        }
        case types.USER_LOGIN_SUCCESS:{
            return{
                ...oldState,
                isAuthLoading:false,
                isAuth:true,
                token:payload
            }
        }
        case types.USER_LOGIN_FAILURE:{
            return{
                ...oldState,
                isAuthLoading:false,
                isAuthError:true,
                isAuth:false,
                token:""
            }
        }
        default:{
            return oldState
        }
    }
}

export {authReducer}