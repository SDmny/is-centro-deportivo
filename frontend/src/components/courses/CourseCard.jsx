function CourseCard({ title, coach, image, sessions, progress, total, barColor }) {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-surface-container-high flex flex-col group transition-all hover:shadow-md">
      {/* Header de la tarjeta */}
      <div className="relative h-52 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-white text-2xl font-bold leading-tight mb-1">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Active</span>
            <p className="text-white/70 text-[10px] font-bold uppercase tracking-tighter">Coach / {coach}</p>
          </div>
        </div>
      </div>

      {/*Lista de Sesiones */}
      <div className="p-8 flex-1 flex flex-col">
        <p className="text-outline text-xs leading-relaxed mb-8 font-medium opacity-80">
          Focusing on performance optimization through specialized training and recovery methods.
        </p>

        <div className="space-y-4 mb-10">
          {sessions.map((session, idx) => (
            <div key={idx} className="flex items-center justify-between group/item cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl flex flex-col items-center justify-center shadow-sm ${session.type === 'primary' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-secondary-fixed text-on-secondary-fixed'}`}>
                  <span className="text-[9px] font-black leading-none uppercase tracking-tighter">Oct</span>
                  <span className="text-base font-black leading-tight">{session.date}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface leading-tight">{session.name}</h4>
                  <p className="text-[10px] text-outline font-bold uppercase tracking-tighter">{session.time} — {session.location}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline-variant text-lg group-hover/item:translate-x-1 transition-transform">chevron_right</span>
            </div>
          ))}
        </div>

        {/* Footer de Progreso */}
        <div className="mt-auto">
          <div className="flex justify-between items-end mb-2.5">
            <span className="text-[10px] font-black text-outline-variant uppercase tracking-[0.15em]">Course Progress</span>
            <span className="text-xs font-black text-on-surface">{progress}/{total} Sessions</span>
          </div>
          <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${(progress / total) * 100}%`, backgroundColor: barColor }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;