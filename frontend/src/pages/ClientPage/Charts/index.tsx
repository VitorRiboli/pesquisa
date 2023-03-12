import "./styles.css";

import Filters from "../../../components/Filters";

import * as chartOptions from "./chart-options";

import Chart from "react-apexcharts";


const chartData = [
  {
    x: "vitor",
    y: 10
  },
  {
    x: "nadila",
    y: 15
  },
]
  
export default function Charts() {
  return (
    <div className="page-container">
      <Filters link={"/records"} linkText={"VER TABELA"} />
      <div className="chart-container">
        <div className="top-related">
          <h1 className="top-related-title">Jogos mais votados</h1>
          <div className="games-container">
            <Chart
              options={chartOptions.barOptions}
              type="bar"
              width={"900"}
              height={"120"}
              series={[{ data: chartData}]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
