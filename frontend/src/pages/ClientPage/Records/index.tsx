import "./styles.css";

import axios from "axios";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { RecordsResonse } from "./types";
import LineTable from "../../../components/LineTable";
import Pagination from "./Pagination";
import Filters from "../../../components/Filters";

const BASE_URL = "http://localhost:8080";

export default function Records() {

  const [records, setRecords] = useState<RecordsResonse>();

  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/records?linesPerPage=${12}&page=${activePage}`)
      .then((res) => {
        setRecords(res.data);
    });
  }, [activePage]);

  function handlePage(index : number) {
    setActivePage(index);
  }

  return (
    <>
      <main className="page-container">

        <Filters link={"/charts"} linkText={"VER GRÁFICO"} />

        <table className="records-table" cellPadding={"0"} cellSpacing={"0"}>
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
            {records?.content.map((record) => (
              <LineTable key={record.id} id={record.id} name={record.name} 
              moment={record.moment} age={record.age} platform={record.platform} 
              genreName={record.genreName} gameTitle={record.gameTitle}  />
            ))}
          </tbody>
        </table>

                
        <Pagination 
          totalPages={records?.totalPages} 
          goToPage={handlePage} 
          activePage={activePage} 
        />

      </main>s

      <Outlet />
    </>
  );
}
