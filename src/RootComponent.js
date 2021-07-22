import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Root from "./components/conten.component/Root";
import FormLogin from "./components/login.component/FormLogin";
import Registration from "./components/login.component/Registration";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/getAction";
import { useEffect } from "react";

function RootComponent(props) {
  const authen = useSelector((state) => state.authen);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUser(token));
    }
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/login"
            render={() =>
              authen.data.username === "" ? <FormLogin /> : <Redirect to="/" />
            }
          />

          <Route
            path="/registration"
            render={() =>
              authen.data.username === "" ? (
                <Registration />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/my-stock" component={Root} />
          <Route path="/" component={Root} />
        </Switch>
      </Router>
    </>
  );
}

export default RootComponent;
