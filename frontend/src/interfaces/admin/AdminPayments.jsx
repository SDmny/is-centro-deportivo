import React, { useState } from "react";
import SidebarAdmin from "../../components/ui/sidebar/SidebarAdmin.jsx";
import HeaderAdminManageCourses from "../../components/admin/HeaderAdminManageCourses.jsx";

function AdminPayments() {
  const [transactions, setTransactions] = useState([
    { id: "#TR-9021", user: "Marcus Dunlavey", date: "02 Abr, 2026", amount: "$120.00", status: "Completado", method: "Tarjeta", course: "Boxeo Elite", email: "marcus.d@gmail.com" },
    { id: "#TR-9022", user: "Elena Rodriguez", date: "01 Abr, 2026", amount: "$85.00", status: "Pendiente", method: "Ventanilla", course: "Yoga Flux", email: "elena.rod@outlook.com" },
    { id: "#TR-9023", user: "Sarah Jenkins", date: "30 Mar, 2026", amount: "$150.00", status: "Completado", method: "Efectivo", course: "Crossfit Pro", email: "s.jenkins@kinetic.com" },
  ]);

  const [selectedPayment, setSelectedPayment] = useState(null);

  const validatePayment = (id, method) => {
    setTransactions(prev =>
      prev.map(trx => 
        trx.id === id ? { ...trx, status: "Completado", method: method } : trx
      )
    );
    setSelectedPayment(null);
  };

  const cancelPaymentStatus = (id) => {
    setTransactions(prev =>
      prev.map(trx => 
        trx.id === id ? { ...trx, status: "Pendiente", method: "Ventanilla" } : trx
      )
    );
    setSelectedPayment(null);
  };

  return (
    <div className="bg-stone-100 min-h-screen flex font-sans">
      <SidebarAdmin />
      <div className="flex-1 flex flex-col">
        <HeaderAdminManageCourses />
        <main className="ml-64 p-12 pt-28">
          
          <header className="flex justify-between items-end mb-12 px-4">
            <div>
              <p className="text-[#4C6455] text-[10px] font-black uppercase tracking-[0.4em] mb-3">Módulo de Finanzas</p>
              <h1 className="text-5xl font-black text-stone-900 uppercase tracking-tighter leading-none">Pagos</h1>
            </div>
            <div className="flex bg-white p-2 rounded-[32px] shadow-sm border border-stone-200">
              <div className="px-8 py-3 border-r border-stone-100 flex flex-col">
                <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest">Caja Hoy</span>
                <span className="text-xl font-black text-stone-900">$2,150</span>
              </div>
              <div className="px-8 py-3 flex flex-col">
                <span className="text-[9px] font-black text-red-400 uppercase tracking-widest">Pendientes</span>
                <span className="text-xl font-black text-red-500 text-center">8</span>
              </div>
            </div>
          </header>

          <section className="bg-white rounded-[48px] shadow-2xl shadow-stone-200 border border-stone-100 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] border-b border-stone-50 bg-stone-50/50">
                  <th className="px-10 py-6">ID Pago</th>
                  <th className="px-10 py-6">Atleta</th>
                  <th className="px-10 py-6">Monto</th>
                  <th className="px-10 py-6">Método</th>
                  <th className="px-10 py-6">Estado</th>
                  <th className="px-10 py-6 text-right">Detalles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {transactions.map((trx) => (
                  <tr 
                    key={trx.id} 
                    onClick={() => setSelectedPayment(trx)}
                    className="hover:bg-[#e9f0ec]/30 cursor-pointer transition-all group"
                  >
                    <td className="px-10 py-7 font-mono text-[11px] text-stone-400 group-hover:text-[#4C6455]">{trx.id}</td>
                    <td className="px-10 py-7 font-black text-stone-800 uppercase text-xs tracking-tight">{trx.user}</td>
                    <td className="px-10 py-7 font-black text-stone-900 italic">{trx.amount}</td>
                    <td className="px-10 py-7 text-[10px] font-black text-stone-500 uppercase tracking-widest">{trx.method}</td>
                    <td className="px-10 py-7">
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                        trx.status === "Completado" ? "bg-[#4C6455] text-white" : "bg-stone-200 text-stone-600"
                      }`}>
                        {trx.status}
                      </span>
                    </td>
                    <td className="px-10 py-7 text-right text-stone-300 group-hover:text-[#4C6455]">
                       <span className="material-symbols-outlined">open_in_new</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>

      {/* Modal de Validacion */}
      {selectedPayment && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-6">
          <div className="w-full max-w-4xl bg-white rounded-[48px] shadow-2xl overflow-hidden border-t-[12px] border-[#4C6455] animate-in fade-in zoom-in duration-200">
            
            <div className="p-12">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <span className="text-[10px] font-black text-[#4C6455] uppercase tracking-[0.4em]">Gestión Financiera</span>
                  <h2 className="text-4xl font-black text-stone-900 uppercase tracking-tighter leading-none mt-2">Detalles de Operación</h2>
                </div>
                <button onClick={() => setSelectedPayment(null)} className="p-3 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-stone-600">close</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-12 items-center">
                
                {/* Info del Atleta */}
                <div className="bg-stone-50 p-8 rounded-[32px] border border-stone-100 flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-stone-200 flex items-center justify-center font-black text-stone-400 text-2xl">
                    {selectedPayment.user.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-stone-400 uppercase tracking-[0.2em] mb-1">Resumen de Cargo</p>
                    <p className="text-xl font-black text-stone-900 uppercase tracking-tight">{selectedPayment.user}</p>
                    <p className="text-xs font-bold text-[#4C6455] uppercase">{selectedPayment.course}</p>
                    <p className="text-3xl font-black text-stone-900 mt-2">{selectedPayment.amount}</p>
                  </div>
                </div>

                {/* Área de Acción */}
                <div className="space-y-6">
                  {selectedPayment.status === "Pendiente" ? (
                    <>
                      <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest text-center">Seleccionar método recibido</p>
                      <div className="grid grid-cols-2 gap-4">
                        <button 
                          onClick={() => validatePayment(selectedPayment.id, "Efectivo")}
                          className="flex items-center justify-center gap-3 bg-white border-2 border-stone-100 py-5 rounded-[24px] hover:border-[#4C6455] hover:bg-[#e9f0ec] transition-all group cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[#4C6455]">payments</span>
                          <span className="text-[11px] font-black uppercase tracking-widest text-stone-800">Efectivo</span>
                        </button>
                        <button 
                          onClick={() => validatePayment(selectedPayment.id, "Tarjeta")}
                          className="flex items-center justify-center gap-3 bg-white border-2 border-stone-100 py-5 rounded-[24px] hover:border-[#4C6455] hover:bg-[#e9f0ec] transition-all group cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[#4C6455]">credit_card</span>
                          <span className="text-[11px] font-black uppercase tracking-widest text-stone-800">Tarjeta</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-full bg-[#e9f0ec] p-8 rounded-[32px] text-center border border-[#4C6455]/20 mb-4">
                        <span className="material-symbols-outlined text-[#4C6455] text-4xl mb-2">check_circle</span>
                        <p className="text-xs font-black text-[#4C6455] uppercase tracking-[0.2em]">Transacción Finalizada</p>
                        <p className="text-[10px] font-bold text-stone-500 uppercase mt-1">Método: {selectedPayment.method} • Folio: {selectedPayment.id}</p>
                      </div>
                      
                      <button 
                        onClick={() => cancelPaymentStatus(selectedPayment.id)}
                        className="flex items-center gap-2 text-[9px] font-black text-red-400 hover:text-red-600 uppercase tracking-[0.2em] transition-colors group cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-sm group-hover:rotate-[-90deg] transition-transform">history</span>
                        Marcar como Pendiente
                      </button>
                    </div>
                  )}
                </div>

              </div>

              <div className="mt-10 pt-8 border-t border-stone-100 flex justify-between items-center text-[9px] font-black text-stone-400 uppercase tracking-[0.3em]">
                 <span>Kinetic Sanctuary • Sistema de Control Financiero</span>
                 <span>ID: {selectedPayment.id}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPayments;