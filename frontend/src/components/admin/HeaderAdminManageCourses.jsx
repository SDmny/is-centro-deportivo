import React from 'react';
import { Link } from "react-router-dom";

function HeaderAdminManageCourses() {
  return (
    <>
      <header className="fixed top-0 right-0 z-40 bg-stone-50/70 dark:bg-stone-900/70 backdrop-blur-xl flex justify-between items-center px-8 py-4 w-[calc(100%-16rem)]">
        <div className="flex items-center gap-x-6 flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-stone-800 border-none rounded-lg focus:ring-1 focus:ring-[#4c6455] text-sm placeholder:text-outline-variant transition-colors shadow-sm"
              placeholder="Buscar cursos, instructores o estudiantes..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <button className="p-2 text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors rounded-full">
            <span className="material-symbols-outlined">
              notifications
            </span>
          </button>
          <Link to="/admin/perfil" className="p-2 text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors rounded-full cursor-pointer">
            <span className="material-symbols-outlined">
              account_circle
            </span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default HeaderAdminManageCourses;