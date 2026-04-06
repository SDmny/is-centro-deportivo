import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SidebarUser from "../../components/ui/sidebar/SidebarUser.jsx";
import HeaderMyCourses from "../../components/ui/header/HeaderMyCourses.jsx";

function ExploreCourses() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState(location.state?.category || "Todas");
  const [activeIntensity, setActiveIntensity] = useState("Todos");
  const [activeInstructor, setActiveInstructor] = useState("Todos");

  const courses = [
    { title: "Pilates de Precisión", instructor: "Elena Thorne", tag: "PILATES", category: "Bienestar", intensity: "Intermedio", img: "https://images.unsplash.com/photo-1518611012118-296072bb5804?w=800", description: "Domina la estabilidad del core y el movimiento fluido bajo una guía refinada." },
    { title: "Resistencia Acuática", instructor: "David Teal", tag: "CARDIO", category: "Cardio", intensity: "Introductorio", img: "https://images.unsplash.com/photo-1530549387074-d562cb6e6020?w=800", description: "Mejora tu capacidad cardiovascular con resistencia al agua de bajo impacto." },
    { title: "El Saque Kinético", instructor: "Sarah Lewis", tag: "FUERZA", category: "Fuerza", intensity: "Avanzado", img: "https://images.unsplash.com/photo-1595435064212-36263f69930c?w=800", description: "Acondicionamiento de alto rendimiento diseñado para tenistas competitivos." },
    { title: "Quietud Profunda", instructor: "Julian Ross", tag: "RECUPERACIÓN", category: "Recuperación", intensity: "Introductorio", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800", description: "Encuentra el equilibrio restaurador a través del trabajo de respiración y el movimiento meditativo." },
  ];

  const hasFilters = activeCategory !== "Todas" || activeIntensity !== "Todos" || activeInstructor !== "Todos";

  const resetFilters = () => {
    setActiveCategory("Todas");
    setActiveIntensity("Todos");
    setActiveInstructor("Todos");
  };

  const filteredCourses = courses.filter(course => {
    const matchCat = activeCategory === "Todas" || course.category === activeCategory;
    const matchInt = activeIntensity === "Todos" || course.intensity === activeIntensity;
    const matchIns = activeInstructor === "Todos" || course.instructor === activeInstructor;
    return matchCat && matchInt && matchIns;
  });

  return (
    <div className="bg-background text-on-background min-h-screen">
      <SidebarUser />
      <HeaderMyCourses />

      <main className="ml-64 pt-24 px-12 pb-20">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <p className="text-primary text-[11px] font-black uppercase tracking-[0.3em] mb-2">Protocolo de Selección</p>
            <h2 className="text-6xl font-black tracking-tighter leading-none uppercase">Explorar</h2>
            <h2 className="text-6xl font-black text-outline-variant tracking-tighter opacity-20 leading-none uppercase">Programas</h2>
          </div>
          
          <div className="flex flex-col items-end gap-3">
            {hasFilters && (
              <button 
                onClick={resetFilters}
                className="text-[9px] font-black uppercase tracking-[0.2em] text-primary hover:text-on-background transition-colors flex items-center gap-1 group cursor-pointer"
              >
                <span className="material-symbols-outlined text-xs group-hover:rotate-180 transition-transform duration-500">restart_alt</span>
                Limpiar Filtros
              </button>
            )}
            <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-[24px] border border-outline-variant/20 shadow-sm">
              <div className="flex px-2">
                {["Todas", "Fuerza", "Cardio", "Recuperación"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeCategory === cat ? "bg-primary text-white shadow-md" : "text-outline hover:text-on-background cursor-pointer"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="h-8 w-[1px] bg-outline-variant/30" />

              <div className="flex gap-4 pr-4 pl-2">
                <div className="flex flex-col">
                  <label className="text-[8px] font-black text-outline-variant uppercase mb-1">Nivel</label>
                  <select 
                    value={activeIntensity}
                    onChange={(e) => setActiveIntensity(e.target.value)}
                    className="bg-transparent text-[10px] font-black uppercase tracking-widest text-on-background outline-none cursor-pointer hover:text-primary transition-colors"
                  >
                    <option value="Todos">Todos</option>
                    <option value="Introductorio">Introductorio</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-[8px] font-black text-outline-variant uppercase mb-1">Instructor</label>
                  <select 
                    value={activeInstructor}
                    onChange={(e) => setActiveInstructor(e.target.value)}
                    className="bg-transparent text-[10px] font-black uppercase tracking-widest text-on-background outline-none cursor-pointer hover:text-primary transition-colors"
                  >
                    <option value="Todos">Todos</option>
                    {Array.from(new Set(courses.map(c => c.instructor))).map(name => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCourses.map((course, i) => (
            <div key={i} className="group bg-surface-container-lowest rounded-[40px] overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-primary/5">
              <div className="h-60 relative overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-xl text-[9px] font-black tracking-widest uppercase text-on-surface shadow-sm">{course.tag}</span>
                  <span className="bg-primary/90 backdrop-blur px-4 py-1.5 rounded-xl text-[9px] font-black tracking-widest uppercase text-white shadow-lg">{course.intensity}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-black text-on-background uppercase tracking-tight mb-3 leading-tight">{course.title}</h3>
                <p className="text-outline text-xs font-medium mb-8 line-clamp-2 italic opacity-80 leading-relaxed">"{course.description}"</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-surface-container-high border-2 border-white overflow-hidden shadow-sm rotate-2 group-hover:rotate-0 transition-transform">
                      <img src={`https://i.pravatar.cc/100?u=${course.instructor}`} alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">{course.instructor}</span>
                  </div>
                  <button 
                    onClick={() => navigate(`/explore/schedule/${encodeURIComponent(course.title)}`)}
                    className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-xl transition-all hover:bg-on-background hover:scale-105 active:scale-95 shadow-lg shadow-primary/10 cursor-pointer"
                  >
                    Inscribirse
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="py-32 flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/20 rounded-[48px] bg-surface-container-lowest/50">
            <span className="material-symbols-outlined text-outline-variant text-6xl mb-4 italic opacity-20">search_off</span>
            <p className="text-outline font-black uppercase tracking-widest text-xs">Protocolo sin coincidencias</p>
            <button 
              onClick={resetFilters}
              className="mt-4 text-primary text-[10px] font-black uppercase tracking-widest hover:underline"
            >
              Reiniciar búsqueda
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default ExploreCourses;