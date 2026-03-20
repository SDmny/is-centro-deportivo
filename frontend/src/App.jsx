import { Routes, Route } from "react-router-dom";
import EstructuraBase from "./components/EstructuraBase";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EstructuraBase />} />
      </Routes>
    </>
  );
}

export default App;
