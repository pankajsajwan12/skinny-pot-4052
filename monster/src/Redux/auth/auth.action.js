import * as types from "./auth.types"
import axios from "axios";

// export const Logindata=(payload)=>({type:"USER_LOGIN_SUCCESS",payload})
export const signUp = (payload) => ({ type:types.REGISTER, payload });

