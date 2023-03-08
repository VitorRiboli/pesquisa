import "./styles.css";

import { ReactComponent as Arrow } from "../../../assets/imgs/arrow.svg";
import { ReactComponent as GamerImg } from "../../../assets/imgs/gamer.svg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="home-container">
      <div className="home-text">
        <h1 className="home-text-title">Quais jogos a galera gosta mais?</h1>
        <h3 className="home-text-subtitle">
          Clique no botão abaixo e saiba quais são os jogos que os gamers estão
          escolhendo!
        </h3>
        <Link to={"/records"}>
          <div className="home-actions">
            <button className="home-btn">QUERO SABER QUAIS SÃO!</button>
            <div className="home-btn-icon">
              <Arrow />
            </div>
          </div>
        </Link>
      </div>

      <GamerImg className="home-image" />
    </main>
  );
}
