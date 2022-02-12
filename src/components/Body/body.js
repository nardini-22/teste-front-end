import "./body.css";

import EventsImg from "../../assets/imgs/icone-eventos.png";
import ReportsImg from "../../assets/imgs/icone-relatorios.png";
import UsersImg from "../../assets/imgs/icone-usuarios.png";

export default function Body() {
  return (
    <div id="body-container">
      <div id="content-container">
        <header>
          <span id="title">
            Olá <p>Igor Gonçalves</p>, selecione uma das opções abaixo:
          </span>
        </header>
        <div id="buttons-container">
          <div className="buttons">
            <img alt="events" src={EventsImg} />
            <h3 className="buttons-title">Meus Eventos</h3>
          </div>
          <div className="buttons">
            <img alt="users" src={UsersImg} />
            <h3 className="buttons-title">Usuários</h3>
          </div>
          <div className="buttons">
            <img alt="reports" src={ReportsImg} />
            <h3 className="buttons-title">Relatórios</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
