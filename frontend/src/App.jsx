import { Routes, Route } from "react-router-dom";

/* interfaces */
import CourseDetails from "./interfaces/courses/CourseDetails.jsx";
import UserDashboard from "./interfaces/user/UserDashboard.jsx";
import AdminManageCourses from "./interfaces/admin/AdminManageCourses.jsx";
import AdminManageUsers from "./interfaces/admin/AdminManageUsers.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* aqui van rutas */}

        {/* como nota: la ruta / probablemente debería ser diferenciada según la sesión */}
        <Route path="/" element={<UserDashboard />} />
        <Route path="/curso-detalle" element={<CourseDetails />} />

        {/* rutas de administrador */}
        <Route path="/admin_cursos" element={<AdminManageCourses />} />
        <Route path="/admin_usuarios" element={<AdminManageUsers />} />
      </Routes>
    </>
  );
}

export default App;
