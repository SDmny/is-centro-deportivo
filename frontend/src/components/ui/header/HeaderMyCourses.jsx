import { Link } from "react-router-dom";

function HeaderMyCourses() {
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
          <button className="hover:bg-surface-container-low dark:hover:bg-stone-800 rounded-full p-2 transition-all">
            <span
              className="material-symbols-outlined text-[#4c6455]"
              data-icon="notifications"
            >
              notifications
            </span>
          </button>
          <Link 
            to="/perfil" 
            className="hover:bg-surface-container-low dark:hover:bg-stone-800 rounded-full p-2 transition-all"
          >
            <span
              className="material-symbols-outlined text-[#4c6455]"
              data-icon="account_circle"
            >
              account_circle
            </span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default HeaderMyCourses;