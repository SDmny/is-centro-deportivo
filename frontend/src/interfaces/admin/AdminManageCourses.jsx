import React from 'react';
import { useNavigate } from "react-router-dom";
import SidebarAdmin from "../../components/ui/sidebar/SidebarAdmin.jsx";
import HeaderAdminManageCourses from "../../components/admin/HeaderAdminManageCourses.jsx";

function AdminManageCourses() {
  const navigate = useNavigate();
  
  const courses = [
    { title: "Dominio de la Respiración Kinética", instructor: "Dr. Elias Vance", students: 428, category: "RESPIRACIÓN", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400" },
    { title: "Regeneración de Tejido Profundo", instructor: "Sarah Chen", students: 215, category: "RECUPERACIÓN", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
    { title: "Biomecánica de Alta Velocidad", instructor: "Marcus Thorne", students: 892, category: "ATLÉTICO", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" },
    { title: "Estrategia de Carga Cognitiva", instructor: "Dr. Julian Grey", students: 112, category: "MENTALIDAD", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=400" },
    { title: "Fundamentos Aeróbicos Zona 2", instructor: "Lena Park", students: 540, category: "RESISTENCIA", img: "https://images.unsplash.com/photo-1441742917377-57f78ee0e582?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <>
      <SidebarAdmin />
      <HeaderAdminManageCourses />
      <div className="ml-64 pt-24 px-12 pb-20 bg-stone-50 min-h-screen transition-colors">
        {/* Título y Acción Principal */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-stone-900 tracking-tighter uppercase">Gestión de Cursos</h2>
            <p className="text-stone-500 text-sm font-medium mt-2 leading-relaxed">
              Organiza y optimiza el plan de estudios de alto rendimiento. Cada sesión es un paso hacia una nueva cima.
            </p>
          </div>
          <button 
            onClick={() => navigate('/admin/crear-curso')}
            className="flex items-center gap-2 bg-[#4c6455] hover:bg-[#3d5044] text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-emerald-900/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">add</span> Agregar Nuevo Curso
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-[32px] border border-stone-200 shadow-sm">
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2">Cursos Activos</p>
            <p className="text-4xl font-black text-stone-900">24</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-stone-200 shadow-sm">
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2">Estudiantes Totales</p>
            <p className="text-4xl font-black text-stone-900">1,482</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-stone-200 shadow-sm">
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2">Progreso Promedio</p>
            <p className="text-4xl font-black text-stone-900">68%</p>
          </div>
        </div>

        {/* Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div 
              key={idx} 
              onClick={() => navigate('/admin/editar-curso', { state: { course } })}
              className="bg-white rounded-[32px] border border-stone-200 overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[9px] font-black tracking-widest text-stone-600 uppercase border border-stone-200/50">
                    {course.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-stone-900 mb-4 line-clamp-1 uppercase">{course.title}</h3>
                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-stone-500">
                    <span className="material-symbols-outlined text-sm">person</span>
                    <span className="text-[11px] font-bold uppercase tracking-tight">Instructor: {course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-500">
                    <span className="material-symbols-outlined text-sm">group</span>
                    <span className="text-[11px] font-bold uppercase tracking-tight">{course.students} Estudiantes</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-stone-100 pt-6">
                  <div className="flex gap-4">
                    <button className="text-[11px] font-black text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-widest">Detalles</button>
                    <button className="text-[11px] font-black text-stone-400 hover:text-[#4c6455] transition-colors uppercase tracking-widest">Gestionar</button>
                  </div>
                  <button className="text-stone-300 hover:text-red-500 transition-colors" onClick={(e) => { e.stopPropagation(); /* lógica borrar */ }}>
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Botón Crear Nuevo */}
          <div 
            onClick={() => navigate('/admin/crear-curso')}
            className="border-2 border-dashed border-stone-200 rounded-[32px] flex flex-col items-center justify-center p-12 hover:bg-stone-100 transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 group-hover:scale-110 transition-transform mb-4">
              <span className="material-symbols-outlined">add</span>
            </div>
            <p className="text-[11px] font-black text-stone-400 uppercase tracking-widest">Crear Nuevo Currículo</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-stone-400 text-[10px] font-bold mt-20 uppercase tracking-[0.3em]">
          © 2026 Kinetic Sanctuary • Sistema de Gestión de Rendimiento Elite
        </p>
      </div>
    </>
  );
}

export default AdminManageCourses;