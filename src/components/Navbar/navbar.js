import { useState } from "react";
import { MenuIcon } from "../../assets/icons";
import Logo from "../../assets/imgs/logo.png";
import LogoMobile from "../../assets/imgs/logo_1.png";
import UserImg from "../../assets/imgs/user.png";
import "./navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  const handleShowMenu = () => setShowMenu(!showMenu);
  return (
    <>
      <div id="sub-div" />
      <nav id="navbar">
        <div id="navbar-content">
          <img id="logo" alt="logo" src={Logo} />
          <img id="logo-mobile" alt="logo" src={LogoMobile} />
          <button onClick={() => handleShowMenu()} id="menu-icon">
            <MenuIcon />
          </button>
          <ul style={{ display: showMenu ? "flex" : "none" }} id="options">
            <li className="list-items" id="home-option">
              Home
            </li>
            <li className="list-items">Eventos</li>
            <li className="list-items">Usuários</li>
            <li className="list-items">Relatórios</li>
          </ul>
          <div id="user-tab">
            <img alt="user-img" id="user-img" src={UserImg} />
            <div id="user-option">
              <p>Igor Gonçalves</p>
              <a href="#">Desconectar</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
