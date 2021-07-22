import Navbar from "./Navbar";
import Menu from "./Menu";
import Conten from "./Conten";
import "./templet/gird-system.css";
import "./templet/index.css";

export default function Root(props) {
  return (
    <>
      <Navbar />
      <Menu />
      <Conten />
    </>
  );
}
