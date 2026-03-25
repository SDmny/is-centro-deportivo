import { useState } from "react";
import SidebarUser from "../../components/ui/sidebar/SidebarUser.jsx";
import HeaderMyCourses from "../../components/ui/header/HeaderMyCourses.jsx";

function Schedule() {
  const [view, setView] = useState("week");

  // Datos exactos de tu captura de pantalla
  const scheduleData = [
    { day: "MON", date: 23, tasks: [
      { time: "08:00 AM", title: "Power Vinyasa Flow", sub: "Studio A", color: "border-[#4C6455] bg-white" },
      { time: "05:30 PM", title: "Mobility & Breath", sub: "Recovery Room", color: "border-[#D9A3A3] bg-[#FDF4F4]" }
    ]},
    { day: "TUE", date: 24, isToday: true, tasks: [
      { time: "09:00 AM", title: "HIIT Conditioning", sub: "45 mins", color: "border-[#A3D9A5] bg-[#F4FDF4]" }
    ]},
    { day: "WED", date: 25, tasks: [
      { time: "10:30 AM", title: "Olympic Lifting", sub: "Weights Area", color: "border-[#4C6455] bg-white" },
      { time: "01:00 PM", title: "Physio Check-up", sub: "Clinic", color: "border-[#A3D9A5] bg-[#F4FDF4]" }
    ]},
    { day: "THU", date: 26, tasks: [
      { time: "07:30 AM", title: "Cold Plunge Therapy", sub: "Spa", color: "border-[#D9A3A3] bg-[#FDF4F4]" },
      { time: "05:30 PM", title: "Endurance Run", sub: "Outside Track", color: "border-[#4C6455] bg-white" }
    ]},
    { day: "FRI", date: 27, tasks: [
      { time: "09:00 AM", title: "Skills Drills: Agility", sub: "Main Hall", color: "border-[#4C6455] bg-white" }
    ]},
    { day: "SAT", date: 28, tasks: [
      { time: "11:30 AM", title: "Group Kickboxing", sub: "Studio B", color: "border-[#D9A3A3] bg-[#FDF4F4]" }
    ]},
    { day: "SUN", date: 29, tasks: [
      { time: "ALL DAY", title: "Active Recovery", sub: "Rest Day", color: "border-[#D9A3A3] bg-[#FDF4F4]" }
    ]},
  ];

  // Generar días para el mes (Octubre 2023 empieza en Domingo, pero simplificamos a grid de 31)
  const monthDays = Array.from({ length: 31 }, (_, i) => {
    const dayNum = i + 1;
    // Repetimos datos de la captura para los días que coincidan en número para que no se vea vacío
    const match = scheduleData.find(d => d.date === dayNum);
    return { date: dayNum, tasks: match ? match.tasks : [] };
  });

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <SidebarUser />
      <HeaderMyCourses />

      <main className="ml-64 pt-24 px-12 pb-20 text-[#1A1C1E]">
        {/* Header de la sección */}
        <header className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Weekly Schedule</h2>
          <div className="flex items-center gap-4">
             <div className="flex bg-white rounded-full p-1 border border-gray-100 shadow-sm">
                <button onClick={() => setView("week")} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${view === "week" ? "bg-[#F3F4F6] shadow-inner" : "opacity-40"}`}>Week</button>
                <button onClick={() => setView("month")} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${view === "month" ? "bg-[#F3F4F6] shadow-inner" : "opacity-40"}`}>Month</button>
             </div>
             <div className="flex items-center gap-4 text-sm font-bold mx-4">
                <span className="material-symbols-outlined text-gray-400 cursor-pointer">chevron_left</span>
                <span>Oct 23 — Oct 29, 2023</span>
                <span className="material-symbols-outlined text-gray-400 cursor-pointer">chevron_right</span>
             </div>
          </div>
        </header>

        {/* Vista Semanal (Idéntica a la captura) */}
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
          /* Vista Mensual (Adaptada con el mismo estilo) */
          <section className="grid grid-cols-7 gap-2 mb-12">
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(d => (
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

        {/* Widgets Inferiores */}
        <div className="grid grid-cols-12 gap-8">
          <section className="col-span-12 lg:col-span-8 bg-[#F3F6F4] rounded-[32px] p-10 relative overflow-hidden">
            <span className="bg-[#E2EAE5] text-[#4C6455] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Next Milestone</span>
            <h3 className="text-3xl font-black mt-6 text-[#4C6455]">London Marathon Preparation</h3>
            <p className="text-sm text-[#4C6455]/70 mt-2 max-w-lg">Your volume is increasing by 12% this week to build aerobic capacity. Ensure 8+ hours of sleep on Wednesday and Thursday.</p>
            
            <div className="flex gap-12 mt-10">
               <div>
                  <p className="text-[10px] font-bold opacity-40 uppercase">Weekly Goal</p>
                  <p className="text-xl font-black">42.5 km</p>
               </div>
               <div>
                  <p className="text-[10px] font-bold opacity-40 uppercase">Completed</p>
                  <p className="text-xl font-black">18.2 km</p>
               </div>
            </div>
            <div className="w-full h-2 bg-[#E2EAE5] rounded-full mt-6 overflow-hidden">
               <div className="h-full bg-[#4C6455] w-[42%] rounded-full" />
            </div>
          </section>

          <section className="col-span-12 lg:col-span-4 bg-[#FDF4F4] rounded-[32px] p-10 flex flex-col justify-between border border-[#F9E8E8]">
            <div>
               <span className="bg-[#F9E8E8] text-[#D9A3A3] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Recovery Tip</span>
               <h3 className="text-2xl font-black mt-6 text-[#A37474] leading-tight">Optimal Hydration</h3>
               <p className="text-xs text-[#A37474]/70 mt-3 font-medium">Based on your activity today, aim for 3.2L of water with added electrolytes.</p>
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