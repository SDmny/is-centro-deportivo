import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import SidebarAdmin from "../../components/ui/sidebar/SidebarAdmin.jsx";
import HeaderAdminManageCourses from "../../components/admin/HeaderAdminManageCourses.jsx";

function AdminCourseEditor() {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || {};
  
  const [activeMenu, setActiveMenu] = useState(null);

  const enrolledStudents = [
    { id: 1, name: "Marcus Dunlavey", email: "m.dunlavey@email.com", progress: 85, status: "Activo" },
    { id: 2, name: "Elena Rodriguez", email: "e.rodriguez@email.com", progress: 42, status: "Activo" },
    { id: 3, name: "Sarah Jenkins", email: "s.jenkins@email.com", progress: 100, status: "Completado" },
    { id: 4, name: "Julian Vance", email: "j.vance@email.com", progress: 12, status: "En pausa" },
  ];

  if (!course) return <div className="ml-64 p-20 uppercase font-black">Curso no encontrado</div>;

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <>
      <SidebarAdmin />
      <HeaderAdminManageCourses />
      <div className="ml-64 pt-24 px-12 pb-20 bg-stone-50 min-h-screen" onClick={() => setActiveMenu(null)}>
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-stone-400 hover:text-stone-900 mb-8 transition-colors text-[10px] font-black uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span> Volver a Gestión de Cursos
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 rounded-[40px] border border-stone-200 shadow-xl shadow-stone-200/50">
              <div className="relative mb-6">
                <img src={course.img} alt={course.title} className="w-full h-64 object-cover rounded-[32px]" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest text-[#4c6455] uppercase shadow-sm">
                    {course.category}
                  </span>
                </div>
              </div>
              <h2 className="text-3xl font-black text-stone-900 uppercase tracking-tighter leading-tight mb-6">{course.title}</h2>
              <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-2xl">
                <div className="w-10 h-10 bg-[#4c6455] rounded-full flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm">person</span>
                </div>
                <div>
                  <p className="text-[9px] font-black text-stone-400 uppercase tracking-widest">Instructor Asignado</p>
                  <p className="text-sm font-black text-stone-800 uppercase">{course.instructor}</p>
                </div>
              </div>
            </div>

            {/* Lista de Estudiantes Inscritos */}
            <div className="bg-white rounded-[40px] border border-stone-200 p-8">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm font-black text-stone-900 uppercase tracking-widest">Estudiantes Inscritos</h4>
                <span className="text-[10px] font-bold text-stone-400 uppercase">{course.students} TOTAL</span>
              </div>
              <div className="space-y-4">
                {enrolledStudents.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 hover:bg-stone-50 rounded-2xl transition-colors border border-transparent relative">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 font-bold text-xs">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-black text-stone-900 uppercase">{student.name}</p>
                        <p className="text-[10px] text-stone-400 font-bold">{student.progress}% COMPLETADO</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleMenu(student.id); }}
                        className="text-stone-300 hover:text-stone-900 transition-colors p-1"
                      >
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>

                      {activeMenu === student.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-stone-100 z-50 py-2 animate-in fade-in zoom-in-95 duration-200">
                          <button className="w-full text-left px-4 py-2 text-[10px] font-black text-stone-600 uppercase tracking-widest hover:bg-stone-50 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">visibility</span> Ver Perfil
                          </button>
                          <button className="w-full text-left px-4 py-2 text-[10px] font-black text-stone-600 uppercase tracking-widest hover:bg-stone-50 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">mail</span> Contactar
                          </button>
                          <div className="h-[1px] bg-stone-100 my-1"></div>
                          <button className="w-full text-left px-4 py-2 text-[10px] font-black text-red-500 uppercase tracking-widest hover:bg-red-50 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">person_remove</span> Eliminar del curso
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-4 border-2 border-dashed border-stone-100 rounded-2xl text-[10px] font-black text-stone-400 uppercase tracking-widest hover:bg-stone-50 transition-all">
                Ver todos los alumnos
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-[40px] p-12 border border-stone-200 shadow-sm sticky top-24">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h3 className="text-2xl font-black text-stone-900 uppercase tracking-tighter">Configuración del Curso</h3>
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">Modifica los parámetros globales del programa</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Nombre del Curso</label>
                  <input type="text" defaultValue={course.title} className="w-full bg-stone-50 p-4 rounded-2xl border border-transparent focus:border-[#4c6455]/20 outline-none font-bold text-sm transition-all text-stone-800" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Instructor</label>
                    <input type="text" defaultValue={course.instructor} className="w-full bg-stone-50 p-4 rounded-2xl border border-transparent focus:border-[#4c6455]/20 outline-none font-bold text-sm uppercase transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Etiqueta / Categoría</label>
                    <input type="text" defaultValue={course.category} className="w-full bg-stone-50 p-4 rounded-2xl border border-transparent focus:border-[#4c6455]/20 outline-none font-bold text-sm uppercase transition-all text-[#4c6455]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Intensidad</label>
                    <select className="w-full bg-stone-50 p-4 rounded-2xl border border-transparent outline-none font-bold text-xs uppercase appearance-none cursor-pointer">
                      <option>ALTA</option>
                      <option selected>MEDIA</option>
                      <option>BAJA</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Duración (Mins)</label>
                    <input type="number" defaultValue="45" className="w-full bg-stone-50 p-4 rounded-2xl border border-transparent outline-none font-bold text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Descripción del Programa</label>
                  <textarea rows="4" className="w-full bg-stone-50 p-4 rounded-2xl border border-transparent outline-none font-medium text-xs resize-none leading-relaxed" defaultValue="Optimización de patrones de movimiento para rendimiento máximo a través de técnicas avanzadas de bio-mecánica y control de flujo..." />
                </div>

                <div className="space-y-4 pt-4">
                   <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Horario Semanal</label>
                   <div className="flex justify-between gap-2">
                      {['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'].map((dia) => (
                        <button key={dia} type="button" className={`flex-1 py-3 rounded-xl text-[9px] font-black border transition-all ${['LUN', 'MIE', 'VIE'].includes(dia) ? 'bg-[#4c6455] text-white border-[#4c6455]' : 'bg-white text-stone-400 border-stone-200 hover:border-stone-400'}`}>
                          {dia}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="flex gap-4 pt-8 border-t border-stone-100">
                  <button type="button" onClick={() => navigate(-1)} className="flex-1 bg-stone-100 text-stone-400 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-stone-200 transition-colors">Descartar</button>
                  <button type="submit" className="flex-[2] bg-[#4c6455] text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-900/20 hover:scale-[1.02] transition-all">Guardar Cambios</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCourseEditor;