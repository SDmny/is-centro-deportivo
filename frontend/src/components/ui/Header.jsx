function Header() {
  return (
    <>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-[#faf9f7]/70 dark:bg-stone-950/70 backdrop-blur-md flex justify-between items-center px-12 transition-all duration-300 ease-in-out">
        <div className="flex items-center gap-4">
          <button className="hover:bg-[#f4f3f1] dark:hover:bg-stone-800 rounded-full p-2 transition-all">
            <span className="material-symbols-outlined text-primary">
              arrow_back
            </span>
          </button>
          <span className="font-manrope text-lg font-semibold text-primary">
            Course Details
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">
              search
            </span>
            <input
              className="bg-surface-container-highest/30 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary w-64 transition-all"
              placeholder="Search sanctuary..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="hover:bg-[#f4f3f1] dark:hover:bg-stone-800 rounded-full p-2 transition-all">
              <span className="material-symbols-outlined text-on-surface-variant">
                notifications
              </span>
            </button>
            <button className="hover:bg-[#f4f3f1] dark:hover:bg-stone-800 rounded-full p-2 transition-all">
              <span className="material-symbols-outlined text-on-surface-variant">
                account_circle
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
