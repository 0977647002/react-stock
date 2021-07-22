import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getStockByCategory } from "../../store/getAction";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Menu(props) {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const [active, setActive] = useState("");

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const click = (e) => {
    dispatch(getStockByCategory(e.target.innerText));
    setActive(e.target.innerText);
  };

  return (
    <>
      <div className="menu">
        <Search />
        {category.data.map((e) => (
          <Link
            to="/"
            className={`menu-item ${active === e.name ? "active" : ""}`}
            key={e.id}
            onClick={click}
          >
            {e.name}
          </Link>
        ))}
      </div>
    </>
  );
}
