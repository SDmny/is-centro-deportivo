import React, { useState } from "react";
import SidebarAdmin from "../../components/ui/sidebar/SidebarAdmin.jsx";

function AdminPayments() {
  const [transactions, setTransactions] = useState([
    { id: "#TR-9021", user: "Marcus Dunlavey", date: "02 Abr, 2026", amount: "$120.00", status: "Completado" },
    { id: "#TR-9022", user: "Elena Rodriguez", date: "01 Abr, 2026", amount: "$85.00", status: "Pendiente" },
    { id: "#TR-9023", user: "Sarah Jenkins", date: "30 Mar, 2026", amount: "$150.00", status: "Completado" },
  ]);

  const validatePayment = (id) => {
    setTransactions(prev =>
      prev.map(trx => trx.id === id ? { ...trx, status: "Completado" } : trx)
    );
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen flex">
      <SidebarAdmin />
      <main className="flex-1 ml-64 p-12">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Panel de Pagos</h1>
            <p className="text-gray-500 text-sm font-medium">Gestión de transacciones y validaciones</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col min-w-[160px]">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Ingresos Mensuales</span>
              <span className="text-xl font-black text-gray-900">$12,480.00</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col min-w-[160px]">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Pagos Pendientes</span>
              <span className="text-xl font-black text-red-500">14</span>
            </div>
          </div>
        </header>

        <section className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800 uppercase text-xs tracking-widest">Historial de Transacciones</h3>
            <div className="relative">
               <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">search</span>
               <input type="text" placeholder="Buscar..." className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-xs outline-none w-64" />
            </div>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                <th className="px-8 py-5">ID</th>
                <th className="px-8 py-5">Usuario</th>
                <th className="px-8 py-5">Fecha</th>
                <th className="px-8 py-5">Monto</th>
                <th className="px-8 py-5">Estado</th>
                <th className="px-8 py-5 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {transactions.map((trx) => (
                <tr key={trx.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-5 font-mono text-[11px] text-gray-400">{trx.id}</td>
                  <td className="px-8 py-5 font-bold text-gray-800">{trx.user}</td>
                  <td className="px-8 py-5 text-xs text-gray-500">{trx.date}</td>
                  <td className="px-8 py-5 font-black text-gray-900">{trx.amount}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                      trx.status === "Completado" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                    }`}>
                      {trx.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    {trx.status === "Pendiente" && (
                      <button 
                        onClick={() => validatePayment(trx.id)}
                        className="bg-[#4C6455] text-white px-4 py-2 rounded-xl text-[10px] font-bold hover:bg-[#3a4d41] transition-all shadow-sm active:scale-95"
                      >
                        Validar Pago
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default AdminPayments;