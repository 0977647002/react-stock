import { GET_STOCK, GET_STOCK_ERROR, GET_STOCK_SUCCESS } from "../getAction";

const initilState = {
  loading: false,
  success: false,
  error: false,
  data: {
    data: [],
    title: "",
  },
};

const stockReducer = (state = initilState, action) => {
  switch (action.type) {
    case GET_STOCK:
      return {
        loading: true,
        success: false,
        error: false,
        data: {
          data: [],
          title: "",
        },
      };
    case GET_STOCK_SUCCESS:
      return {
        loading: false,
        success: false,
        error: false,
        data: {
          data: action.payload.data,
          title: action.payload.title,
        },
      };
    case GET_STOCK_ERROR:
      return {
        loading: false,
        success: false,
        error: true,
        data: {
          data: [],
          title: "",
        },
      };
    default:
      return state;
  }
};

export default stockReducer;
