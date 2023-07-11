import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Drift } from "./Components/Drift";
import { Timeattack } from "./Components/Timeattack";
import { Forza } from "./Components/Forza";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/GRUD/Home";
import { ChangeNote } from "./Components/GRUD/ChangeNote";
import { DeleteNote } from "./Components/GRUD/DeleteNote";
import { AddNote } from "./Components/GRUD/AddNote";

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
        <Route path="/add" element={<AddNote/>} />
        <Route path="/change/:id" element={<ChangeNote/>} />
        <Route path="/delete/:id" element={<DeleteNote/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
