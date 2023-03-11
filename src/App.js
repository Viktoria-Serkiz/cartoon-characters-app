import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import HomePage from "./pages/Home";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
