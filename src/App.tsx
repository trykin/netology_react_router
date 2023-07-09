import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Drift } from "./Components/Drift";
import { Timeattack } from "./Components/Timeattack";
import { Forza } from "./Components/Forza";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/drift" element={<Drift />} />
        <Route path="/timeattack" element={<Timeattack />} />
        <Route path="/forza" element={<Forza />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
