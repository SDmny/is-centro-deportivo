function HeaderAdminManageCourses() {
  return (
    <>
      <header class="w-full sticky top-0 z-40 bg-stone-50/70 dark:bg-stone-900/70 backdrop-blur-xl flex justify-between items-center px-8 py-4">
        <div class="flex items-center gap-x-6 flex-1">
          <div class="relative w-full max-w-md">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">
              search
            </span>
            <input
              class="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg focus:ring-1 focus:ring-primary text-sm placeholder:text-outline-variant transition-colors"
              placeholder="Buscar cursos, instructores, o estudiantes..."
              type="text"
            />
          </div>
        </div>
        <div class="flex items-center gap-x-4">
          <button class="p-2 text-stone-500 dark:text-stone-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/30 transition-colors rounded-full">
            <span class="material-symbols-outlined" data-icon="notifications">
              notifications
            </span>
          </button>
          <button class="p-2 text-stone-500 dark:text-stone-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/30 transition-colors rounded-full">
            <span class="material-symbols-outlined" data-icon="account_circle">
              account_circle
            </span>
          </button>
        </div>
      </header>
    </>
  );
}

export default HeaderAdminManageCourses;
