import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_LOGIN,
  GET_USER_LOGOUT,
} from "../getAction";

const initilState = {
  loading: false,
  success: false,
  error: false,
  data: { username: "", token: "" },
};

const userReducer = (state = initilState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        loading: true,
        success: false,
        error: false,
        data: {
          username: "",
          token: "",
        },
      };
    case GET_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        error: false,
        data: {
          username: action.payload.data.data.decode.username,
          token: action.payload.data.data.token,
        },
      };
    case GET_USER_ERROR:
      return {
        loading: false,
        success: false,
        error: true,
        data: {
          username: "",
          token: "",
        },
      };
    case GET_USER_LOGIN:
      return {
        loading: false,
        success: true,
        error: false,
        data: {
          username: action.payload.data.username,
          token: action.payload.data.token,
        },
      };
    case GET_USER_LOGOUT:
      return {
        loading: false,
        success: false,
        error: false,
        data: {
          username: "",
          token: "",
        },
      };
    default:
      return state;
  }
};

export default userReducer;
