import logo from "./logo.svg";
import "./App.css";
import Cv from "./pages/Cv";
import Infos from "./components/Infos";
import { CandidatContexteProvider } from "./store/CandidatsContexte";
import AddCv from "./pages/AddCv";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="cv" element={<Cv></Cv>}></Route>
        <Route path="cv/add" element={<AddCv></AddCv>}></Route>
        <Route path="cv/:id" element={<Infos></Infos>}></Route>
        <Route path="not-found" element={<NotFound></NotFound>}></Route>
        <Route
          path="*"
          element={<Navigate to="/not-found" replace></Navigate>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
