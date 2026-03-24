function SidebarUser() {
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
        <nav className="flex-1 flex flex-col gap-y-2">
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
        </nav>
        <div className="mt-auto px-4 pt-4 border-outline-variant/10">
          <a
            className="flex items-center gap-x-3 py-3 text-stone-500 dark:text-stone-400 hover:text-[#4c6455] transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined" data-icon="settings">
              settings
            </span>
            <span className="font-manrope text-sm font-medium tracking-wide">
              Settings
            </span>
          </a>
          <div className="flex items-center gap-x-3 mt-4">
            <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="User avatar of Sarah smiling"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwO2eQ8LKgjTz29bpr6Hnn90ZlN_EAURkMT6dq1StYyEZ5BDTbWS1YRaCiqPL4ISSEgwSUuRdL9plGrv2Y9Vg0oEl-ZLLFhWlZazsIJ2E_EvhJEtZUb_u-zW575hulYoHObVzIWa-RKHDqe05vkRee951bmMPwbiu2xikCFFjeVWUlDxUlUTJ4x4_VyYY1o8ZnwarC01DcX0794IAyW4I8-_SECIOb_uKEd2aIVDDdAuynWP3m4pJ0FyP5CVbDaCihAyIcsggun2IA"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface">Sarah J.</p>
              <p className="text-[10px] text-stone-500">Elite Tier</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SidebarUser;
