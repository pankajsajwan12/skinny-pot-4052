import * as types from "./auth.types";

const initialState = {
  isAuth: false,
  token: "",
  userData: null,
};

const authReducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  ////(action);
  switch (type) {
    case types.USER_LOGIN_REQUEST: {
      return {
        ...oldState,
      };
    }
    case types.USER_LOGIN_SUCCESS: {
      // //(payload);
      return {
        ...oldState,
        token: payload.accessToken,
        isAuth: true,
        userData: payload.user,
      };
    }
    case types.USER_LOGIN_FAILURE: {
      return {
        ...oldState,
        userData: null,
        isAuth: false,
        token: "",
      };
    }
    default: {
      return oldState;
    }
  }
};

export { authReducer };
