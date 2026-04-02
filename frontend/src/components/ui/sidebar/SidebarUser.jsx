import { NavLink, Link } from "react-router-dom";

function SidebarUser() {
  return (
    <>
      <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col py-8 px-4 gap-y-2 no-border bg-stone-100 dark:bg-stone-900 z-50 border-r border-outline-variant/10">
        <div className="mb-10 px-4">
          <h1 className="text-xl font-bold text-[#4c6455] dark:text-emerald-500 tracking-tighter">
            Kinetic Sanctuary
          </h1>
          <p className="text-stone-500 text-[10px] font-black tracking-[0.2em] mt-1 uppercase">
            Elite Performance
          </p>
        </div>
        
        <nav className="flex-1 flex flex-col gap-y-2">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-4 py-3 rounded-xl text-[#4c6455] dark:text-emerald-400 font-bold border-r-4 border-[#4c6455] dark:border-emerald-500 bg-white dark:bg-stone-800 shadow-sm font-manrope text-sm tracking-wide"
                : "flex items-center gap-3 px-4 py-3 rounded-xl text-stone-500 dark:text-stone-400 hover:bg-white transition-colors duration-200 font-manrope text-sm font-medium tracking-wide"
            }
          >
            <span className="material-symbols-outlined">dashboard</span>
            Panel Principal
          </NavLink>

          <NavLink
            to="/user_dashboard"
            end
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-4 py-3 rounded-xl text-[#4c6455] dark:text-emerald-400 font-bold border-r-4 border-[#4c6455] dark:border-emerald-500 bg-white dark:bg-stone-800 shadow-sm font-manrope text-sm tracking-wide"
                : "flex items-center gap-3 px-4 py-3 rounded-xl text-stone-500 dark:text-stone-400 hover:bg-white transition-colors duration-200 font-manrope text-sm font-medium tracking-wide"
            }
          >
            <span className="material-symbols-outlined">school</span> Mis Cursos
          </NavLink>

          <NavLink
            to="/explore"
            end
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-4 py-3 rounded-xl text-[#4c6455] dark:text-emerald-400 font-bold border-r-4 border-[#4c6455] dark:border-emerald-500 bg-white dark:bg-stone-800 shadow-sm font-manrope text-sm tracking-wide"
                : "flex items-center gap-3 px-4 py-3 rounded-xl text-stone-500 dark:text-stone-400 hover:bg-white transition-colors duration-200 font-manrope text-sm font-medium tracking-wide"
            }
          >
            <span className="material-symbols-outlined">explore</span> Explorar Cursos
          </NavLink>

          <NavLink
            to="/schedule"
            end
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-4 py-3 rounded-xl text-[#4c6455] dark:text-emerald-400 font-bold border-r-4 border-[#4c6455] dark:border-emerald-500 bg-white dark:bg-stone-800 shadow-sm font-manrope text-sm tracking-wide"
                : "flex items-center gap-3 px-4 py-3 rounded-xl text-stone-500 dark:text-stone-400 hover:bg-white transition-colors duration-200 font-manrope text-sm font-medium tracking-wide"
            }
          >
            <span className="material-symbols-outlined">calendar_month</span> Horarios
          </NavLink>

          <NavLink
            to="/pagos"
            end
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-4 py-3 rounded-xl text-[#4c6455] dark:text-emerald-400 font-bold border-r-4 border-[#4c6455] dark:border-emerald-500 bg-white dark:bg-stone-800 shadow-sm font-manrope text-sm tracking-wide"
                : "flex items-center gap-3 px-4 py-3 rounded-xl text-stone-500 dark:text-stone-400 hover:bg-white transition-colors duration-200 font-manrope text-sm font-medium tracking-wide"
            }
          >
            <span className="material-symbols-outlined">payments</span> Historial de Pagos
          </NavLink>
        </nav>

        <div className="mt-auto px-2 pt-4 border-t border-outline-variant/10">
          <NavLink
            to="/perfil"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-x-3 px-4 py-3 text-[#4c6455] dark:text-emerald-400 font-bold bg-white dark:bg-stone-800 rounded-xl"
                : "flex items-center gap-x-3 px-4 py-3 text-stone-500 dark:text-stone-400 hover:text-[#4c6455] transition-colors duration-200"
            }
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-manrope text-sm font-medium tracking-wide">Configuración</span>
          </NavLink>

          <Link to="/perfil" className="flex items-center gap-x-3 mt-4 p-3 hover:bg-white rounded-2xl transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-[#D9A066] flex items-center justify-center overflow-hidden shadow-sm group-hover:ring-2 group-hover:ring-primary/30 transition-all">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwO2eQ8LKgjTz29bpr6Hnn90ZlN_EAURkMT6dq1StYyEZ5BDTbWS1YRaCiqPL4ISSEgwSUuRdL9plGrv2Y9Vg0oEl-ZLLFhWlZazsIJ2E_EvhJEtZUb_u-zW575hulYoHObVzIWa-RKHDqe05vkRee951bmMPwbiu2xikCFFjeVWUlDxUlUTJ4x4_VyYY1o8ZnwarC01DcX0794IAyW4I8-_SECIOb_uKEd2aIVDDdAuynWP3m4pJ0FyP5CVbDaCihAyIcsggun2IA"
                alt="Avatar usuario"
              />
            </div>
            <div>
              <p className="text-xs font-black text-on-surface">Alex Rivera</p>
              <p className="text-[10px] text-stone-500 font-bold uppercase tracking-tighter">Miembro Pro</p>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
}

export default SidebarUser;