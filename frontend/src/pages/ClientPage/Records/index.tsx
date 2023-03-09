import "./styles.css";

import axios from "axios";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { RecordsResonse } from "./types";
import LineTable from "../../../components/LineTable";

const BASE_URL = "http://localhost:8080";

export default function Records() {
  const [records, setRecords] = useState<RecordsResonse>();

  console.log(records);

  useEffect(() => {
    axios.get(`${BASE_URL}/records?linesPerPage=12`).then((res) => {
      setRecords(res.data);
    });
  }, []);

  return (
    <>
      <main className="page-container">
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
      </main>

      <Outlet />
    </>
  );
}
