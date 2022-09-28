import * as types from "./auth.types";
const intitalState = {
  isAuth: false,
  username: "",
  email: "",
  password: "",
};
export const authReducer = (state = intitalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN: {
      return {
        ...state,
        isAuth: true,
        email: payload.email,
        password: payload.password,
      };
    }
    case types.LOGOUT: {
      return {
        ...state,
        isAuth: false,
        username: "",
        email: "",
        password: "",
      };
    }
    case types.REGISTER: {
      return {
        ...state,
        username: payload.Username,
        email: payload.email,
        password: payload.password,
      };
    }
    default: {
      return state;
    }
  }
};
