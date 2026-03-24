import HeaderCourseDetail from "../../components/ui/header/HeaderCourseDetail.jsx";
import SidebarUser from "../../components/ui/sidebar/SidebarUser.jsx";
import WeeklySession from "../../components/courses/WeeklySession.jsx";
import SpanTextUnderSymbol from "../../components/ui/spans/SpanTextUnderSymbol.jsx";
import SpanTextAsideSymbol from "../../components/ui/spans/SpanTextAsideSymbol.jsx";
import SpanStat from "../../components/ui/spans/SpanStat.jsx";

function CourseDetails() {
  return (
    <>
      {/* ACLARACION !!! Utilicé el primer archivo para empezar a copiar, hay que
      adaptar los componentes a volverse reutilizables o vamos a tener un buen
      de codigo repetido, de momento lo que quiero evitar es problemas con el
      estilo, estoy copiando el archivo tal cual lo tenemos pero estructurado en
      los componentes que voy viendo posibles */}
      <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
        <SidebarUser />
        <HeaderCourseDetail />
        <main className="ml-64 pt-24 px-12 pb-20">
          {/* Componente */}
          <section className="grid grid-cols-12 gap-12 mb-16">
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-end">
              <div className="mb-4">
                <span className="px-4 py-1.5 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-xs font-bold tracking-widest">
                  MINDFULNESS
                </span>
              </div>
              <h2 className="text-6xl font-extrabold text-on-surface tracking-tighter mb-6 leading-tight">
                Morning Yoga: <br />
                <span className="text-primary italic font-medium">
                  The Dawn Flow
                </span>
              </h2>
              <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl font-medium opacity-80">
                A restorative sequence designed to awaken the kinetic chains and
                center your breath before the high-intensity demands of the day.
              </p>
              <div className="flex items-center gap-8 mt-10">
                <SpanStat statTitle="Intensity" statState="" />
                <SpanStat statTitle="Duration" statState="45 Minutes" />
                <SpanStat statTitle="Difficulty" statState="All Levels" />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 relative">
              <div className="aspect-4/5 rounded-xl overflow-hidden bg-surface-container-low">
                <img
                  alt="Morning Yoga Session"
                  className="w-full h-full object-cover"
                  data-alt="Woman doing yoga in a bright serene studio with morning sun"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZQ8SK5SeOmnlP_0kVHJGGBYErgoc6LnT9OeENgckFinYPxMRwKMt-4WC2KDs3kSAfRkfoMCBscqGhUKrKJR3fawxerusAazGF2BNqYOyHtl3gWiuOLLMXaUYSuDNZax0IpP4pRSM05V6EejyPym5KCpCS2hWHomBlXNovEN6gTYzntsTEn5exldWx6MliyrAsMUaeIOd-AVf2VE_YxD1r-PpjFVLwCWu34lzKHBFESxTj7rOY48kXa3JnTwnCFjNMi_9ZXZjjv0Xw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_24px_rgba(76,100,85,0.06)] flex items-center gap-4 max-w-70">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img
                    alt="Instructor Profile"
                    className="w-full h-full object-cover"
                    data-alt="Professional yoga instructor smiling portrait"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGAhsvcurw-dHD50LJzAQgysD2gX5S2XxcdDXBPtPUci_I0uOicaavBJYmpXzxrO_QOsl6fN7dlFKwhqHXM02X8i14aEHhc_L5V_GWkk4k8POoPIVHgWygeIr3CvaCm8sJDPB4Z_7N99XSMLoLyvzd7SU01Lk1Pkw5L1zawN0M5nnhl-tL9OczM51e6MngNfDuurVrMF4xRjgiVqnEtykNkMKEnVZJwn7gHZQ5KrsyXZ-i1M7Iz0wifrn7wDrw7kf1Vnz_Icpp7Jxq"
                  />
                </div>
                <div>
                  <p className="text-xs text-outline font-bold tracking-wider">
                    LEAD INSTRUCTOR
                  </p>
                  <p className="text-sm font-bold text-on-surface">
                    Elena Valeska
                  </p>
                  <p className="text-[11px] text-primary italic">
                    Olympic Breath Coach
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Componente */}
          <div className="grid grid-cols-12 gap-10 items-start">
            {/* Left Column: Details */}
            <div className="col-span-12 lg:col-span-8 space-y-16">
              {/* Description */}
              <div>
                <h3 className="text-2xl font-bold text-on-surface tracking-tight mb-6">
                  About the Sanctuary Flow
                </h3>
                <div className="prose prose-stone max-w-none">
                  <p className="text-on-surface-variant leading-[1.8] text-lg font-medium opacity-90">
                    Our Morning Yoga session is more than just a workout; it is
                    a neurological reset. By combining Vinyasa fundamentals with
                    advanced myofascial release techniques, Elena guides
                    athletes through a process of 'kinetic awakening'.
                  </p>
                  <p className="mt-4 text-on-surface-variant leading-[1.8] text-lg font-medium opacity-90">
                    Expect a heavy focus on thoracic mobility, hip
                    decompression, and rhythmic breath-work that synchronizes
                    your heart rate variability (HRV) for optimal performance
                    readiness.
                  </p>
                </div>
              </div>
              {/* Equipment */}
              <div className="bg-surface-container-low p-10 rounded-xl">
                <h3 className="text-xl font-bold text-on-surface tracking-tight mb-8">
                  Sacred Essentials
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <SpanTextUnderSymbol
                    text={"Thick Mat"}
                    symbol={"floor_lamp"}
                  />
                  <SpanTextUnderSymbol text={"Yoga Blocks"} symbol={"chair"} />
                  <SpanTextUnderSymbol
                    text={"Hydration"}
                    symbol={"water_full"}
                  />
                  <SpanTextUnderSymbol
                    text={"Comfortable Wear"}
                    symbol={"checkroom"}
                  />
                </div>
              </div>
              {/* Schedule Section */}
              <div>
                <h3 className="text-2xl font-bold text-on-surface tracking-tight mb-8">
                  Weekly Sessions
                </h3>
                <div className="space-y-4">
                  {/* Session 1 */}
                  <WeeklySession
                    day={"MON"}
                    dayNumber={"12"}
                    activity={"Dawn Awakening"}
                    time={"06:30 AM — 07:15 AM"}
                    spotInfo={"8 SPOTS LEFT"}
                    buttonText={"Select Session"}
                  />

                  {/* Session 2 */}
                  <WeeklySession
                    day={"WED"}
                    dayNumber={"14"}
                    activity={"Mid-Week Mobility"}
                    time={"07:00 AM — 07:45 AM"}
                    spotInfo={"WAITLIST ONLY"}
                    buttonText={"Join Waitlist"}
                  />

                  {/* Session 3 */}
                  <WeeklySession
                    day={"FRI"}
                    dayNumber={"16"}
                    activity={"Flow to Friday"}
                    time={"06:30 AM — 07:15 AM"}
                    spotInfo={"12 SPOTS LEFT"}
                    buttonText={"Select Session"}
                  />
                </div>
              </div>
            </div>
            {/* Right Column: Enrollment Card */}
            <div className="col-span-12 lg:col-span-4 sticky top-24">
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(76,100,85,0.04)] border border-outline-variant/10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-1">
                      TOTAL INVESTMENT
                    </span>
                    <span className="text-4xl font-extrabold text-on-surface">
                      $240
                      <span className="text-lg font-medium text-on-surface-variant">
                        /course
                      </span>
                    </span>
                  </div>
                  <div className="bg-primary-fixed p-3 rounded-lg">
                    <span
                      className="material-symbols-outlined text-on-primary-fixed-variant"
                      style={{
                        fontVariationSettings: '"FILL" 1',
                      }} /* Adaptar esto, no se está mostrando */
                    >
                      eco
                    </span>
                  </div>
                </div>
                <div className="space-y-6 mb-10">
                  <SpanTextAsideSymbol
                    text={"12 Total Sessions Included"}
                    symbol={"event_available"}
                  />
                  <SpanTextAsideSymbol
                    text={"Access to In-Studio or Hybrid"}
                    symbol={"person_pin_circle"}
                  />
                  <SpanTextAsideSymbol
                    text={"Digital Pose Library Included"}
                    symbol={"library_books"}
                  />
                </div>
                <div className="space-y-4">
                  <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-3">
                    Enroll Now
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                  <button className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all">
                    Book a Single Spot
                  </button>
                </div>
                <p className="mt-8 text-center text-xs text-outline font-medium px-4">
                  Full course enrollment includes a complimentary consultation
                  with Elena Valeska.
                </p>
              </div>
              {/* Secondary Small Card: Recovery Insight */}
              <div className="mt-8 bg-primary/5 p-6 rounded-xl border border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">
                    analytics
                  </span>
                  <h4 className="text-sm font-bold text-primary">
                    Kinetic Benefit
                  </h4>
                </div>
                <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  Morning Yoga reduces cortisol levels by up to 22% compared to
                  standard cardio, accelerating recovery for afternoon sessions.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CourseDetails;
