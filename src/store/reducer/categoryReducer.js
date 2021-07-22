import {
  GET_CATEGORY,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_SUCCESS,
} from "../getAction";

const initilState = {
  loading: false,
  success: false,
  error: false,
  data: [],
};

const categoryReducer = (state = initilState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        loading: true,
        success: false,
        error: false,
        data: [],
      };
    case GET_CATEGORY_SUCCESS:
      return {
        loading: false,
        success: false,
        error: false,
        data: action.payload.data,
      };
    case GET_CATEGORY_ERROR:
      return {
        loading: false,
        success: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default categoryReducer;
