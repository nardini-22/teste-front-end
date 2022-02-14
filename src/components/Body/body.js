import "./body.css";

import EventsImg from "../../assets/imgs/icone-eventos.png";
import ReportsImg from "../../assets/imgs/icone-relatorios.png";
import UsersImg from "../../assets/imgs/icone-usuarios.png";

export default function Body() {
  const handleMessage = (message) => {
    window.alert(message)
  }
  return (
    <div id="body-container">
      <div id="content-container">
        <header>
          <span id="title">
            Olá <p>Igor Gonçalves,</p> selecione uma das opções abaixo:
          </span>
        </header>
        <div id="buttons-container">
          <button onClick={() => handleMessage("Botão Meus Eventos clicado!")}className="buttons">
            <img className="icons" alt="events" src={EventsImg} />
            <h3 className="buttons-title">Meus Eventos</h3>
          </button>
          <button onClick={() => handleMessage("Botão Usuários clicado!")}className="buttons">
            <img className="icons" alt="users" src={UsersImg} />
            <h3 className="buttons-title">Usuários</h3>
          </button>
          <button onClick={() => handleMessage("Botão Relatórios clicado!")}className="buttons">
            <img className="icons" alt="reports" src={ReportsImg} />
            <h3 className="buttons-title">Relatórios</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
