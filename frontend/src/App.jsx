import { Routes, Route } from "react-router-dom";

/* interfaces */
import Home from "./interfaces/Home.jsx";
import CourseDetails from "./interfaces/courses/CourseDetails.jsx";

function App() {
  return (
    <>
      <Routes>
        /* aqui van rutas */
        <Route path="/" element={<Home />} />
        <Route path="/curso-detalle" element={<CourseDetails />} />
      </Routes>
    </>
  );
}

export default App;
