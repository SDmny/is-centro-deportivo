function Sidebar() {
  return (
    <>
      <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col py-8 px-4 gap-y-2 no-border bg-stone-100 dark:bg-stone-900 z-50">
        <div className="mb-10 px-4">
          <h1 className="text-xl font-bold text-[#4c6455] dark:text-emerald-500 tracking-tighter">
            Kinetic Sanctuary
          </h1>
          <p className="text-stone-500 text-xs font-medium tracking-widest mt-1">
            ELITE PERFORMANCE
          </p>
        </div>
        <nav className="flex-1 space-y-1">
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-[#ffffff] transition-colors duration-200 font-manrope text-sm font-medium tracking-wide"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#4c6455] dark:text-emerald-400 font-bold border-r-4 border-[#4c6455] dark:border-emerald-500 bg-[#ffffff]/50 dark:bg-stone-800/50 font-manrope text-sm tracking-wide"
            href="#"
          >
            <span className="material-symbols-outlined">school</span> My Courses
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-[#ffffff] transition-colors duration-200 font-manrope text-sm font-medium tracking-wide"
            href="#"
          >
            <span className="material-symbols-outlined">explore</span> Explore
            Courses
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-[#ffffff] transition-colors duration-200 font-manrope text-sm font-medium tracking-wide"
            href="#"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            Schedule
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-[#ffffff] transition-colors duration-200 mt-auto font-manrope text-sm font-medium tracking-wide"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span> Settings
          </a>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
