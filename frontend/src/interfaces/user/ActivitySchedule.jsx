import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SidebarUser from "../../components/ui/sidebar/SidebarUser.jsx";
import HeaderMyCourses from "../../components/ui/header/HeaderMyCourses.jsx";

function ActivitySchedule() {
  const { activityName } = useParams(); 
  const navigate = useNavigate();
  const decodedName = activityName ? decodeURIComponent(activityName) : "Curso";

  const courseDatabase = {
    "Pilates de Precisión": { 
      img: "https://images.unsplash.com/photo-1518611012118-296072bb5804?w=800", 
      category: "Bienestar",
      intensity: "Intermedio",
      desc: "Un flujo de pilates centrado en la precisión para mejorar la estabilidad del core y la alineación corporal." 
    },
    "Resistencia Acuática": { 
      img: "https://images.unsplash.com/photo-1530549387074-d562cb6e6020?w=800", 
      category: "Cardio",
      intensity: "Introductorio",
      desc: "Sesiones acuáticas de alta intensidad diseñadas para la máxima resistencia cardiovascular." 
    },
    "El Saque Kinético": { 
      img: "https://images.unsplash.com/photo-1595435064212-36263f69930c?w=800", 
      category: "Fuerza",
      intensity: "Avanzado",
      desc: "Acondicionamiento de élite para el rendimiento en tenis y movimientos explosivos en la cancha." 
    },
    "Quietud Profunda": { 
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800", 
      category: "Recuperación",
      intensity: "Introductorio",
      desc: "Encuentra el equilibrio restaurador a través del trabajo de respiración y el movimiento meditativo." 
    },
    "Flujo Fundacional": { 
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800", 
      category: "Bienestar",
      intensity: "Intermedio",
      desc: "Construye una base sólida de movimiento con secuencias enfocadas en la movilidad." 
    }
  };

  const activityInfo = courseDatabase[decodedName] || { 
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800", 
    category: "Bienestar",
    intensity: "Estándar",
    desc: "Explora nuestras sesiones de actividades de bienestar y rendimiento de élite." 
  };

  const dates = [
    { day: "LUN", date: "12" }, { day: "MAR", date: "13" }, { day: "MIÉ", date: "14" },
    { day: "JUE", date: "15" }, { day: "VIE", date: "16" }, { day: "SÁB", date: "17" }, { day: "DOM", date: "18" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const selectedDate = dates[activeIndex].date;

  const sessionsByDate = {
    "12": [
      { time: "07:00", peak: "PICO DE LA MAÑANA", coach: "Sienna Brooks", spots: "3 cupos restantes", color: "bg-red-400" },
      { time: "09:30", peak: "MEDIA MAÑANA", coach: "Marcus Thorne", spots: "8 cupos restantes", color: "bg-green-600" }
    ],
    "13": [
      { time: "08:15", peak: "SESIÓN TEMPRANA", coach: "Elena Thorne", spots: "Capacidad Total", color: "bg-gray-400" },
      { time: "17:00", peak: "FLUJO AL ATARDECER", coach: "Julian Ross", spots: "12 cupos restantes", color: "bg-green-600" }
    ]
  };

  const currentSessions = sessionsByDate[selectedDate] || [
    { time: "11:30", peak: "SESIÓN ESTÁNDAR", coach: "Entrenador del Staff", spots: "Abierto", color: "bg-blue-400" }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen selection:bg-[#4C6455]/20">
      <SidebarUser />
      <HeaderMyCourses />

      <main className="ml-64 pt-24 px-12 pb-20 overflow-x-hidden relative">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-[#4C6455] transition-colors mb-6 group cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Volver</span>
        </button>

        <div className="flex justify-between items-start mb-10 gap-8">
          <div className="max-w-xl flex-1">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="bg-[#E9F0EC] text-[#4C6455] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                {activityInfo.category}
              </span>
              <span className="bg-[#D9A066]/15 text-[#D9A066] text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter shadow-inner border border-[#D9A066]/10">
                {activityInfo.intensity}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 break-words">{decodedName}</h2>
            <p className="text-gray-500 leading-relaxed text-sm">{activityInfo.desc}</p>
          </div>
          <div className="w-80 h-48 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white flex-shrink-0 relative z-10 transition-transform duration-500 hover:rotate-1">
            <img 
              src={activityInfo.img} 
              className="w-full h-full object-cover" 
              alt={decodedName} 
            />
          </div>
        </div>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6 px-1">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Selecciona una Fecha</h3>
            <div className="flex gap-4">
               <button onClick={() => setActiveIndex(prev => (prev > 0 ? prev - 1 : 6))} className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-50 active:scale-90 transition-all shadow-sm cursor-pointer hover:border-gray-200">
                  <span className="material-symbols-outlined text-gray-800">chevron_left</span>
               </button>
               <button onClick={() => setActiveIndex(prev => (prev < 6 ? prev + 1 : 0))} className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:bg-gray-50 active:scale-90 transition-all shadow-sm cursor-pointer hover:border-gray-200">
                  <span className="material-symbols-outlined text-gray-800">chevron_right</span>
               </button>
            </div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {dates.map((item, index) => (
              <button 
                key={item.date} 
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col items-center justify-center min-w-[100px] py-7 rounded-[28px] border transition-all duration-300 cursor-pointer ${
                  activeIndex === index 
                  ? "bg-[#4C6455] border-[#4C6455] text-white shadow-xl -translate-y-1 shadow-[#4C6455]/20" 
                  : "bg-white border-gray-100 text-gray-400 hover:border-gray-300"
                }`}
              >
                <span className="text-[11px] font-bold mb-1.5 tracking-widest uppercase">{item.day}</span>
                <span className="text-3xl font-black tracking-tighter">{item.date}</span>
                {activeIndex === index && <div className="w-2.5 h-2.5 bg-red-400 rounded-full mt-2.5 animate-pulse" />}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex justify-between items-end mb-6 px-1">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest">Sesiones Disponibles</h3>
            <p className="text-xs text-gray-400 font-medium tracking-tighter">Octubre {selectedDate}, 2026</p>
          </div>
          
          {currentSessions.map((session, i) => (
            <div key={`${selectedDate}-${i}`} className="bg-white p-6 rounded-[24px] flex items-center justify-between shadow-sm border border-gray-50 group hover:shadow-md hover:border-gray-100 transition-all duration-300">
              <div className="flex items-center gap-14">
                <div className="w-24">
                  <p className="text-[10px] font-bold text-gray-300 mb-1 tracking-tighter">{session.peak}</p>
                  <p className="text-2xl font-black text-gray-900 tracking-tight">{session.time}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-100 border border-gray-100 overflow-hidden group-hover:rotate-3 transition-transform">
                    <img src={`https://i.pravatar.cc/150?u=${session.coach}`} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-300 uppercase tracking-tight">Instructor Principal</p>
                    <p className="font-bold text-gray-800">{session.coach}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="text-right flex-shrink-0">
                  <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase tracking-widest leading-none">{session.spots}</p>
                  <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${session.color} w-1/3 rounded-full transition-all duration-1000`} />
                  </div>
                </div>
                <button 
                  onClick={() => navigate(`/solicitar-inscripcion/${encodeURIComponent(decodedName)}`, {
                    state: {
                      name: decodedName,
                      img: activityInfo.img,
                      desc: activityInfo.desc,
                      time: session.time,
                      coach: session.coach,
                      date: selectedDate
                    }
                  })}
                  className="bg-[#4C6455] text-white px-8 py-3.5 rounded-xl font-bold text-xs hover:bg-[#3a4d41] transition-all shadow-sm shadow-[#4C6455]/10 active:scale-95 cursor-pointer flex-shrink-0"
                >
                  Seleccionar Sesión
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default ActivitySchedule;