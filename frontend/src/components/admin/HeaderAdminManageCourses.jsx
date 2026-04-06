import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HeaderAdminManageCourses() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const navigate = useNavigate();
  const [notifs, setNotifs] = useState({ inscripcion: true, pago: true });

  return (
    <>
      <header className="fixed top-0 right-0 z-40 bg-stone-50/70 dark:bg-stone-900/70 backdrop-blur-xl flex justify-between items-center px-8 py-4 w-[calc(100%-16rem)] h-16">
        <div className="flex items-center gap-x-6 flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
            <input className="w-full pl-10 pr-4 py-2 bg-white dark:bg-stone-800 border-none rounded-lg focus:ring-1 focus:ring-[#4c6455] text-sm placeholder:text-outline-variant transition-colors shadow-sm" placeholder="Buscar cursos, instructores o estudiantes..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="relative">
            <button onClick={() => { setShowNotifMenu(!showNotifMenu); setShowProfileMenu(false); }} className="p-2 text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors rounded-full cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            {showNotifMenu && (
              <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-gray-100 p-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 px-2">Preferencias Admin</h3>
                {['inscripcion', 'pago'].map((id) => (
                  <div key={id} className="flex items-center justify-between px-2 mb-3">
                    <span className="text-xs font-medium text-gray-700">{id === 'pago' ? 'Notificar pagos' : 'Notificar registros'}</span>
                    <button onClick={() => setNotifs(prev => ({...prev, [id]: !prev[id]}))} className={`w-10 h-5 rounded-full transition-colors relative ${notifs[id] ? 'bg-[#4c6455]' : 'bg-gray-300'}`}>
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${notifs[id] ? 'left-6' : 'left-1'}`} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={() => { setShowProfileMenu(!showProfileMenu); setShowNotifMenu(false); }} className="p-2 text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors rounded-full cursor-pointer">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <Link to="/admin/perfil" className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-600 hover:bg-[#e9f0ec] hover:text-[#4c6455] transition-colors">
                  <span className="material-symbols-outlined text-lg">edit</span> Editar Perfil
                </Link>
                <button onClick={() => navigate('/login')} className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">
                  <span className="material-symbols-outlined text-lg">logout</span> Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderAdminManageCourses;