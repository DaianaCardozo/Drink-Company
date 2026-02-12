import logo from "./assets/logo.png";
import hero from "./assets/hero.jpg";
import profesor from "./assets/profesor.jpg";



export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F1EC] text-[#1A1A1A] font-['Plus_Jakarta_Sans']">
      {/* HERO */}
      <section id="home" className="relative h-[720px] overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Bartender preparando un cocktail"
            className="h-full w-full object-cover"
          />

          {/* overlays pro */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
        </div>

        {/* HEADER */}
        <header className="absolute top-0 left-0 right-0 z-30 border-b border-white/30">
          <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-[72px]">
            {/* LOGO */}
            <a href="#home" className="flex items-center -ml-20">
              <img
                src={logo}
                alt="Drink Company"
                className="h-[113px] w-auto object-contain"
              />
            </a>

            {/* NAV */}
            <nav className="flex items-center gap-10 text-lg font-semibold text-white/90">
              <a href="#cursos" className="hover:text-white transition">
                Cursos
              </a>
              <a href="#servicios" className="hover:text-white transition">
                Servicios
              </a>
              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
            </nav>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-8 pt-16 md:pt-24">
          <div className="flex justify-between items-start">
            {/* TEXTO */}
            <div className="max-w-xl text-left">
              <h1 className="mt-5 text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
                Tu carrera como bartender empieza hoy
              </h1>

              <p className="mt-6 max-w-md text-white/80 text-[16px] leading-relaxed">
                Formación intensiva · Prácticas detrás de barra · Inserción
                laboral
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#cursos"
                  className="inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-7 py-3 text-sm font-semibold text-white hover:bg-[#A84E30] transition"
                >
                  Ver próximos cursos
                </a>

                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur px-7 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* TRUST BLOCK DERECHA */}
            <div className="hidden md:flex flex-col gap-6 pl-6 mt-14">
              <div>
                <p className="text-2xl font-semibold text-white">+1200</p>
                <p className="text-sm text-white/70 tracking-wide">
                  alumnos formados
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">
                  Certificación
                </p>
                <p className="text-sm text-white/70 tracking-wide">
                  profesional
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">4.9★</p>
                <p className="text-sm text-white/70 tracking-wide">
                  en Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      

      {/* SECCIÓN: ¿POR QUÉ ELEGIRNOS? */}
<section className="bg-[#F4F1EC] -mt-20 pt-10 pb-32 rounded-t-[40px] relative z-20">
  <div className="max-w-7xl mx-auto px-8">
  

      <h2 className="text-4xl md:text-5xl font-semibold mb-6 max-w-xl ml-20">
           ¿Por qué elegirnos?
              </h2>
           

    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* LADO IZQUIERDO */}
     {/* BADGES */}
    <div className="flex gap-3 mt-2">



  <div className="px-5 py-3 rounded-full bg-white border border-black/10 shadow-sm text-sm font-semibold whitespace-nowrap">
    +6 años formando bartenders
  </div>

  <div className="px-5 py-3 rounded-full bg-white border border-black/10 shadow-sm text-sm font-semibold whitespace-nowrap">
    Barra profesional
  </div>

  <div className="px-5 py-3 rounded-full bg-white border border-black/10 shadow-sm text-sm font-semibold whitespace-nowrap">
    Grupos reducidos
  </div>

</div>



    
{/* LADO DERECHO */}
<div className="transform -translate-y-24 space-y-6 flex flex-col items-end">


 <h3 className="text-2xl font-semibold self-end w-[320px] pr-6 text-left">
  Profesores de calidad
</h3>



  {/* CARD PROFESOR VERTICAL */}
  <div className="
    rounded-3xl
    overflow-hidden
    bg-white
    shadow-md
    border border-black/5
    max-w-[320px]
  ">

    {/* FOTO GRANDE */}
    <img
      src={profesor}
      alt="Profesor de coctelería"
      className="w-full h-[320px] object-cover"
    />

    {/* INFO */}
    <div className="p-6">
      <p className="text-lg font-semibold text-[#1A1A1A]">
        Ramiro Cardozo
      </p>

      <p className="text-sm text-[#1A1A1A]/60 mt-1">
        Head Bartender · 10 años de experiencia
      </p>

      <p className="text-sm text-[#1A1A1A]/75 mt-4 leading-relaxed">
        Especialista en coctelería clásica y moderna, con trayectoria en bares
        de alto volumen y formación de nuevos profesionales.
      </p>
    </div>

  </div>

  {/* BLOQUE NEGRO ORIGINAL */}
  <div className="bg-[#1A1A1A] text-white p-8 rounded-2xl shadow-lg max-w-[320px]">
    <p className="text-lg leading-relaxed text-white/90">
      Equipo docente con experiencia real detrás de barra: técnica, servicio,
      estándares profesionales y práctica enfocada a resultados.
    </p>
  </div>

</div>






    </div>
  </div>
</section>


      {/* (Opcional) Un poco de espacio para que veas scroll cómodo */}
      <div className="h-16" />
    </div>
  );
}
