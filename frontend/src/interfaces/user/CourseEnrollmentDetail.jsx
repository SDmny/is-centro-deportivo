import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarUser from "../../components/ui/sidebar/SidebarUser.jsx";
import HeaderMyCourses from "../../components/ui/header/HeaderMyCourses.jsx";

function CourseEnrollmentDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const course = state || {
    name: "Actividad",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    desc: "No hay descripción disponible.",
    time: "--:--",
    coach: "Instructor",
    date: "--"
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <SidebarUser />
      <HeaderMyCourses />

      <main className="ml-64 pt-24 px-12 pb-20">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-[#4C6455] transition-colors mb-10 group"
        >
          <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Regresar al horario</span>
        </button>

        <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-3/5 p-12">
            <div className="flex gap-2 mb-6">
              <span className="bg-[#E9F0EC] text-[#4C6455] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Inscripción Abierta</span>
            </div>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">{course.name}</h2>
            <p className="text-gray-500 leading-relaxed mb-10 text-lg">{course.desc}</p>

            <div className="grid grid-cols-2 gap-8 border-t border-gray-50 pt-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#4C6455]">person</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-300 uppercase">Instructor</p>
                  <p className="font-bold text-gray-800">{course.coach}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#4C6455]">calendar_today</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-300 uppercase">Sesión Seleccionada</p>
                  <p className="font-bold text-gray-800">Octubre {course.date}, {course.time}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/5 bg-[#4C6455] p-12 flex flex-col justify-center items-center text-center text-white">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] mb-2 opacity-70">Costo Total del Curso</p>
            
            <div className="flex items-start mb-6">
              <span className="text-4xl font-bold mt-6 mr-1 opacity-50">$</span>
              <span className="text-[120px] font-black tracking-tighter leading-none">150</span>
            </div>

            <div className="w-full space-y-4 mb-10">
              <div className="flex items-center gap-3 bg-white/10 px-5 py-4 rounded-2xl text-xs font-bold backdrop-blur-sm border border-white/5">
                <span className="material-symbols-outlined text-emerald-400">check_circle</span>
                Acceso a todas las sesiones del ciclo
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-5 py-4 rounded-2xl text-xs font-bold backdrop-blur-sm border border-white/5">
                <span className="material-symbols-outlined text-emerald-400">check_circle</span>
                Seguimiento de rendimiento incluido
              </div>
            </div>

            <button className="w-full bg-white text-[#4C6455] py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ease-out shadow-xl hover:bg-gray-100 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/30 active:scale-[0.98] mb-4">
              Solicitar Inscripción
            </button>
            
            <p className="text-[10px] font-medium opacity-50">Sujeto a aprobación por administración</p>
          </div>

        </div>
      </main>
    </div>
  );
}

export default CourseEnrollmentDetail;