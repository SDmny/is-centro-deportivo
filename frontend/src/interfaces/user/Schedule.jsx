import { useState } from "react";
import SidebarUser from "../../components/ui/sidebar/SidebarUser.jsx";
import HeaderMyCourses from "../../components/ui/header/HeaderMyCourses.jsx";

function Schedule() {
const [view, setView] = useState("week");

const scheduleData = [
{ day: "LUN", date: 23, tasks: [
{ time: "08:00 AM", title: "Power Vinyasa Flow", sub: "Estudio A", color: "border-[#4C6455] bg-white" },
{ time: "05:30 PM", title: "Movilidad y Respiración", sub: "Sala de Recuperación", color: "border-[#D9A3A3] bg-[#FDF4F4]" }
]},
{ day: "MAR", date: 24, isToday: true, tasks: [
{ time: "09:00 AM", title: "Acondicionamiento HIIT", sub: "45 mins", color: "border-[#A3D9A5] bg-[#F4FDF4]" }
]},
{ day: "MIÉ", date: 25, tasks: [
{ time: "10:30 AM", title: "Levantamiento Olímpico", sub: "Área de Pesas", color: "border-[#4C6455] bg-white" },
{ time: "01:00 PM", title: "Chequeo de Fisioterapia", sub: "Clínica", color: "border-[#A3D9A5] bg-[#F4FDF4]" }
]},
{ day: "JUE", date: 26, tasks: [
{ time: "07:30 AM", title: "Terapia de Inmersión Fría", sub: "Spa", color: "border-[#D9A3A3] bg-[#FDF4F4]" },
{ time: "05:30 PM", title: "Carrera de Resistencia", sub: "Pista Exterior", color: "border-[#4C6455] bg-white" }
]},
{ day: "VIE", date: 27, tasks: [
{ time: "09:00 AM", title: "Drills de Habilidades: Agilidad", sub: "Salón Principal", color: "border-[#4C6455] bg-white" }
]},
{ day: "SÁB", date: 28, tasks: [
{ time: "11:30 AM", title: "Kickboxing Grupal", sub: "Estudio B", color: "border-[#D9A3A3] bg-[#FDF4F4]" }
]},
{ day: "DOM", date: 29, tasks: [
{ time: "TODO EL DÍA", title: "Recuperación Activa", sub: "Día de Descanso", color: "border-[#D9A3A3] bg-[#FDF4F4]" }
]},
];

const monthDays = Array.from({ length: 31 }, (_, i) => {
const dayNum = i + 1;
const match = scheduleData.find(d => d.date === dayNum);
return { date: dayNum, tasks: match ? match.tasks : [] };
});

return (
<div className="bg-[#F9FAFB] min-h-screen">
<SidebarUser />
<HeaderMyCourses />

  <main className="ml-64 pt-24 px-12 pb-20 text-[#1A1C1E]">
    <header className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold">Horario Semanal</h2>
      <div className="flex items-center gap-4">
         <div className="flex bg-white rounded-full p-1 border border-gray-100 shadow-sm">
            <button onClick={() => setView("week")} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${view === "week" ? "bg-[#F3F4F6] shadow-inner" : "opacity-40"}`}>Semana</button>
            <button onClick={() => setView("month")} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${view === "month" ? "bg-[#F3F4F6] shadow-inner" : "opacity-40"}`}>Mes</button>
         </div>
         <div className="flex items-center gap-4 text-sm font-bold mx-4">
            <span className="material-symbols-outlined text-gray-400 cursor-pointer">chevron_left</span>
            <span>Oct 23 — Oct 29, 2023</span>
            <span className="material-symbols-outlined text-gray-400 cursor-pointer">chevron_right</span>
         </div>
      </div>
    </header>

    {view === "week" ? (
      <section className="grid grid-cols-7 gap-6 mb-12">
        {scheduleData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-center mb-6">
              <span className="text-[10px] font-bold text-gray-400 block mb-1 uppercase tracking-tighter">{item.day}</span>
              <span className={`text-2xl font-black ${item.isToday ? "text-primary relative after:content-['•'] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2" : ""}`}>{item.date}</span>
            </div>
            <div className="w-full space-y-4">
              {item.tasks.map((task, tIdx) => (
                <div key={tIdx} className={`border-l-[6px] ${task.color} p-4 rounded-r-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] min-h-[140px] flex flex-col justify-between`}>
                  <div>
                    <p className="text-[9px] font-bold opacity-40 mb-2 uppercase tracking-tight">{task.time}</p>
                    <h4 className="text-[13px] font-bold leading-tight tracking-tight">{task.title}</h4>
                  </div>
                  <div className="flex items-center gap-1 opacity-40">
                     <span className="material-symbols-outlined text-[14px]">location_on</span>
                     <span className="text-[9px] font-bold">{task.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    ) : (
      <section className="grid grid-cols-7 gap-2 mb-12">
        {["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"].map(d => (
          <div key={d} className="text-center text-[10px] font-bold text-gray-300 mb-2 tracking-widest">{d}</div>
        ))}
        {monthDays.map((day, idx) => (
          <div key={idx} className="bg-white/50 border border-gray-100 rounded-2xl p-2 min-h-[160px] flex flex-col gap-1">
            <span className={`text-[10px] font-bold mb-1 ${day.date === 24 ? "text-primary font-black" : "opacity-30"}`}>{day.date}</span>
            {day.tasks.map((task, tIdx) => (
              <div key={tIdx} className={`border-l-4 ${task.color} p-2 rounded-r-lg shadow-sm`}>
                <h5 className="text-[9px] font-black leading-none truncate">{task.title}</h5>
                <span className="text-[7px] font-bold opacity-40 leading-none">{task.time}</span>
              </div>
            ))}
          </div>
        ))}
      </section>
    )}

    <div className="grid grid-cols-12 gap-8">
      <section className="col-span-12 lg:col-span-8 bg-[#F3F6F4] rounded-[32px] p-10 relative overflow-hidden">
        <span className="bg-[#E2EAE5] text-[#4C6455] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Próximo Hito</span>
        <h3 className="text-3xl font-black mt-6 text-[#4C6455]">Preparación Maratón de Londres</h3>
        <p className="text-sm text-[#4C6455]/70 mt-2 max-w-lg">Tu volumen está aumentando un 12% esta semana para desarrollar capacidad aeróbica. Asegura 8+ horas de sueño el miércoles y jueves.</p>
        
        <div className="flex gap-12 mt-10">
           <div>
              <p className="text-[10px] font-bold opacity-40 uppercase">Meta Semanal</p>
              <p className="text-xl font-black">42.5 km</p>
           </div>
           <div>
              <p className="text-[10px] font-bold opacity-40 uppercase">Completado</p>
              <p className="text-xl font-black">18.2 km</p>
           </div>
        </div>
        <div className="w-full h-2 bg-[#E2EAE5] rounded-full mt-6 overflow-hidden">
           <div className="h-full bg-[#4C6455] w-[42%] rounded-full" />
        </div>
      </section>

      <section className="col-span-12 lg:col-span-4 bg-[#FDF4F4] rounded-[32px] p-10 flex flex-col justify-between border border-[#F9E8E8]">
        <div>
           <span className="bg-[#F9E8E8] text-[#D9A3A3] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Tip de Recuperación</span>
           <h3 className="text-2xl font-black mt-6 text-[#A37474] leading-tight">Hidratación Óptima</h3>
           <p className="text-xs text-[#A37474]/70 mt-3 font-medium">Según tu actividad de hoy, apunta a 3.2L de agua con electrolitos añadidos.</p>
        </div>
        <div className="flex items-center justify-between mt-8">
           <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#FDF4F4] bg-gray-200" />
              <div className="w-8 h-8 rounded-full border-2 border-[#FDF4F4] bg-gray-300" />
              <div className="w-8 h-8 rounded-full border-2 border-[#FDF4F4] bg-[#F9E8E8] flex items-center justify-center text-[8px] font-bold text-[#A37474]">+12</div>
           </div>
           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#D9A3A3] shadow-sm">
              <span className="material-symbols-outlined">water_drop</span>
           </div>
        </div>
      </section>
    </div>
  </main>
</div>

);
}

export default Schedule;