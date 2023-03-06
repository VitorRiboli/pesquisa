import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/ClientPage/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
