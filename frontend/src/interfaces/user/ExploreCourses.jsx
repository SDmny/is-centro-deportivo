import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarUser from "../../components/ui/sidebar/SidebarUser.jsx";
import HeaderMyCourses from "../../components/ui/header/HeaderMyCourses.jsx";

function ExploreCourses() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Todas las Disciplinas");

  const courses = [
    { title: "Pilates de Precisión", instructor: "Elena Thorne", tag: "PILATES", category: "Mindfulness", img: "https://images.unsplash.com/photo-1518611012118-296072bb5804?auto=format&fit=crop&w=800", description: "Domina la estabilidad del core y el movimiento fluido bajo una guía refinada." },
    { title: "Resistencia Acuática", instructor: "David Teal", tag: "CARDIO", category: "Cardio", img: "https://images.unsplash.com/photo-1530549387074-d562cb6e6020?auto=format&fit=crop&w=800", description: "Mejora tu capacidad cardiovascular con resistencia al agua de bajo impacto." },
    { title: "El Saque Kinético", instructor: "Sarah Lewis", tag: "FUERZA", category: "Fuerza", img: "https://images.unsplash.com/photo-1595435064212-36263f69930c?auto=format&fit=crop&w=800", description: "Acondicionamiento de alto rendimiento diseñado para tenistas competitivos." },
    { title: "Quietud Profunda", instructor: "Julian Ross", tag: "RECUPERACIÓN", category: "Recuperación", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800", description: "Encuentra el equilibrio restaurador a través del trabajo de respiración y el movimiento meditativo." },
    { title: "Flujo Fundacional", instructor: "Ben Rivers", tag: "MOVILIDAD", category: "Mindfulness", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800", description: "Construye una base sólida de movimiento con secuencias enfocadas en la movilidad." },
  ];

  const filteredCourses = activeFilter === "Todas las Disciplinas" 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <SidebarUser />
      <HeaderMyCourses />

      <main className="ml-64 pt-24 px-12 pb-20">
        <header className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Descubrimiento</h2>
          <p className="text-gray-500 max-w-2xl">Nutre tu potencial kinético a través de disciplinas seleccionadas.</p>
        </header>

        <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
          {["Todas las Disciplinas", "Strength", "Cardio", "Recovery", "Mindfulness"].map((f) => (
            <button 
              key={f} 
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${activeFilter === f ? "bg-[#4C6455] text-white shadow-md" : "bg-white text-gray-400 border border-gray-100 hover:border-gray-300 cursor-pointer"}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, i) => (
            <div key={i} className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-56 relative overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">{course.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                <p className="text-gray-400 text-xs mb-6 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-stone-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${course.instructor}`} alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 uppercase">{course.instructor}</span>
                  </div>
                  <button 
                    onClick={() => navigate(`/explore/schedule/${encodeURIComponent(course.title)}`)}
                    className="bg-[#4C6455] text-white text-[10px] font-bold px-5 py-2.5 rounded-lg transition-all duration-300 hover:bg-[#3a4d41] hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                  >
                    Inscribirse
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ExploreCourses;