import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdminManageUsers from "../../components/admin/HeaderAdminManageUsers.jsx";
import SidebarAdmin from "../../components/ui/sidebar/SidebarAdmin.jsx";

function AdminManageUsers() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
        <SidebarAdmin />
        <div className="ml-64 min-h-screen bg-background">
          <HeaderAdminManageUsers />
          <div className="pt-24 px-12 pb-20 max-w-7xl mx-auto">
            <section className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-xl">
                  <h2 className="text-4xl font-extrabold text-on-surface tracking-tight mb-4">
                    Administrar Usuarios
                  </h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed opacity-80">
                    Visualiza los usuarios, sus detalles, estado, fecha de
                    última vez activo, etc. Agrega un nuevo usuario, edita o
                    elimina uno ya existente.
                  </p>
                </div>
                <div>
                  <button 
                    onClick={() => navigate('/admin/crear-usuario')}
                    className="flex items-center gap-x-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-semibold shadow-lg hover:brightness-110 transition-all transform active:scale-95 cursor-pointer"
                  >
                    <span className="material-symbols-outlined" data-icon="add">
                      add
                    </span>
                    <span>Agregar Usuario</span>
                  </button>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-low rounded-xl overflow-hidden p-1 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="text-label-md text-on-surface-variant/60 uppercase tracking-widest text-[11px] font-bold">
                      <th className="px-8 py-6">Usuario</th>
                      <th className="px-8 py-6">Nombre</th>
                      <th className="px-8 py-6">Correo</th>
                      <th className="px-8 py-6">Estatus</th>
                      <th className="px-8 py-6 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/40">
                    {/* Row 1 */}
                    <tr className="group hover:bg-surface-container-lowest transition-all duration-300">
                      <td className="px-8 py-6">
                        <span className="text-sm font-medium text-on-surface-variant">
                          usuario
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-8 h-8 rounded-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaJfXwYwcYecJ69dzYWLcuNz3c7HeUbj4k17FIwJS15ly5Xa9D_bwuEFIlzFg9ti4plp-XumfzQX-lfzyMTwGR08tA8GuBEzPB2cxxX6LY6gf6YaJXCEr11zipKe6dF7YDQ7Mhib2NkqQWWR0E68udlCEG_iOSVEeSxrUivjepXC_hDLnLI0U0SgboUd30oPYi9Ox6uXkI8kdShc3EIreWzwwR-aSUKzE7UthxmMjwUh9wAaOCdTMvsTEm6bD3aLNRm8qxU9B0prKN"
                            alt="Elena Vance"
                          />
                          <span className="text-sm font-medium">
                            Elena Vance
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm font-medium text-on-surface-variant">
                          email@correo.com
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[11px] font-bold uppercase tracking-wider">
                          Active
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 rounded-lg hover:bg-primary/10 text-primary transition-colors">
                            <span className="material-symbols-outlined" data-icon="edit">
                              edit
                            </span>
                          </button>
                          <button className="p-2 rounded-lg hover:bg-error/10 text-error transition-colors">
                            <span className="material-symbols-outlined" data-icon="delete">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <footer className="mt-10 flex items-center justify-between">
              <p className="text-sm text-on-surface-variant">
                Mostrando 4 de 32 usuarios
              </p>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white border border-outline-variant/30 flex items-center justify-center text-outline hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-outline-variant/30 flex items-center justify-center text-primary font-bold">1</button>
                <button className="w-10 h-10 rounded-full bg-white border border-outline-variant/30 flex items-center justify-center text-outline hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </footer>
            <footer className="p-12 text-center text-on-surface-variant opacity-40 text-sm">
              © 2024 Kinetic Sanctuary • Elite Performance Management System
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminManageUsers;