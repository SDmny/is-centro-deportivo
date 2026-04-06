function HeaderCourseDetail() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const navigate = useNavigate();
  const [notifs, setNotifs] = useState({ inscripcion: true, pago: true });

  return (
    <>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-[#faf9f7]/70 dark:bg-stone-950/70 backdrop-blur-md flex justify-between items-center px-12 transition-all duration-300 ease-in-out">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="hover:bg-surface-container-low dark:hover:bg-stone-800 rounded-full p-2 transition-all cursor-pointer">
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <span className="font-manrope text-lg font-semibold text-primary">Course Details</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
            <input className="bg-surface-container-highest/30 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Search sanctuary..." type="text" />
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <button onClick={() => { setShowNotifMenu(!showNotifMenu); setShowProfileMenu(false); }} className="hover:bg-surface-container-low dark:hover:bg-stone-800 rounded-full p-2 transition-all cursor-pointer">
                <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
              </button>
              {showNotifMenu && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-gray-100 p-4">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 px-2">Preferencias de Correo</h3>
                  {['inscripcion', 'pago'].map((id) => (
                    <div key={id} className="flex items-center justify-between px-2 mb-3">
                      <span className="text-xs font-medium text-gray-700">{id === 'pago' ? 'Pago validado' : 'Inscripción exitosa'}</span>
                      <button onClick={() => setNotifs(prev => ({...prev, [id]: !prev[id]}))} className={`w-10 h-5 rounded-full transition-colors relative ${notifs[id] ? 'bg-[#4c6455]' : 'bg-gray-300'}`}>
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${notifs[id] ? 'left-6' : 'left-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => { setShowProfileMenu(!showProfileMenu); setShowNotifMenu(false); }} className="hover:bg-surface-container-low dark:hover:bg-stone-800 rounded-full p-2 transition-all cursor-pointer">
                <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
              </button>
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <Link to="/perfil" className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-600 hover:bg-[#e9f0ec] hover:text-[#4c6455] transition-colors">
                    <span className="material-symbols-outlined text-lg">edit</span> Editar Perfil
                  </Link>
                  <button onClick={() => navigate('/login')} className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors">
                    <span className="material-symbols-outlined text-lg">logout</span> Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderCourseDetail;