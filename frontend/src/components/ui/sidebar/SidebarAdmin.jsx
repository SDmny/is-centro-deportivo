import { NavLink } from "react-router-dom";

function SidebarAdmin() {
  const baseClass =
    "flex items-center gap-x-3 px-4 py-3 transition-all duration-200";
  const inactiveClass =
    "text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-white/50 dark:hover:bg-stone-800/50";
  const activeClass =
    "text-emerald-900 dark:text-emerald-100 font-bold bg-white dark:bg-stone-800 rounded-lg shadow-sm";
  const spanIconClass = "material-symbols-outlined";
  const spanClass = "font-manrope text-sm font-medium tracking-wide";

  return (
    <>
      <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-stone-100 dark:bg-stone-950 flex flex-col gap-y-4 p-6 border-r-0">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-[#4c6455] dark:text-emerald-500 tracking-tighter">
            Kinetic Sanctuary
          </h1>
          <p className="text-stone-500 text-xs font-medium tracking-widest mt-1">
            ELITE PERFORMANCE
          </p>
        </div>
        <nav className="flex flex-col gap-y-2">
          <NavLink
            to="/admin_usuarios"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <span className={spanIconClass}>group</span>
            <span className={spanClass}>Usuarios</span>
          </NavLink>
          <NavLink
            to="/admin_cursos"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <span className={spanIconClass}>auto_stories</span>
            <span className={spanClass}>Cursos</span>
          </NavLink>

          <NavLink
            to="/admin_horarios"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <span className={spanIconClass}>calendar_today</span>
            <span className={spanClass}>Horarios</span>
          </NavLink>
          <NavLink
            to="/admin_pagos"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <span className={spanIconClass}>payments</span>
            <span className={spanClass}>Pagos</span>
          </NavLink>
          <NavLink
            to="/admin_ajustes"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <span className={spanIconClass}>settings</span>
            <span className={spanClass}>Ajustes</span>
          </NavLink>
        </nav>

        <div class="mt-auto pt-6 border-t border-transparent">
          <div class="flex items-center gap-x-3 px-2">
            <div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
              <span class={spanIconClass}>person</span>
            </div>
            <div class="overflow-hidden">
              <p class="text-xs font-bold truncate">Admin User</p>
              <p class="text-[10px] text-stone-500 truncate">Manager</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SidebarAdmin;
