import React from 'react';
import { useLocation } from "react-router-dom";
import SidebarUser from "../../components/ui/sidebar/SidebarUser.jsx";
import SidebarAdmin from "../../components/ui/sidebar/SidebarAdmin.jsx";
import HeaderMyCourses from "../../components/ui/header/HeaderMyCourses.jsx";
import HeaderAdminManageCourses from "../../components/admin/HeaderAdminManageCourses.jsx";

function ProfileEditor() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin') || location.pathname.includes('admin_');

  return (
    <>
      {isAdmin ? <SidebarAdmin /> : <SidebarUser />}
      {isAdmin ? <HeaderAdminManageCourses /> : <HeaderMyCourses />}
      <div className="ml-64 pt-24 px-12 pb-20 bg-background min-h-screen">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-black text-on-background tracking-tighter uppercase">Editor de Perfil</h2>
            <p className="text-outline text-xs font-bold uppercase tracking-widest mt-1">Gestiona tu presencia digital y detalles de seguridad</p>
          </div>
          <div className="flex gap-4">
            <button className="text-outline text-xs font-bold uppercase tracking-widest hover:text-on-background transition-colors">Descartar</button>
            <button className="bg-[#4c6455] text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all">Guardar Cambios</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-48 h-48 rounded-full bg-[#D9A066] flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
                <svg viewBox="0 0 100 100" className="w-full h-full text-black/20">
                  <circle cx="50" cy="40" r="25" fill="currentColor" />
                  <path d="M20 90C20 70 35 60 50 60C65 60 80 70 80 90" fill="currentColor" />
                </svg>
              </div>
              <button className="absolute bottom-2 right-2 bg-[#4c6455] text-white p-2.5 rounded-full shadow-lg border-2 border-white hover:scale-110 transition-all">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </button>
            </div>
            
            <h3 className="text-xl font-black text-on-background">Alex Rivera</h3>
            <p className="text-outline text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Atleta Elite • Vancouver, BC</p>
            
            <div className="w-full max-w-[200px] mb-8">
              <div className="flex justify-between text-[9px] font-black uppercase tracking-widest mb-1.5">
                <span className="text-[#4c6455]">75% Perfil Completado</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-[#4c6455] rounded-full" style={{ width: '75%' }} />
              </div>
            </div>

            <div className="w-full bg-surface-container-low rounded-[32px] p-6 space-y-4 border border-surface-container-high">
              <p className="text-[10px] font-black text-outline-variant uppercase tracking-widest mb-2">Enlaces Rápidos</p>
              <button className="w-full flex items-center gap-3 text-xs font-bold text-on-surface hover:text-[#4c6455] transition-colors">
                <span className="material-symbols-outlined text-lg">verified_user</span> Verificación de Identidad
              </button>
              <button className="w-full flex items-center gap-3 text-xs font-bold text-on-surface hover:text-[#4c6455] transition-colors">
                <span className="material-symbols-outlined text-lg">notifications</span> Notificaciones Push
              </button>
              <button className="w-full flex items-center gap-3 text-xs font-bold text-on-surface hover:text-[#4c6455] transition-colors">
                <span className="material-symbols-outlined text-lg">security</span> Seguridad y Privacidad
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <section>
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-black text-on-background uppercase tracking-tight">Información Personal</h4>
                <span className="text-[9px] font-bold text-outline uppercase tracking-widest">Datos de Usuario</span>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-outline-variant uppercase tracking-widest ml-1">Nombre</label>
                  <input type="text" defaultValue="Alex" className="w-full bg-surface-container text-on-surface p-4 rounded-2xl border border-transparent focus:border-primary/30 outline-none font-medium transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-outline-variant uppercase tracking-widest ml-1">Apellido</label>
                  <input type="text" defaultValue="Rivera" className="w-full bg-surface-container text-on-surface p-4 rounded-2xl border border-transparent focus:border-primary/30 outline-none font-medium transition-all" />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label className="text-[10px] font-black text-outline-variant uppercase tracking-widest ml-1">Biografía Profesional</label>
                <textarea rows="3" className="w-full bg-surface-container text-on-surface p-4 rounded-2xl border border-transparent focus:border-primary/30 outline-none font-medium resize-none leading-relaxed" defaultValue="Maratonista apasionado enfocado en el flujo kinético y entrenamiento basado en la recuperación..." />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-outline-variant uppercase tracking-widest ml-1">Correo Electrónico</label>
                  <input type="email" defaultValue="alex.rivera@kinetic.com" className="w-full bg-surface-container text-on-surface p-4 rounded-2xl border border-transparent focus:border-primary/30 outline-none font-medium transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-outline-variant uppercase tracking-widest ml-1">Número de Contacto</label>
                  <input type="text" defaultValue="+1 (555) 508-1033" className="w-full bg-surface-container text-on-surface p-4 rounded-2xl border border-transparent focus:border-primary/30 outline-none font-medium transition-all" />
                </div>
              </div>
            </section>

            <section>
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-black text-on-background uppercase tracking-tight">Contacto de Emergencia</h4>
                <span className="bg-red-100 text-red-700 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest">Información Crítica</span>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-outline-variant uppercase tracking-widest ml-1">Nombre Completo</label>
                  <input type="text" defaultValue="Sarah Rivera" className="w-full bg-surface-container text-on-surface p-4 rounded-2xl border border-transparent focus:border-primary/30 outline-none font-medium transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-outline-variant uppercase tracking-widest ml-1">Parentesco</label>
                  <select className="w-full bg-surface-container text-on-surface p-4 rounded-2xl border border-transparent focus:border-primary/30 outline-none font-medium appearance-none">
                    <option>Cónyuge</option>
                    <option>Padre/Madre</option>
                    <option>Otro</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2 mb-10">
                <label className="text-[10px] font-black text-outline-variant uppercase tracking-widest ml-1">Teléfono de Emergencia</label>
                <input type="text" defaultValue="+1 (555) 000-0000" className="w-full bg-surface-container text-on-surface p-4 rounded-2xl border border-transparent focus:border-primary/30 outline-none font-medium transition-all" />
              </div>
            </section>

            <div className="bg-[#e9f0ec] dark:bg-stone-900 p-6 rounded-[32px] border border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white dark:bg-stone-800 rounded-full flex items-center justify-center text-[#4c6455]">
                  <span className="material-symbols-outlined">health_metrics</span>
                </div>
                <div>
                  <p className="text-xs font-black text-on-surface uppercase tracking-tight">Consentimiento de Datos de Salud</p>
                  <p className="text-[10px] text-outline font-medium">Allow coaches to view your recovery metrics for better scheduling.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4c6455]"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileEditor;