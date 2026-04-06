import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SidebarAdmin from "../../components/ui/sidebar/SidebarAdmin.jsx";

function AdminCreateUser() {
  const navigate = useNavigate();
  
  const initialState = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'Atleta',
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
    console.log("Registrando nuevo usuario:", formData);
    navigate('/admin_usuarios');
  };

  return (
    <>
      <SidebarAdmin />
      <div className="ml-64 bg-stone-100 min-h-screen flex flex-col items-center p-12 font-sans">
        
        <div className="w-full max-w-5xl">
          {/* Botón de Volver */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-stone-400 hover:text-[#4c6455] transition-colors mb-6 group"
          >
            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Volver al listado</span>
          </button>

          <header className="mb-10 px-4">
            <p className="text-[#4c6455] text-[10px] font-black uppercase tracking-[0.3em] mb-2">Administración de Acceso</p>
            <h2 className="text-5xl font-black text-stone-900 tracking-tighter leading-none uppercase">Nuevo Usuario</h2>
          </header>

          <form onSubmit={handleSubmit} className="bg-white border-t-8 border-[#4c6455] rounded-[48px] p-16 shadow-2xl shadow-stone-200">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Columna Izquierda: Fotografía */}
              <div className="lg:col-span-4 flex flex-col items-center border-r border-stone-100 pr-12 justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full bg-stone-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl mb-8">
                    {formData.imageFile ? (
                      <img src={URL.createObjectURL(formData.imageFile)} className="w-full h-full object-cover" alt="Preview" />
                    ) : (
                      <svg viewBox="0 0 100 100" className="w-full h-full text-stone-200">
                        <circle cx="50" cy="40" r="25" fill="currentColor" />
                        <path d="M20 90C20 70 35 60 50 60C65 60 80 70 80 90" fill="currentColor" />
                      </svg>
                    )}
                  </div>
                  
                  <label className="flex items-center gap-2 bg-white border border-stone-200 text-[#4c6455] px-6 py-3 rounded-full cursor-pointer hover:bg-[#e9f0ec] transition-all shadow-sm">
                    <span className="material-symbols-outlined text-xl">photo_camera</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Examinar Foto</span>
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                  </label>
                </div>
              </div>

              {/* Columna Derecha: Datos */}
              <div className="lg:col-span-8 space-y-10">
                <section>
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-lg font-black text-stone-900 uppercase tracking-tight">Información Personal</h4>
                    <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Sección 01</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Nombre</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Ej. Alex"
                        className="w-full bg-stone-50 text-stone-800 p-4 rounded-2xl border border-transparent focus:border-[#4c6455]/30 outline-none font-bold transition-all placeholder:text-stone-300"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Apellido</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Ej. Rivera"
                        className="w-full bg-stone-50 text-stone-800 p-4 rounded-2xl border border-transparent focus:border-[#4c6455]/30 outline-none font-bold transition-all placeholder:text-stone-300"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">ID de Usuario</label>
                      <input 
                        required
                        type="text" 
                        placeholder="arivera_2026"
                        className="w-full bg-stone-50 text-stone-800 p-4 rounded-2xl border border-transparent focus:border-[#4c6455]/30 outline-none font-bold transition-all placeholder:text-stone-300"
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Rol de Acceso</label>
                      <div className="relative">
                        <select 
                          className="w-full bg-stone-50 text-stone-800 p-4 rounded-2xl border border-transparent focus:border-[#4c6455]/30 outline-none font-bold appearance-none cursor-pointer"
                          value={formData.role}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                        >
                          <option value="Atleta">Atleta</option>
                          <option value="Administrador">Administrador</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#4c6455] pointer-events-none">expand_more</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-lg font-black text-stone-900 uppercase tracking-tight">Comunicación</h4>
                    <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Sección 02</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Correo Electrónico</label>
                      <input 
                        required
                        type="email" 
                        placeholder="alex.rivera@kinetic.com"
                        className="w-full bg-stone-50 text-stone-800 p-4 rounded-2xl border border-transparent focus:border-[#4c6455]/30 outline-none font-bold transition-all placeholder:text-stone-300"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Teléfono</label>
                      <input 
                        type="text" 
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-stone-50 text-stone-800 p-4 rounded-2xl border border-transparent focus:border-[#4c6455]/30 outline-none font-bold transition-all placeholder:text-stone-300"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
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
                Limpiar todos los campos
              </button>
              <button 
                type="submit"
                className="bg-[#4c6455] text-white px-20 py-6 rounded-full font-black text-sm uppercase tracking-[0.25em] shadow-2xl shadow-emerald-900/30 hover:bg-stone-900 hover:scale-105 transition-all cursor-pointer active:scale-95"
              >
                Confirmar Registro
              </button>
            </div>
          </form>

          <p className="text-center text-stone-400 text-[9px] font-black mt-10 uppercase tracking-[0.4em] opacity-50">
            Seguridad de Acceso • Kinetic Sanctuary Protocol
          </p>
        </div>
      </div>
    </>
  );
}

export default AdminCreateUser;