import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SidebarAdmin from "../../components/ui/sidebar/SidebarAdmin.jsx";

function AdminCreateCourse() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    instructor: '',
    category: 'Biomecánica',
    description: '',
    maxStudents: '',
    imageFile: null // Cambiado de URL a archivo para base de datos
  });

  const handleImageChange = (e) => {
    setFormData({ ...formData, imageFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se prepararía el envío de datos a la base de datos (imagen como FormData)
    const dataToSend = new FormData();
    dataToSend.append('title', formData.title);
    dataToSend.append('instructor', formData.instructor);
    dataToSend.append('category', formData.category);
    dataToSend.append('description', formData.description);
    dataToSend.append('maxStudents', formData.maxStudents);
    dataToSend.append('image', formData.imageFile);

    console.log("Enviando a base de datos:", formData);
    navigate('/admin_cursos');
  };

  return (
    <>
      <SidebarAdmin />
      <div className="ml-64 bg-stone-100 min-h-screen flex flex-col items-center justify-center p-12">
        
        <div className="w-full max-w-4xl">
          <header className="mb-10 flex justify-between items-end px-4">
            <div>
              <p className="text-[#4c6455] text-[10px] font-black uppercase tracking-[0.3em] mb-2">Administración de Sistema</p>
              <h2 className="text-5xl font-black text-stone-900 tracking-tighter leading-none uppercase">Crear curso</h2>
            </div>
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-stone-400 hover:text-[#4c6455] transition-colors font-black text-[10px] uppercase tracking-widest cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span> Cerrar
            </button>
          </header>

          <form onSubmit={handleSubmit} className="bg-white border-t-8 border-[#4c6455] rounded-[48px] p-16 shadow-2xl shadow-stone-200">
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              
              {/* Título del Curso */}
              <div className="col-span-2">
                <label className="text-[11px] font-black text-[#4c6455] uppercase tracking-widest block mb-3">Nombre del programa</label>
                <input 
                  required
                  type="text" 
                  placeholder="Ej. Optimización de Cadena Posterior"
                  className="w-full bg-stone-50 border-b-2 border-stone-100 rounded-xl px-6 py-4 text-stone-800 font-bold focus:border-[#4c6455] focus:outline-none transition-all placeholder:text-stone-300"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              {/* Instructor */}
              <div>
                <label className="text-[11px] font-black text-[#4c6455] uppercase tracking-widest block mb-3">Instructor encargado</label>
                <input 
                  required
                  type="text" 
                  placeholder="Nombre del coach"
                  className="w-full bg-stone-50 border-b-2 border-stone-100 rounded-xl px-6 py-4 text-stone-800 font-bold focus:border-[#4c6455] focus:outline-none transition-all placeholder:text-stone-300"
                  value={formData.instructor}
                  onChange={(e) => setFormData({...formData, instructor: e.target.value})}
                />
              </div>

              {/* Cupo Máximo */}
              <div>
                <label className="text-[11px] font-black text-[#4c6455] uppercase tracking-widest block mb-3">Límite de alumnos</label>
                <input 
                  required
                  type="number" 
                  placeholder="00"
                  className="w-full bg-stone-50 border-b-2 border-stone-100 rounded-xl px-6 py-4 text-stone-800 font-bold focus:border-[#4c6455] focus:outline-none transition-all placeholder:text-stone-300"
                  value={formData.maxStudents}
                  onChange={(e) => setFormData({...formData, maxStudents: e.target.value})}
                />
              </div>

              {/* Categoría */}
              <div className="relative">
                <label className="text-[11px] font-black text-[#4c6455] uppercase tracking-widest block mb-3">Disciplina</label>
                <select 
                  className="w-full bg-stone-50 border-b-2 border-stone-100 rounded-xl px-6 py-4 text-stone-800 font-bold focus:border-[#4c6455] focus:outline-none transition-all appearance-none cursor-pointer"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="Biomecánica">Biomecánica</option>
                  <option value="Respiración">Respiración</option>
                  <option value="Recuperación">Recuperación</option>
                  <option value="Atlético">Atlético</option>
                  <option value="Mentalidad">Mentalidad</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 bottom-4 text-[#4c6455] pointer-events-none">unfold_more</span>
              </div>

              {/* Subir Imagen */}
              <div>
                <label className="text-[11px] font-black text-[#4c6455] uppercase tracking-widest block mb-3">Imagen de portada</label>
                <div className="relative">
                  <input 
                    required
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="w-full bg-stone-50 border-2 border-dashed border-stone-200 rounded-xl px-6 py-4 flex items-center gap-3 text-stone-400 group-hover:border-[#4c6455] transition-all">
                    <span className="material-symbols-outlined">image</span>
                    <span className="text-xs font-bold truncate">
                      {formData.imageFile ? formData.imageFile.name : "Subir archivo..."}
                    </span>
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div className="col-span-2">
                <label className="text-[11px] font-black text-[#4c6455] uppercase tracking-widest block mb-3">Resumen del programa</label>
                <textarea 
                  required
                  rows="4"
                  placeholder="Detalla los beneficios y requisitos del curso..."
                  className="w-full bg-stone-50 border-b-2 border-stone-100 rounded-[24px] px-8 py-6 text-stone-800 font-medium focus:border-[#4c6455] focus:outline-none transition-all resize-none placeholder:text-stone-300"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>
            </div>

            <div className="mt-16">
              <button 
                type="submit"
                className="w-full bg-[#4c6455] hover:bg-stone-900 text-white py-6 rounded-2xl text-[13px] font-black uppercase tracking-[0.4em] transition-all shadow-xl shadow-emerald-900/10 cursor-pointer active:scale-95"
              >
                Publicar currículo maestro
              </button>
            </div>
          </form>

          <p className="text-center text-stone-400 text-[10px] font-black mt-12 uppercase tracking-[0.5em] opacity-50">
            Protocolo de Rendimiento • Kinetic Sanctuary
          </p>
        </div>
      </div>
    </>
  );
}

export default AdminCreateCourse;