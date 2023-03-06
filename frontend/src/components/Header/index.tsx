import "./styles.css";
import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/imgs/logo.svg";
//import logo  from "../../assets/imgs/logo.svg"; O jeito acima trata a imagem como um component

export default function Header() {
  return (
    <header className="main-header">
      <Logo />
      <div className="logo-text">
        <span className="logo-text-1">Survey </span>
        <span className="logo-text-2">Gaming</span>
      </div>

      <Outlet />
    </header>
  )
}