import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SidebarAdmin from "../../components/ui/sidebar/SidebarAdmin.jsx";

function AdminCreateCourse() {
  const navigate = useNavigate();
  
  const initialState = {
    title: '',
    instructor: '',
    category: 'Respiración',
    intensity: 'Intermedio',
    duration: '',
    description: '',
    schedule: '',
    imageFile: null
  };

  const [formData, setFormData] = useState(initialState);

  const handleImageChange = (e) => {
    setFormData({ ...formData, imageFile: e.target.files[0] });
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Publicando curso:", formData);
    navigate('/admin_cursos');
  };

  return (
    <>
      <SidebarAdmin />
      <div className="ml-64 bg-stone-100 min-h-screen flex flex-col items-center p-12 font-sans">
        
        <div className="w-full max-w-5xl">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-stone-400 hover:text-[#4c6455] transition-colors mb-8 group cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Volver al currículo</span>
          </button>

          <header className="mb-10 px-4">
            <p className="text-[#4c6455] text-[10px] font-black uppercase tracking-[0.4em] mb-2">Configuración del Programa</p>
            <h2 className="text-5xl font-black text-stone-900 tracking-tighter leading-none uppercase">Crear Nuevo Curso</h2>
          </header>

          <form onSubmit={handleSubmit} className="bg-white border-t-8 border-[#4c6455] rounded-[48px] p-16 shadow-2xl shadow-stone-200">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              <div className="lg:col-span-4 space-y-10 border-r border-stone-100 pr-12">
                
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Imagen de Portada</label>
                  <div className="relative group">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="aspect-square bg-stone-50 border-2 border-dashed border-stone-200 rounded-[32px] flex flex-col items-center justify-center p-6 text-center group-hover:border-[#4c6455] transition-all overflow-hidden">
                      {formData.imageFile ? (
                        <div className="flex flex-col items-center">
                          <span className="material-symbols-outlined text-[#4c6455] text-3xl mb-2">check_circle</span>
                          <span className="text-[10px] font-black text-stone-800 uppercase truncate w-32">{formData.imageFile.name}</span>
                        </div>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-stone-200 text-5xl mb-4">add_photo_alternate</span>
                          <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest leading-relaxed">Cargar imagen</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Etiquetas */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Disciplina / Etiqueta</label>
                    <select 
                      className="w-full bg-stone-50 text-stone-800 p-4 rounded-2xl border border-transparent focus:border-[#4c6455]/30 outline-none font-bold appearance-none cursor-pointer"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                      <option value="Respiración">Respiración</option>
                      <option value="Biomecánica">Biomecánica</option>
                      <option value="Recuperación">Recuperación</option>
                      <option value="Atlético">Atlético</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Intensidad</label>
                    <select 
                      className="w-full bg-stone-50 text-stone-800 p-4 rounded-2xl border border-transparent focus:border-[#4c6455]/30 outline-none font-bold appearance-none cursor-pointer"
                      value={formData.intensity}
                      onChange={(e) => setFormData({...formData, intensity: e.target.value})}
                    >
                      <option value="Introductorio">Introductorio</option>
                      <option value="Intermedio">Intermedio</option>
                      <option value="Avanzado">Avanzado / Elite</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Datos Técnicos */}
              <div className="lg:col-span-8 space-y-10">
                
                <section className="space-y-6">
                  <div className="flex justify-between items-center border-b border-stone-50 pb-4">
                    <h4 className="text-lg font-black text-stone-900 uppercase tracking-tight">Datos básicos</h4>
                    <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Sección 01</span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Nombre del Curso</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ej. Dominio de la Respiración Kinética"
                      className="w-full bg-stone-50 text-stone-800 p-5 rounded-2xl border border-transparent focus:border-[#4c6455]/30 outline-none font-bold transition-all placeholder:text-stone-300"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Instructor</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Ej. Dr. Elias Vance"
                        className="w-full bg-stone-50 text-stone-800 p-5 rounded-2xl border border-transparent focus:border-[#4c6455]/30 outline-none font-bold transition-all placeholder:text-stone-300"
                        value={formData.instructor}
                        onChange={(e) => setFormData({...formData, instructor: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Duración (Horas)</label>
                      <input 
                        required
                        type="number" 
                        step="0.5"
                        placeholder="1.5"
                        className="w-full bg-stone-50 text-stone-800 p-5 rounded-2xl border border-transparent focus:border-[#4c6455]/30 outline-none font-bold transition-all placeholder:text-stone-300"
                        value={formData.duration}
                        onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      />
                    </div>
                  </div>
                </section>

                <section className="space-y-6">
                  <div className="flex justify-between items-center border-b border-stone-50 pb-4">
                    <h4 className="text-lg font-black text-stone-900 uppercase tracking-tight">Estructura y Horarios</h4>
                    <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Sección 02</span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Horario Semanal</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Lun - Mie - Vie | 08:00 AM"
                      className="w-full bg-stone-50 text-stone-800 p-5 rounded-2xl border border-transparent focus:border-[#4c6455]/30 outline-none font-bold transition-all placeholder:text-stone-300"
                      value={formData.schedule}
                      onChange={(e) => setFormData({...formData, schedule: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Descripción del Programa</label>
                    <textarea 
                      required
                      rows="4"
                      placeholder="Optimización de patrones de movimiento para rendimiento máximo..."
                      className="w-full bg-stone-50 text-stone-800 p-6 rounded-[24px] border border-transparent focus:border-[#4c6455]/30 outline-none font-medium transition-all resize-none placeholder:text-stone-300 leading-relaxed text-sm"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>
                </section>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-stone-100 flex justify-between items-center">
              <button 
                type="button"
                onClick={handleReset}
                className="text-stone-400 text-xs font-black uppercase tracking-[0.2em] hover:text-red-500 transition-colors cursor-pointer"
              >
                Limpiar datos
              </button>
              <button 
                type="submit"
                className="bg-[#4c6455] text-white px-20 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-emerald-900/20 hover:bg-stone-900 hover:scale-105 transition-all cursor-pointer active:scale-95"
              >
                Crear Actividad
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminCreateCourse;