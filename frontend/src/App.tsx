import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/ClientPage/HomePage";
import Records from "./pages/ClientPage/Records/index";
import Charts from "./pages/ClientPage/Charts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="records" element={<Records />} />
          <Route path="charts" element={<Charts />} />

        </Route>

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
