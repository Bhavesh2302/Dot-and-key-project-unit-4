import { LOGIN, LOGOUT, SIGN_UP } from "./authActionType";

const intitalState = {
  isAuth: false,
  FIRST_NAME:"",
  LAST_NAME:"",
  email:"",
  password:""
};
export const authreducer = (state = intitalState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        isAuth: true,
        email:payload.email,
        password:payload.password,
      };
    }
    case LOGOUT: {
      return { ...state, 
        isAuth: false,
         FIRST_NAME:"",
         LAST_NAME:"",
         email:"",
         password:""};
    }
    case SIGN_UP: {
      return {
        ...state,
        FIRST_NAME:payload.FIRST_NAME,
        LAST_NAME:payload.LAST_NAME,
        email:payload.email,
        password:payload.password
      };
    }
    default: {
      return state;
    }
  }
};
