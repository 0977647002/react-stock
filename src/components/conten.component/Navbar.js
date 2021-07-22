import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyStock, getStock, logout } from "../../store/getAction";

export default function Navbar(props) {
  const authen = useSelector((state) => state.authen);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutButton = () => {
    dispatch(logout());
    dispatch(getStock());
    history.push("/");
  };

  const myStock = (e) => {
    const token = localStorage.getItem("token");
    const { username } = authen.data;
    if (token && username) {
      dispatch(getMyStock(username, token));
    } else {
      alert("Bạn chưa đăng nhập!!");
    }
  };

  return (
    <>
      <div className="navbar gird wide-conten">
        <div className="row">
          <div className="col c-12">
            <div className="navbar-conten gird wide">
              <div className="row">
                <div className="col c-12">
                  <div className="navbar-conten">
                    <Link to="/" className="navbar-conten-icon">
                      ICON
                    </Link>
                    {authen.data.username === "" ? (
                      <Link to="/login" className="navbar-conten-item">
                        Login
                      </Link>
                    ) : (
                      <>
                        <Link
                          to="/"
                          className="navbar-conten-item"
                          onClick={logoutButton}
                        >
                          Logout
                        </Link>
                        <Link to="/user" className="navbar-conten-item">
                          {authen.data.username}
                        </Link>
                      </>
                    )}
                    <Link
                      to="#"
                      className="navbar-conten-item"
                      onClick={myStock}
                    >
                      My Stock
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
