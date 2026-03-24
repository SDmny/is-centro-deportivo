import Header from "../components/ui/Header.jsx";
import Sidebar from "../components/ui/Sidebar.jsx";

function Home() {
  return (
    <>
      {/* ACLARACION !!! Utilicé el primer archivo para empezar a copiar, hay que
      adaptar los componentes a volverse reutilizables o vamos a tener un buen
      de codigo repetido, de momento lo que quiero evitar es problemas con el
      estilo, estoy copiando el archivo tal cual lo tenemos pero estructurado en
      los componentes que voy viendo posibles */}
      <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
        {/* Aqui van los componentes, el div de arriba es el body, pase mi
        intento a CourseDetails.jsx*/}
      </div>
    </>
  );
}

export default Home;
