import "./styles.css";

import { Outlet } from "react-router-dom";

export default function Records() {
  return (
    <>
      <main className="page-container">
        <table className="records-table" cellPadding={"0"} cellSpacing={"0"} >
          <thead>
            <tr>
              <th>INSTANTE</th>
              <th>Nome</th>
              <th>Idade</th>
              <th>Plataforma</th>
              <th>Gênero</th>
              <th>Título do game</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20/08/2020 13:45</td>
              <td>João da Silva</td>
              <td>23</td>
              <td>Playstation</td>
              <td>Ação - Aventura</td>
              <td>The Last of Us 2</td>
            </tr>

            <tr>
              <td>20/08/2020 13:45</td>
              <td>João da Silva</td>
              <td>23</td>
              <td>Playstation</td>
              <td>Ação - Aventura</td>
              <td>The Last of Us 2</td>
            </tr>

            <tr>
              <td>20/08/2020 13:45</td>
              <td>João da Silva</td>
              <td>23</td>
              <td>Playstation</td>
              <td>Ação - Aventura</td>
              <td>The Last of Us 2</td>
            </tr>

          </tbody>
        </table>
      </main>

      <Outlet />
    </>
  );
}
