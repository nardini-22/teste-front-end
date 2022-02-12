import Logo from "../../assets/imgs/logo.png";
import UserImg from "../../assets/imgs/user.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div id="sub-div" />
      <nav id="navbar">
        <div id="navbar-content">
          <img alt="logo" src={Logo} />
          <ul id="options">
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
