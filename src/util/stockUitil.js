import axios from "axios";
import { URL_SERVER } from "../config/constant";

export const addStock = async (username, nameStock, token) => {
  try {
    await axios.post(
      `${URL_SERVER}/api/user/stock/add`,
      { username, nameStock },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    alert("Thêm thành cônng!");
  } catch (error) {
    alert("Thêm thất bại!");
  }
};

export const deleteStock = async (username, nameStock, token) => {
  try {
    await axios.post(
      `${URL_SERVER}/api/user/stock/delete`,
      { username, nameStock },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    alert("Xoá thành cônng!");
  } catch (error) {
    alert("Xoá thất bại!");
  }
};

export const updateStock = async (
  username,
  nameStock,
  newDescription,
  token
) => {
  try {
    await axios.post(
      `${URL_SERVER}/api/user/stock/update`,
      { username, nameStock, newDescription },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    alert("Update thành công!");
  } catch (error) {
    alert("Update thất bại!");
  }
};
