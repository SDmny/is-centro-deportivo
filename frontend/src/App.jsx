import { Routes, Route } from "react-router-dom";

/* interfaces */
import CourseDetails from "./interfaces/courses/CourseDetails.jsx";
import UserDashboard from "./interfaces/user/UserDashboard.jsx";
import AdminManageCourses from "./interfaces/admin/AdminManageCourses.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* aqui van rutas */}
        <Route path="/" element={<UserDashboard />} />
        <Route path="/curso-detalle" element={<CourseDetails />} />

        {/* como nota: la ruta / probablemente debería ser diferenciada según la sesión */}
        <Route path="/admin" element={<AdminManageCourses />} />
      </Routes>
    </>
  );
}

export default App;
