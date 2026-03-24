import { Routes, Route } from "react-router-dom";

/* interfaces */
import CourseDetails from "./interfaces/courses/CourseDetails.jsx";
import UserDashboard from "./interfaces/user/UserDashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        /* aqui van rutas */
        <Route path="/" element={<UserDashboard />} />
        <Route path="/curso-detalle" element={<CourseDetails />} />
      </Routes>
    </>
  );
}

export default App;
