import HeaderAdminManageUsers from "../../components/admin/HeaderAdminManageUsers";
import SidebarAdmin from "../../components/ui/sidebar/SidebarAdmin";

function AdminManageCourses() {
  return (
    <>
      <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
        <SidebarAdmin />
        <div className="ml-64 min-h-screen bg-background">
          <HeaderAdminManageUsers />
          <div class="pt-12 px-12 pb-20 max-w-7xl mx-auto">
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
                  <button className="flex items-center gap-x-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-semibold shadow-lg hover:brightness-110 transition-all transform active:scale-95">
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
                        <span class="text-sm font-medium text-on-surface-variant">
                          usuario
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-8 h-8 rounded-full object-cover"
                            data-alt="Instructor Elena Vance"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaJfXwYwcYecJ69dzYWLcuNz3c7HeUbj4k17FIwJS15ly5Xa9D_bwuEFIlzFg9ti4plp-XumfzQX-lfzyMTwGR08tA8GuBEzPB2cxxX6LY6gf6YaJXCEr11zipKe6dF7YDQ7Mhib2NkqQWWR0E68udlCEG_iOSVEeSxrUivjepXC_hDLnLI0U0SgboUd30oPYi9Ox6uXkI8kdShc3EIreWzwwR-aSUKzE7UthxmMjwUh9wAaOCdTMvsTEm6bD3aLNRm8qxU9B0prKN"
                          />
                          <span className="text-sm font-medium">
                            Elena Vance
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span class="text-sm font-medium text-on-surface-variant">
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
                            <span
                              className="material-symbols-outlined"
                              data-icon="edit"
                            >
                              edit
                            </span>
                          </button>
                          <button className="p-2 rounded-lg hover:bg-error/10 text-error transition-colors">
                            <span
                              className="material-symbols-outlined"
                              data-icon="delete"
                            >
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="group hover:bg-surface-container-lowest transition-all duration-300">
                      <td className="px-8 py-6">
                        <span class="text-sm font-medium text-on-surface-variant">
                          usuario
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-8 h-8 rounded-full object-cover"
                            data-alt="Instructor Marcus Aurelius"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIQCjR4jS8MkaUtPP45S2uQhCPGpxvspl8JKGcK0wZ_88NfPyhceOfLFytN9wZW6sW5soJWq3GJH2o0wseb1wy9p77xJTUx4Wp409bCqyiQeluJJLjJonWoRhhuVSx0J_uVYNvXFvnnK3w__BIYoUeKWJCkK3JrvJr8vJlIps9J3sG3i9e3PO5oAPLzX2b6C3HT2gnZ6nFLwQpMqz0T-jTSAplklCxF0KcJlv4XA4E85jqlvY4Wm47rAvsTxM9R9ip_ffP4zOO2cDi"
                          />
                          <span className="text-sm font-medium">
                            Marcus Chen
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span class="text-sm font-medium text-on-surface-variant">
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
                            <span
                              className="material-symbols-outlined"
                              data-icon="edit"
                            >
                              edit
                            </span>
                          </button>
                          <button className="p-2 rounded-lg hover:bg-error/10 text-error transition-colors">
                            <span
                              className="material-symbols-outlined"
                              data-icon="delete"
                            >
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="group hover:bg-surface-container-lowest transition-all duration-300">
                      <td className="px-8 py-6">
                        <span class="text-sm font-medium text-on-surface-variant">
                          usuario
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-8 h-8 rounded-full object-cover"
                            data-alt="Instructor Sarah Jenkins"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAplm-a6Ivpfs_NTwdBwuN1NNueNgl4KWi93dPN-G4cFQlgz3XRyAcWFXHx6_F-7llPlHQ0FARttuFM_q74VZvm4shXPdi1c3ZCWBpsD7b4bm9OpOkaa64mLP0spqoVsW5etzrDHQjyqc2pwqR_3YwaDKvA1bNcJqMQonymYyT5kxy8ko0VI51dYOgDB-9AHOFFbJJsHj5Hvq_ubR3lBFvh2q_1Y69VAkeyj2SPXBmAHFnZd7GFKByejJcPkkAlFTBJAg-KR_v-4o4X"
                          />
                          <span className="text-sm font-medium">
                            Sarah Jenkins
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span class="text-sm font-medium text-on-surface-variant">
                          email@correo.com
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">
                          Draft
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 rounded-lg hover:bg-primary/10 text-primary transition-colors">
                            <span
                              className="material-symbols-outlined"
                              data-icon="edit"
                            >
                              edit
                            </span>
                          </button>
                          <button className="p-2 rounded-lg hover:bg-error/10 text-error transition-colors">
                            <span
                              className="material-symbols-outlined"
                              data-icon="delete"
                            >
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="group hover:bg-surface-container-lowest transition-all duration-300">
                      <td className="px-8 py-6">
                        <span class="text-sm font-medium text-on-surface-variant">
                          usuario
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-8 h-8 rounded-full object-cover"
                            data-alt="Instructor David Miller"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4K70acCf0wZf7rWajLn24wJgaKvxe72cPIlEPDsFZEwfQpnlFWrLX_EIa8sl-jt0ahb2LPOON59A1m_eA4XR2K_UF6RGwk2Bo4fMVr1KqHSxJCynSk6d6WOZ_l-9sgeKO5lCbmuvpPm8IVLXhow6Aqffz_XCZO3Bt3QDJCFzZ8EanMoz5B74l2xE83ErNc24IUKZxLnrE2pddftbpR-lZ40bMMCj8HHJHoOgvp77Mj_CBh70g25x444dJY2Hrg548Vptnz2ACbA41"
                          />
                          <span className="text-sm font-medium">
                            David Miller
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span class="text-sm font-medium text-on-surface-variant">
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
                            <span
                              className="material-symbols-outlined"
                              data-icon="edit"
                            >
                              edit
                            </span>
                          </button>
                          <button className="p-2 rounded-lg hover:bg-error/10 text-error transition-colors">
                            <span
                              className="material-symbols-outlined"
                              data-icon="delete"
                            >
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
            <footer class="mt-10 flex items-center justify-between">
              <p class="text-sm text-on-surface-variant">
                Mostrando 4 de 32 usuarios
              </p>
              <div class="flex gap-2">
                <button class="w-10 h-10 rounded-full bg-white border border-outline-variant/30 flex items-center justify-center text-outline hover:text-primary transition-colors">
                  <span
                    class="material-symbols-outlined"
                    data-icon="chevron_left"
                  >
                    chevron_left
                  </span>
                </button>
                <button class="w-10 h-10 rounded-full bg-white border border-outline-variant/30 flex items-center justify-center text-primary font-bold">
                  1
                </button>
                <button class="w-10 h-10 rounded-full bg-white border border-outline-variant/30 flex items-center justify-center text-outline hover:text-primary transition-colors font-medium">
                  2
                </button>
                <button class="w-10 h-10 rounded-full bg-white border border-outline-variant/30 flex items-center justify-center text-outline hover:text-primary transition-colors">
                  <span
                    class="material-symbols-outlined"
                    data-icon="chevron_right"
                  >
                    chevron_right
                  </span>
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

export default AdminManageCourses;
