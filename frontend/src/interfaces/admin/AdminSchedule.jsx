import React from 'react';
import SidebarAdmin from "../../components/ui/sidebar/SidebarAdmin.jsx";
import HeaderAdminManageCourses from "../../components/admin/HeaderAdminManageCourses.jsx";

function AdminSchedule() {
  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00"];
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  return (
    <>
      <SidebarAdmin />
      <HeaderAdminManageCourses />
      <div className="ml-64 pt-24 px-12 pb-20 bg-stone-50 min-h-screen">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-stone-900 uppercase tracking-tighter">Gestión de Horarios</h2>
            <p className="text-stone-500 text-sm font-medium mt-2">Control de disponibilidad y sesiones grupales</p>
          </div>
          <button className="bg-[#4c6455] text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-900/20">
            Añadir Sesión
          </button>
        </div>

        <div className="bg-white rounded-[40px] border border-stone-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-6 border-b border-stone-100">
            <div className="p-6 bg-stone-50 border-r border-stone-100"></div>
            {days.map(day => (
              <div key={day} className="p-6 text-center text-[10px] font-black text-stone-400 uppercase tracking-widest border-r border-stone-100">{day}</div>
            ))}
          </div>
          
          {timeSlots.map(time => (
            <div key={time} className="grid grid-cols-6 border-b border-stone-50 last:border-0">
              <div className="p-6 text-[11px] font-black text-stone-400 bg-stone-50/50 border-r border-stone-100 flex items-center justify-center">{time}</div>
              {days.map(day => (
                <div key={`${day}-${time}`} className="p-2 border-r border-stone-50 group cursor-pointer hover:bg-stone-50 transition-colors">
                  {day === "Lunes" && time === "09:00" ? (
                    <div className="bg-[#4c6455] text-white p-3 rounded-2xl text-[9px] font-black uppercase leading-tight shadow-md">
                      Respiración Kinética <br/> <span className="opacity-60">Dr. Vance</span>
                    </div>
                  ) : (
                    <div className="h-full w-full min-h-[60px] flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined text-stone-200">add_circle</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminSchedule;