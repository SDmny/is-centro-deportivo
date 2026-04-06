import { Routes, Route } from "react-router-dom";

/* interfaces */
import CourseDetails from "./interfaces/courses/CourseDetails.jsx";
import UserDashboard from "./interfaces/user/UserDashboard.jsx";
import AdminManageCourses from "./interfaces/admin/AdminManageCourses.jsx";
import AdminCourseEditor from "./interfaces/admin/AdminCourseEditor.jsx";
import AdminCreateCourse from "./interfaces/admin/AdminCreateCourse.jsx"; // Importar el nuevo componente
import AdminSchedule from "./interfaces/admin/AdminSchedule.jsx";
import AdminPayments from "./interfaces/admin/AdminPayments.jsx";
import Schedule from "./interfaces/user/Schedule.jsx";
import Dashboard from "./interfaces/user/Dashboard.jsx";
import ExploreCourses from "./interfaces/user/ExploreCourses.jsx";
import ActivitySchedule from "./interfaces/user/ActivitySchedule.jsx";
import CourseEnrollmentDetail from "./interfaces/user/CourseEnrollmentDetail.jsx";
import AdminManageUsers from "./interfaces/admin/AdminManageUsers.jsx";
import AdminCreateUser from "./interfaces/admin/AdminCreateUser.jsx"; // Importar componente de crear usuario
import Login from "./interfaces/auth/Login.jsx";
import ProfileEditor from "./interfaces/user/ProfileEditor.jsx"; 
import PaymentHistory from "./interfaces/user/PaymentHistory.jsx"; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas de usuario */}
        <Route path="/user_dashboard" element={<UserDashboard />} />
        <Route path="/curso-detalle" element={<CourseDetails />} />
        <Route path="/perfil" element={<ProfileEditor isAdmin={false} />} />
        <Route path="/pagos" element={<PaymentHistory />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/explore" element={<ExploreCourses />} />
        <Route
          path="/explore/schedule/:activityName"
          element={<ActivitySchedule />}
        />
        <Route 
          path="/solicitar-inscripcion/:activityName" 
          element={<CourseEnrollmentDetail />} 
        />

        {/* Rutas de administrador */}
        <Route path="/admin_cursos" element={<AdminManageCourses />} />
        <Route path="/admin/editar-curso" element={<AdminCourseEditor />} />
        <Route path="/admin/crear-curso" element={<AdminCreateCourse />} /> {/* Nueva ruta agregada */}
        <Route path="/admin_usuarios" element={<AdminManageUsers />} />
        <Route path="/admin/crear-usuario" element={<AdminCreateUser />} />
        <Route path="/admin_horarios" element={<AdminSchedule />} />
        <Route path="/admin_pagos" element={<AdminPayments />} />
        <Route path="/admin/perfil" element={<ProfileEditor isAdmin={true} />} />
      </Routes>
    </>
  );
}

export default App;