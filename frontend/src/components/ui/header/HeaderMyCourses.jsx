import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function HeaderMyCourses() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const navigate = useNavigate();

  const [notifs, setNotifs] = useState({
    inscripcion: true,
    pago: true,
    recordatorio: false,
    promociones: true
  });

  return (
    <>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-[#faf9f7]/70 dark:bg-stone-950/70 backdrop-blur-md flex justify-between items-center px-12 transition-all duration-300 ease-in-out">
        <div className="flex-1 max-w-md">
          <div className="relative group">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant"
              data-icon="search"
            >
              search
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary transition-all"
              placeholder="Buscar sesiones..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <div className="relative">
            <button 
              onClick={() => { setShowNotifMenu(!showNotifMenu); setShowProfileMenu(false); }}
              className="hover:bg-surface-container-low dark:hover:bg-stone-800 rounded-full p-2 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#4c6455]" data-icon="notifications">
                notifications
              </span>
            </button>
            {showNotifMenu && (
              <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-gray-100 dark:border-stone-800 p-4 animate-in fade-in zoom-in duration-200">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 px-2">Preferencias de Correo</h3>
                <div className="space-y-4">
                  {[
                    { id: 'inscripcion', label: 'Solicitud de inscripción exitosa' },
                    { id: 'pago', label: 'Pago de inscripción validado' },
                    { id: 'recordatorio', label: 'Recordatorios de clase' },
                    { id: 'promociones', label: 'Nuevas promociones' }
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between px-2">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                      <button 
                        onClick={() => setNotifs(prev => ({...prev, [item.id]: !prev[item.id]}))}
                        className={`w-10 h-5 rounded-full transition-colors relative ${notifs[item.id] ? 'bg-[#4c6455]' : 'bg-gray-300'}`}
                      >
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${notifs[item.id] ? 'left-6' : 'left-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => { setShowProfileMenu(!showProfileMenu); setShowNotifMenu(false); }}
              className="hover:bg-surface-container-low dark:hover:bg-stone-800 rounded-full p-2 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#4c6455]" data-icon="account_circle">
                account_circle
              </span>
            </button>
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-gray-100 dark:border-stone-800 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <Link to="/perfil" className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-[#e9f0ec] hover:text-[#4c6455] transition-colors">
                  <span className="material-symbols-outlined text-lg">edit</span> Editar Perfil
                </Link>
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-red-50 hover:text-red-600 transition-colors"
                >
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

export default HeaderMyCourses;