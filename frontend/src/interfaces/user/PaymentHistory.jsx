import React, { useState } from 'react';
import SidebarUser from "../../components/ui/sidebar/SidebarUser.jsx";
import HeaderMyCourses from "../../components/ui/header/HeaderMyCourses.jsx";

function PaymentHistory() {
  const [filter, setFilter] = useState('TODOS');
  const [search, setSearch] = useState('');
  const [transactions, setTransactions] = useState([
    { name: "Kinetic Movement Mastery", date: "Oct 24, 2023", id: "#TRX-823184", amount: "$1,200.00", status: "PAGADO" },
    { name: "Breathing & Recovery Elite", date: "Oct 18, 2023", id: "#TRX-828521", amount: "$550.00", status: "PENDIENTE" },
    { name: "Metabolic Conditioning Phase II", date: "Oct 12, 2023", id: "#TRX-827130", amount: "$2,400.00", status: "REEMBOLSADO" },
    { name: "Biomechanical Analysis Workshop", date: "Sep 29, 2023", id: "#TRX-825081", amount: "$450.00", status: "PAGADO" },
  ]);

  const requestValidation = (id) => {
    alert(`Solicitud de validación enviada para la transacción ${id}`);
  };

  const filteredTransactions = transactions.filter(trx => {
    const matchesFilter = filter === 'TODOS' || trx.status === filter;
    const matchesSearch = trx.name.toLowerCase().includes(search.toLowerCase()) || 
                          trx.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <SidebarUser />
      <HeaderMyCourses />
      <div className="ml-64 pt-24 px-12 pb-20 bg-background min-h-screen">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-primary text-[11px] font-black uppercase tracking-[0.25em] mb-2">Panel Financiero</p>
            <h2 className="text-5xl font-black text-on-background tracking-tighter uppercase">Historial de Pagos</h2>
          </div>
          <button className="flex items-center gap-2 bg-surface-container px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-surface-container-high transition-all">
            <span className="material-symbols-outlined text-lg">download</span> Exportar CSV
          </button>
        </div>

        <div className="bg-white rounded-[40px] border border-surface-container-high overflow-hidden mb-12">
          <div className="p-8 border-b border-surface-container flex justify-between items-center bg-surface-container-low/30">
            <div className="relative w-72">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">search</span>
              <input 
                type="text" 
                placeholder="Buscar curso o ID..." 
                className="w-full bg-surface-container-low border border-surface-container-high pl-12 pr-4 py-3 rounded-2xl text-xs font-medium outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {['TODOS', 'PAGADO', 'PENDIENTE'].map((status) => (
                <button 
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === status ? 'bg-primary text-white' : 'text-outline hover:text-on-background'}`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-black text-outline-variant uppercase tracking-[0.2em] border-b border-surface-container">
                <th className="px-10 py-6">Nombre del Curso</th>
                <th className="px-6 py-6 text-center">Estado</th>
                <th className="px-6 py-6 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {filteredTransactions.map((trx, idx) => (
                <tr key={idx} className="group hover:bg-surface-container-low/50 transition-colors text-sm">
                  <td className="px-10 py-6 font-black text-on-surface">
                    {trx.name}
                    <p className="text-[10px] text-outline-variant font-mono mt-1">{trx.id}</p>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest ${
                      trx.status === 'PAGADO' ? 'bg-primary-fixed text-on-primary-fixed' : 
                      trx.status === 'PENDIENTE' ? 'bg-secondary-fixed text-on-secondary-fixed' : 'bg-surface-container-high text-outline'
                    }`}>
                      {trx.status}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    {trx.status === 'PENDIENTE' && (
                      <button 
                        onClick={() => requestValidation(trx.id)}
                        className="text-[10px] font-black text-primary uppercase border border-primary/20 px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all"
                      >
                        Solicitar Validación
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredTransactions.length === 0 && (
            <div className="p-10 text-center text-outline text-xs font-bold uppercase tracking-widest">No se encontraron transacciones</div>
          )}
        </div>
      </div>
    </>
  );
}

export default PaymentHistory;