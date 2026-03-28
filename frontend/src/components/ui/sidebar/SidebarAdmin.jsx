function SidebarAdmin() {
  return (
    <>
      <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-stone-100 dark:bg-stone-950 flex flex-col gap-y-4 p-6 border-r-0">
        <div className="mb-8">
          <h1 className="text-lg font-extrabold text-emerald-900 dark:text-emerald-100 mb-2">
            Kinetic Sanctuary
          </h1>
          <p className="font-manrope text-sm font-medium tracking-wide text-emerald-800 dark:text-emerald-400 opacity-80">
            Elite Performance
          </p>
        </div>
        <nav className="flex flex-col gap-y-2">
          <a
            className="flex items-center gap-x-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-white/50 dark:hover:bg-stone-800/50 transition-all duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-manrope text-sm font-medium tracking-wide">
              Dashboard
            </span>
          </a>
          <a
            className="flex items-center gap-x-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-white/50 dark:hover:bg-stone-800/50 transition-all duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">auto_stories</span>
            <span className="font-manrope text-sm font-medium tracking-wide">
              Courses
            </span>
          </a>
          <a
            className="flex items-center gap-x-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-white/50 dark:hover:bg-stone-800/50 transition-all duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="font-manrope text-sm font-medium tracking-wide">
              Schedule
            </span>
          </a>
          <a
            className="flex items-center gap-x-3 px-4 py-3 text-emerald-900 dark:text-emerald-100 font-bold bg-white dark:bg-stone-800 rounded-lg shadow-sm"
            href="#"
          >
            <span className="material-symbols-outlined">payments</span>
            <span className="font-manrope text-sm font-medium tracking-wide">
              Payments
            </span>
          </a>
          <a
            className="flex items-center gap-x-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-white/50 dark:hover:bg-stone-800/50 transition-all duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-manrope text-sm font-medium tracking-wide">
              Settings
            </span>
          </a>
        </nav>
        <div class="mt-auto pt-6 border-t border-transparent">
          <div class="flex items-center gap-x-3 px-2">
            <div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
              <span class="material-symbols-outlined">person</span>
            </div>
            <div class="overflow-hidden">
              <p class="text-xs font-bold truncate">Admin User</p>
              <p class="text-[10px] text-stone-500 truncate">Course Director</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SidebarAdmin;
