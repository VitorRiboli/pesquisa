import "./styles.css";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/imgs/logo.svg";
//import logo  from "../../assets/imgs/logo.svg"; O jeito acima trata a imagem como um component

export default function Header() {
  return (
    <>
      <header className="main-header">
        <Logo />
        <Link to={"/"}>
          <div className="logo-text">
            <span className="logo-text-1">Survey </span>
            <span className="logo-text-2">Gaming</span>
          </div>
        </Link>
      </header>
      
      <Outlet />
    </>
  );
}
