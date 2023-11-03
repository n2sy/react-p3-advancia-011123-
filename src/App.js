import logo from "./logo.svg";
import "./App.css";
import Cv from "./pages/Cv";
import { CandidatContexteProvider } from "./store/CandidatsContexte";

function App() {
  return (
    <div className="container">
      <Cv></Cv>
    </div>
  );
}

export default App;
