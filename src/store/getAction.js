import axios from "axios";

import { URL_SERVER } from "../config/constant";

export const GET_CATEGORY = "GET_CATEGORY";
export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS";
export const GET_CATEGORY_ERROR = "GET_CATEGORY_ERROR";

export const GET_STOCK = "GET_STOCK";
export const GET_STOCK_SUCCESS = "GET_STOCK_SUCCESS";
export const GET_STOCK_ERROR = "GET_STOCK_ERROR";

export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_LOGIN = "GET_USER_LOGIN";
export const GET_USER_LOGOUT = "GET_USER_LOGOUT";

export const getUser = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_USER,
      });

      const res = await axios.post(
        `${URL_SERVER}/api/verify-token`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      dispatch({
        type: GET_USER_SUCCESS,
        payload: { data: res.data },
      });
    } catch (error) {
      dispatch({
        type: GET_USER_ERROR,
      });
    }
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL_SERVER}/api/login`, {
        username,
        password,
      });
      dispatch({ type: GET_USER_LOGIN, payload: res.data });
      localStorage.setItem("token", res.data.data.token);
    } catch (error) {}
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: GET_USER_LOGOUT });
    localStorage.removeItem("token");
  };
};

export const getStock = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_STOCK,
      });
      const res = await axios.get(`${URL_SERVER}/api/stock`);

      dispatch({
        type: GET_STOCK_SUCCESS,
        payload: { data: res.data },
      });
    } catch (error) {
      dispatch({
        type: GET_STOCK_ERROR,
      });
    }
  };
};

export const getStockByName = (name) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_STOCK,
      });
      const res = await axios.get(`${URL_SERVER}/api/stock/${name}`);

      dispatch({
        type: GET_STOCK_SUCCESS,
        payload: { data: res.data, title: `Tìm kiếm với: ${name}` },
      });
    } catch (error) {
      dispatch({
        type: GET_STOCK_ERROR,
      });
    }
  };
};

export const getMyStock = (username, token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_STOCK,
      });

      const res = await axios.get(`${URL_SERVER}/api/user/stock/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`, //the token is a variable which holds the token
        },
      });

      dispatch({
        type: GET_STOCK_SUCCESS,
        payload: { data: res.data, title: `Danh sách theo dõi!!` },
      });
    } catch (error) {
      dispatch({
        type: GET_STOCK_ERROR,
      });
    }
  };
};

export const getStockByCategory = (categoryName) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_STOCK,
      });
      const res = await axios.get(
        `${URL_SERVER}/api/stock/category/${categoryName}`
      );

      dispatch({
        type: GET_STOCK_SUCCESS,
        payload: { data: res.data, title: categoryName },
      });
    } catch (error) {
      dispatch({
        type: GET_STOCK_ERROR,
      });
    }
  };
};

export const getCategory = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_CATEGORY,
      });
      const res = await axios.get(`${URL_SERVER}/api/category`);
      dispatch({
        type: GET_CATEGORY_SUCCESS,
        payload: { data: res.data },
      });
    } catch (error) {
      dispatch({
        type: GET_CATEGORY_ERROR,
      });
    }
  };
};
