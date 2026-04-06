import { useNavigate } from "react-router-dom";
import HeaderMyCourses from "../../components/ui/header/HeaderMyCourses.jsx";
import SidebarUser from "../../components/ui/sidebar/SidebarUser.jsx";
import CourseCard from "../../components/courses/CourseCard.jsx";

function UserDashboard() {
  const navigate = useNavigate();

  /* Datos de ejemplo para las tarjetas de la imagen */
  const myCourses = [
    {
      title: "Respiración Kinética y Recuperación",
      coach: "Elena Vance",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
      progress: 4,
      total: 12,
      barColor: "var(--color-primary)",
      sessions: [
        { name: "Capacidad Pulmonar Profunda", date: "12", time: "08:00 AM", location: "Estudio Principal", type: "primary" },
        { name: "Entrenamiento de Tolerancia CO2", date: "15", time: "07:30 AM", location: "Sala Virtual 2", type: "primary" }
      ]
    },
    {
      title: "Arquitectura de Fuerza II",
      coach: "Marcus Thorne",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
      progress: 8,
      total: 15,
      barColor: "var(--color-secondary)",
      sessions: [
        { name: "Enfoque en Cadena Posterior", date: "13", time: "02:00 PM", location: "Laboratorio de Rendimiento", type: "secondary" },
        { name: "Respuesta Pliométrica", date: "16", time: "03:30 PM", location: "Laboratorio de Rendimiento", type: "secondary" }
      ]
    }
  ];

  return (
    <>
      {/* ACLARACION !!! Utilicé el primer archivo para empezar a copiar, hay que
      adaptar los componentes a volverse reutilizables o vamos a tener un buen
      de codigo repetido, de momento lo que quiero evitar es problemas con el
      estilo, estoy copiando el archivo tal cual lo tenemos pero estructurado en
      los componentes que voy viendo posibles */}
      <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
        <SidebarUser />
        <HeaderMyCourses />
        
        <div className="ml-64 pt-24 px-12 pb-20">
          <header className="mb-12">
            <p className="text-primary text-[11px] font-black uppercase tracking-[0.25em] mb-3">Viaje de Entrenamiento</p>
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-6xl font-black text-on-background tracking-tighter leading-none uppercase">Mis Sesiones</h2>
                <h2 className="text-6xl font-black text-outline-variant tracking-tighter opacity-30 leading-none uppercase">por Curso</h2>
              </div>
              <div className="text-right border-l-2 border-surface-container-high pl-8">
                <span className="text-5xl font-black text-on-background leading-none">08</span>
                <p className="text-[10px] font-black text-outline uppercase tracking-widest mt-1">Sesiones Activas Totales</p>
              </div>
            </div>
          </header>

          {/* Grid de Sesiones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {myCourses.map((course, i) => (
              <CourseCard key={i} {...course} />
            ))}
          </div>

          <section className="bg-primary-fixed/20 rounded-[48px] p-16 flex flex-col items-center text-center relative overflow-hidden border border-white/40">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <span className="material-symbols-outlined text-primary text-3xl">self_care</span>
            </div>
            <h3 className="text-3xl font-black text-on-background mb-4 tracking-tight">¿Buscas Sesiones Restaurativas?</h3>
            <p className="text-on-surface-variant text-base max-w-lg mb-10 leading-relaxed font-medium opacity-80">
              La recuperación de élite es tan importante como el entrenamiento mismo. Explora nuestros nuevos protocolos para maximizar tu rendimiento.
            </p>
            <button 
              onClick={() => navigate("/explore", { state: { category: "Recuperación" } })}
              className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-primary/20 cursor-pointer"
            >
              Explorar Portal de Recuperación
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;