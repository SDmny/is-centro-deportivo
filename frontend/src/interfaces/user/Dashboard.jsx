import HeaderMyCourses from "../../components/ui/header/HeaderMyCourses.jsx";
import SidebarUser from "../../components/ui/sidebar/SidebarUser.jsx";

function Dashboard() {
  return (
    <>
      <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
        <SidebarUser />
        <HeaderMyCourses />
        <div className="ml-64 pt-24 px-12 pb-12">
          <section className="mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight text-on-surface mb-2">
              Buenos días, Sarah
            </h2>
            <p className="text-lg text-on-surface-variant font-medium max-w-2xl opacity-80">
              ¡Prepárate para tu sesión! Tienes 3 sesiones planificadas esta
              semana. Respira hondo y empieza el día.
            </p>
          </section>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 space-y-12">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-bold tracking-tight text-on-surface">
                  Cursos Disponibles
                </h3>
                <a
                  className="text-sm font-semibold text-primary hover:underline"
                  href="#"
                >
                  Ver Todo
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group bg-surface-container-low rounded-lg overflow-hidden flex flex-col transition-all hover:bg-surface-container-lowest hover:shadow-[0_8px_24px_rgba(76,100,85,0.06)]">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-alt="Morning Yoga"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm-U99Oe9FID5fiO-8ii6FHes_xQUtMnnF2uuXtnwaS8Tb4OO45OhdKzBPffzuKJY81Kb5-aFwiOZZ9IVxex7LH0RTmSwyotWDfULSSIjzl25wS_hMrU09Fm590EOb2Kv-NUA_VYLOsRnTatJaAVsNA8dXUEmawZXXafN4j5rLPrqNjKNtmrr8VQAqxaM2KKFE-BC5lq8Zk89REvCX9ZfDdCbdlu1BMNgNZleI_qzXzTEdXbyjVVA4ON-vfhrkpk63JJ-kSl7sqMMt"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Mindfulness
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-bold text-on-surface mb-2">
                      Morning Yoga
                    </h4>
                    <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">
                      Empieza el día con energía y enfoque.
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-x-2">
                        <span
                          className="material-symbols-outlined text-sm text-primary"
                          data-icon="schedule"
                        >
                          schedule
                        </span>
                        <span className="text-xs font-semibold text-on-surface-variant">
                          45 minutos
                        </span>
                      </div>
                      <div className="w-24 h-2 bg-primary-fixed rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full w-[60%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-surface-container-low rounded-lg overflow-hidden flex flex-col transition-all hover:bg-surface-container-lowest hover:shadow-[0_8px_24px_rgba(76,100,85,0.06)]">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-alt="Core Strength"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrgAVfrDr9Im9lMva0R8TGGC2dNohx0yP2mAomnqLZqk71S0Ze6rZPNoRsZfrIq8PYJ40lXRvHHRmUMWF3T3GvdP4FxBb6fCXKDPXHuiihJ7DFSJ1l0_FV_9RR3_6aum2dNMJrzaD5cQXj0mf8mNvGDVvamE49jE_wxpnFcaVLtfvu2i3brr8EFvoQObfmjrM1CEfiex9smOSCgK7F63xIGmO8kXaDm6T5RZ1TGHAX_lEy-gNEmPIjja-QgaXgj6VqPEAIfhvYW1l7"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Strength
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-bold text-on-surface mb-2">
                      Core Strength
                    </h4>
                    <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">
                      Fortalece tu centro con ejercicios intensos.
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-x-2">
                        <span
                          className="material-symbols-outlined text-sm text-primary"
                          data-icon="bolt"
                        >
                          bolt
                        </span>
                        <span className="text-xs font-semibold text-on-surface-variant">
                          30 minutos
                        </span>
                      </div>
                      <div className="w-24 h-2 bg-primary-fixed rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full w-[30%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 group bg-surface-container-low rounded-lg overflow-hidden flex flex-col md:flex-row transition-all hover:bg-surface-container-lowest hover:shadow-[0_8px_24px_rgba(76,100,85,0.06)]">
                  <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-alt="HIIT Flow"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9EefkexksCvuFA0A6iInlmlvC_lQ5BCcNCF4vs1MLq7_bcuWB8jnQZh1PiI7dfGhOLgmWNb0K3XZ9VwPSeBNZloZ6OiORoxQqbl8eYcMUkVzfvVwjq0zfqLeVd3KKF6ygH3se13lwWgQn2bDiE-hGMERBaC4ryBkXqAoIAsUT7OApyB7Ghn4qhr58i_Wu5EVCGHhB0GXHEvf257LC__FQDq-J2-YToGN0IAi8U8ctiBDdtTRswzaKLkZcrfyIPhHY-GwcJlQtT5uc"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        Performance
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold text-on-surface mb-3">
                      HIIT Flow
                    </h4>
                    <p className="text-on-surface-variant mb-6 leading-relaxed">
                      High-intensity interval training con movimientos fluidos y
                      controlados.
                    </p>
                    <div className="flex items-center gap-x-6">
                      <button className="bg-primary text-on-primary px-6 py-2 rounded-lg text-sm font-bold shadow-md hover:opacity-90 transition-opacity">
                        Resume Session
                      </button>
                      <div className="flex items-center gap-x-2">
                        <span
                          className="material-symbols-outlined text-primary"
                          data-icon="bar_chart"
                        >
                          bar_chart
                        </span>
                        <span className="text-sm font-medium">92% Match</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 space-y-8">
              <div className="bg-surface-container rounded-xl p-8 sticky top-24">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-on-surface">
                    Weekly Schedule
                  </h3>
                  <span
                    className="material-symbols-outlined text-outline cursor-pointer"
                    data-icon="calendar_today"
                  >
                    calendar_today
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-x-4">
                    <div className="flex flex-col items-center w-12 pt-1">
                      <span className="text-[10px] font-bold text-outline-variant uppercase">
                        Mon
                      </span>
                      <span className="text-lg font-extrabold text-on-surface">
                        12
                      </span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="bg-surface-container-lowest p-4 rounded-lg border-l-4 border-primary shadow-sm">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-tighter">
                          07:00 AM
                        </p>
                        <h5 className="text-sm font-bold text-on-surface">
                          Morning Yoga
                        </h5>
                        <p className="text-[10px] text-on-surface-variant italic">
                          Studio A • Coach Elena
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-x-4">
                    <div className="flex flex-col items-center w-12 pt-1">
                      <span className="text-[10px] font-bold  uppercase text-primary">
                        Tue
                      </span>
                      <span className="text-lg font-extrabold text-primary">
                        14
                      </span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="bg-surface-container-lowest p-4 rounded-lg border-l-4 border-secondary shadow-sm">
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-tighter">
                          05:00 PM
                        </p>
                        <h5 className="text-sm font-bold text-on-surface">
                          HIIT Flow
                        </h5>
                        <p className="text-[10px] text-on-surface-variant italic">
                          Studio B • Coach Marcus
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-x-4 opacity-50">
                    <div className="flex flex-col items-center w-12 pt-1">
                      <span className="text-[10px] font-bold text-outline-variant uppercase">
                        Wed
                      </span>
                      <span className="text-lg font-extrabold text-on-surface">
                        16
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-surface-container-low p-4 rounded-lg border-l-4 border-outline-variant/30">
                        <p className="text-[10px] font-bold text-outline-variant uppercase tracking-tighter">
                          08:00 AM
                        </p>
                        <h5 className="text-sm font-bold text-on-surface">
                          Yoga opcional
                        </h5>
                        <p className="text-[10px] text-on-surface-variant italic">
                          Elige una sesión de yoga para relajarte y recuperarte.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-secondary-container rounded-lg">
                  <div className="flex items-center gap-x-3 mb-2">
                    <span
                      className="material-symbols-outlined text-on-secondary-container"
                      data-icon="auto_awesome"
                    >
                      auto_awesome
                    </span>
                    <p className="text-sm font-bold text-on-secondary-container">
                      Tu descanso es importante
                    </p>
                  </div>
                  <p className="text-xs text-on-secondary-container opacity-80 leading-relaxed">
                    Recuerda hidratarte y priorizar la recuperación esta semana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
