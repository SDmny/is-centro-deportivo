import React from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[40px] p-12 border border-stone-200 shadow-xl shadow-stone-200/50">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-[#4c6455] rounded-3xl flex items-center justify-center text-white shadow-lg shadow-emerald-900/20">
            <span className="material-symbols-outlined text-3xl">shield_person</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-black text-stone-900 uppercase tracking-tighter mb-2">Bienvenido</h1>
          <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">Kinetic Sanctuary • Acceso al Sistema</p>
        </div>

        {/* Botones de Selección de Rol */}
        <div className="space-y-4">
          
          <button 
            onClick={() => navigate("/user_dashboard")}
            className="w-full group relative bg-white border-2 border-stone-100 p-6 rounded-3xl flex items-center justify-between hover:border-[#4c6455] hover:bg-stone-50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-400 group-hover:bg-[#4c6455]/10 group-hover:text-[#4c6455] transition-colors">
                <span className="material-symbols-outlined">fitness_center</span>
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-stone-900 uppercase tracking-widest">Ingreso Atleta</p>
                <p className="text-[9px] font-bold text-stone-400 uppercase">Panel de Entrenamiento</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-stone-300 group-hover:text-[#4c6455] group-hover:translate-x-1 transition-all">arrow_forward_ios</span>
          </button>

          <button 
            onClick={() => navigate("/admin_cursos")}
            className="w-full group relative bg-white border-2 border-stone-100 p-6 rounded-3xl flex items-center justify-between hover:border-[#4c6455] hover:bg-stone-50 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-400 group-hover:bg-[#4c6455]/10 group-hover:text-[#4c6455] transition-colors">
                <span className="material-symbols-outlined">admin_panel_settings</span>
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-stone-900 uppercase tracking-widest">Administrador</p>
                <p className="text-[9px] font-bold text-stone-400 uppercase">Gestión de Sistemas</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-stone-300 group-hover:text-[#4c6455] group-hover:translate-x-1 transition-all">arrow_forward_ios</span>
          </button>

        </div>

        <div className="mt-12 text-center">
          <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest leading-relaxed">
            Al continuar, aceptas nuestros <br />
            <span className="text-stone-900 cursor-pointer hover:underline">Términos de Servicio</span>
          </p>
        </div>
      </div>

      <p className="mt-8 text-stone-300 text-[10px] font-black uppercase tracking-[0.4em]">
        Elite Performance Hub
      </p>
    </div>
  );
}

export default Login;