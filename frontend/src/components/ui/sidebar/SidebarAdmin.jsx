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
        <div className="mt-auto flex items-center gap-x-3 p-4 bg-surface-container-low rounded-xl">
          <img
            className="w-10 h-10 rounded-full object-cover"
            data-alt="User professional portrait for profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvNlXUAGAnrjz1d7svcmYAWg2Pu6Do2QXjbON1wrL2oAI-jmj_wEy1Ez_WnuO03WWLmWYevm-oniuG2H-OoGiWZjLB7wBNA_cqM0PWFSJgG3vKHeXs5b2F9qu6ASFRJ9wia13-NpTa7oOH7Yo6FZOgOC-aalirSBN74NkonItckEykiZ5_MthfcgyqrYx3fdH5KUgPJ1wKkLYRadNlhsuhcpHO5mfaxgzVZX1Vw3JF5qKGzokZ6J98Krz3m4FdD1fBj-6-pEA1MFnz"
          />
          <div className="overflow-hidden">
            <p className="text-xs font-bold truncate">Alex Rivera</p>
            <p className="text-[10px] text-outline truncate">Pro Athlete</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SidebarAdmin;
