import React from "react";
import { useDispatch } from "react-redux";
import { getStockByName } from "../../store/getAction";

function Search(props) {
  const dispatch = useDispatch();
  const search = (e) => {
    dispatch(getStockByName(e.target.value));
  };
  return (
    <>
      <input type="search" onChange={search} className="search" />
    </>
  );
}

export default Search;
