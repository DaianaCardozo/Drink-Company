import logo from "./assets/logo.png";
import hero from "./assets/hero.jpg";
import profesor from "./assets/profesor.jpg";

import daiana from "./assets/avatars/daiana.png";
import marcelo from "./assets/avatars/marcelo.jpg";
import martin from "./assets/avatars/martin.jpg";



import cursoAcademia from "./assets/cursos/cursoacademia.jpg";
import cursoInicial from "./assets/cursos/cursoinicial.jpg";
import barraMovil from "./assets/cursos/barramovil.jpg";
import cursoTiki from "./assets/cursos/cursotiki.jpg";


export default function App() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-white font-['Plus_Jakarta_Sans']">
      {/* HEADER (global) */}
      <header className="absolute top-0 left-0 right-0 z-30 border-b border-white/30">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-[80px]">
          <a href="#home" className="flex items-center -ml-20 translate-y-[3px]" aria-label="Ir al inicio">
            <img
              src={logo}
              alt="Drink Company"
              className="h-[115px] w-auto object-contain"
            />
          </a>

          <nav
  className="flex h-[72px] items-end gap-10 pb-3 text-lg font-semibold text-white/90"
  aria-label="Navegación principal"
>
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

      <main>
        {/* HERO */}
<section id="home" className="relative h-[640px] overflow-hidden">
  
  {/* IMAGEN + OVERLAYS */}
  <div className="absolute inset-0">
    <img
      src={hero}
      alt="Bartender preparando un cocktail"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
    <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
  </div>



  {/* CONTENIDO */}
  <div className="relative z-10 mx-auto max-w-7xl px-8 pt-16 md:pt-24">
    <div className="flex justify-between items-start">
      <div className="max-w-xl text-left">
        <h1 className="mt-5 text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
          Tu carrera como bartender empieza hoy
        </h1>

        <p className="mt-6 max-w-md text-white/80 text-[16px] leading-relaxed">
          Formación intensiva · Prácticas detrás de barra · Inserción laboral.
        </p>

        <div className="mt-30 flex flex-col sm:flex-row gap-4">

          <a
            href="#cursos"
            className="inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-7 py-3 text-sm font-semibold text-white hover:bg-[#A84E30] transition"
          >
            Ver próximos cursos
          </a>

          <a
  href="https://wa.me/5491154708191?text=Hola!%20Quiero%20información%20sobre%20los%20cursos%20de%20bartender.%20¿Podrían%20pasarme%20fechas,%20precios%20y%20modalidad?"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur px-7 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
>
  Inscribite por WhatsApp
</a>

        </div>
      </div>

      <aside className="hidden md:flex flex-col gap-6 pl-6 mt-14" aria-label="Indicadores de confianza">
        <div>
          <p className="text-2xl font-semibold text-white">+1200</p>
          <p className="text-sm text-white/70 tracking-wide">Alumnos formados</p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-white">Certificación</p>
          <p className="text-sm text-white/70 tracking-wide">Profesional</p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-white">4.9★</p>
          <p className="text-sm text-white/70 tracking-wide">en Google Maps</p>
        </div>
      </aside>
    </div>
  </div>

  {/* 🔥 DIFUMINADO INFERIOR DEL HERO */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-black/0 via-[#0F1115]/80 to-[#0F1115]" />

</section>

        {/* SECCIÓN: CURSOS (AHORA VA ACÁ) */}
        <section
          id="cursos"
          className="pt-6 pb-20 bg-gradient-to-b from-[#0F1115] via-[#0B0D10] to-[#0F1115]"
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-10">
              <h2 className="text-4xl font-semibold text-white">
                Elegí cómo empezar tu carrera en barra
              </h2>
              <p className="text-white/70 mt-3 max-w-2xl">
                Programas diseñados para distintos niveles, tiempos y objetivos
                profesionales.
              </p>
            </div>

            <ul
              className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch"
              aria-label="Listado de cursos"
            >
            
              <li>
                <a
                  href="#contacto"
                  className="group relative h-[360px] rounded-3xl overflow-hidden border border-black/10 shadow-sm block"
                >
                  {/* IMAGEN */}
                  <img
                    src={cursoInicial}
                    alt="Bartender Inicial"
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:opacity-0"
                  />

                  {/* CAPAS */}
                  <div className="absolute inset-0 bg-black/45 transition-opacity duration-300 group-hover:opacity-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                  {/* CONTENIDO (NORMAL) */}
                  <div className="relative z-10 h-full pl-5 pr-8 pt-6 pb-6 flex flex-col transition-opacity duration-200 group-hover:opacity-0">
                    <h3 className="text-white text-2xl font-semibold leading-tight max-w-[18ch]">
                      Bartender Inicial
                    </h3>

                    <div className="flex flex-col gap-3 mt-auto">
                      <span className="inline-flex w-fit text-[11px] tracking-widest uppercase font-semibold text-white/90 bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        Ideal para empezar
                      </span>

                      <p className="text-white/85 text-sm leading-relaxed max-w-[26ch]">
                        De cero a bartender.
                      </p>

                      <span className="inline-flex items-center text-white font-semibold">
                        Ver detalle →
                      </span>
                    </div>
                  </div>

                  {/* OVERLAY (HOVER) */}
                  <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="absolute inset-0 bg-black/95" />

                    <div className="relative h-full p-6 flex flex-col items-center justify-center text-center">
                      <p className="text-white text-lg font-semibold">
                        Lo que incluye esta formación
                      </p>

                      <p className="mt-3 text-white/90 text-sm leading-relaxed">
                        8 clases <br />
                        3 hs máximo <br />
                        1 vez por semana
                      </p>

                      <p className="mt-4 text-white/60 text-xs max-w-[26ch]">
                        Ideal para comenzar desde cero y ganar seguridad detrás de la barra
                      </p>

                      <a
  href="https://wa.me/5491154708191?text=Quiero%20reservar%20una%20clase.%20%C2%BFPodr%C3%ADan%20pasarme%20disponibilidad?"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
>
  Reservar clase
</a>

                    </div>
                  </div>
                </a>
              </li>

              

              <li>
                <a
                  href="#contacto"
                  className="group relative h-[360px] rounded-3xl overflow-hidden border border-black/10 shadow-sm block"
                >
                  {/* IMAGEN */}
                  <img
                    src={cursoAcademia}
                    alt="Carrera Bartender presencial"
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {/* CAPAS */}
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                  {/* CONTENIDO NORMAL */}
                  <div className="relative z-10 h-full pl-5 pr-8 pt-6 pb-6 flex flex-col transition-opacity duration-200 group-hover:opacity-0">
                    <h3 className="text-white text-2xl font-semibold leading-tight max-w-[18ch]">
                      Carrera Bartender Presencial
                    </h3>

                    <div className="flex flex-col gap-3 mt-auto">
                      <span className="inline-flex w-fit items-center gap-2 text-[11px] tracking-widest uppercase font-semibold text-white bg-[#C65D3A] px-3 py-1 rounded-full">
                        ⭐ Carrera profesional
                      </span>

                      <p className="text-white/85 text-sm leading-relaxed max-w-[26ch]">
                        Formate en academias reales y entrená detrás de barra.
                      </p>

                      <span className="inline-flex items-center text-white font-semibold">
                        Ver detalle →
                      </span>
                    </div>
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="absolute inset-0 bg-black/95" />

                    <div className="relative h-full p-6 flex flex-col items-center justify-center text-center">
                      <p className="text-white text-lg font-semibold">
                        Estructura del curso
                      </p>

                      <p className="mt-3 text-white/90 text-sm leading-relaxed">
                        6 clases totales <br />
                        4 encuentros virtuales <br />
                        2 encuentros presenciales
                      </p>

                      <p className="mt-4 text-white/60 text-xs max-w-[26ch]">
                        Práctica en academia real + acompañamiento
                      </p>

                     <a
  href="https://wa.me/5491154708191?text=Quiero%20inscribirme%20a%20la%20carrera%20de%20bartender.%20%C2%BFPodr%C3%ADan%20pasarme%20informaci%C3%B3n%20sobre%20fechas%20y%20requisitos?"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
>
  Inscribirme a la carrera
</a>

                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="#contacto"
                  className="group relative h-[360px] rounded-3xl overflow-hidden border border-black/10 shadow-sm block"
                >
                  {/* IMAGEN */}
                  <img
                    src={cursoTiki}
                    alt="Tiki Coctél Experience"
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {/* CAPAS */}
                  <div className="absolute inset-0 bg-black/45 transition-opacity duration-300 group-hover:opacity-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                  {/* CONTENIDO NORMAL */}
                  <div className="relative z-10 h-full pl-5 pr-8 pt-6 pb-6 flex flex-col transition-opacity duration-200 group-hover:opacity-0">
                    <h3 className="text-white text-2xl font-semibold leading-tight max-w-[18ch]">
                      Talleres 
                    </h3>

                    <div className="flex flex-col gap-3 mt-auto">
                      <span className="inline-flex w-fit text-[11px] tracking-widest uppercase font-semibold text-white/90 bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        Edición especial - TIKI
                      </span>

                      <p className="text-white/85 text-sm leading-relaxed max-w-[26ch]">
                        Workshop exclusivo: sabores exóticos y técnica profesional.
                      </p>

                      <span className="inline-flex items-center text-white font-semibold">
                        Ver detalle →
                      </span>
                    </div>
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="absolute inset-0 bg-black/95" />

                    <div className="relative h-full p-6 flex flex-col items-center justify-center text-center">
                      <p className="text-white text-lg font-semibold">
                        Agenda tu aventura hoy
                      </p>

                      <p className="mt-3 text-white/90 text-sm leading-relaxed">
                        1 clase <br />
                        4 hs <br />
                        Presencial
                      </p>

                      <p className="mt-4 text-white/60 text-xs max-w-[26ch]">
                        Incluye práctica guiada + material de apoyo
                      </p>

                      <a
  href="https://wa.me/5491154708191?text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20este%20taller."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
>
  Reservar taller
</a>

                    </div>
                  </div>
                </a>
              </li>
             <li>
  <a
    href="#contacto"
    className="group relative h-[360px] rounded-3xl overflow-hidden border border-black/10 shadow-sm block"
  >
    {/* IMAGEN */}
    <img
      src={barraMovil}
      alt="Servicio de barras móviles para eventos"
      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
    />

    {/* CAPAS */}
    <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

    {/* CONTENIDO NORMAL */}
    <div className="relative z-10 h-full pl-5 pr-8 pt-6 pb-6 flex flex-col transition-opacity duration-200 group-hover:opacity-0">
      <h3 className="text-white text-2xl font-semibold leading-tight max-w-[18ch]">
        Barras móviles para eventos
      </h3>

      <div className="flex flex-col gap-3 mt-auto">
        <span className="inline-flex w-fit text-[11px] tracking-widest uppercase font-semibold text-white/90 bg-white/20 backdrop-blur px-3 py-1 rounded-full">
          Premium Service
        </span>

        <p className="text-white/85 text-sm leading-relaxed max-w-[26ch]">
          Experiencia de coctelería profesional para bodas, empresas y celebraciones privadas.
        </p>

        <span className="inline-flex items-center text-white font-semibold">
          Consultar disponibilidad →
        </span>
      </div>
    </div>

    {/* OVERLAY */}
    <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <div className="absolute inset-0 bg-black/95" />

      <div className="relative h-full p-6 flex flex-col items-center justify-center text-center">
        <p className="text-white text-lg font-semibold">
          Servicio integral
        </p>

        <p className="mt-3 text-white/90 text-sm leading-relaxed">
          Barras móviles elegantes <br />
          Bartenders profesionales <br />
          Cristalería + insumos incluidos
        </p>

        <p className="mt-4 text-white/60 text-xs max-w-[26ch]">
          Montaje, operación y experiencia pensada para que tu evento sea inolvidable.
        </p>

        <a
  href="https://wa.me/5491154708191?text=Quiero%20pedir%20un%20presupuesto%20para%20un%20evento.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n?"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
>
  Solicitar presupuesto
</a>

      </div>
    </div>
  </a>
</li>

            </ul>
          </div>
        </section>

        {/* SECCIÓN: ¿POR QUÉ ELEGIRNOS?  */}
        <section className="relative z-20 -mt-24 pt-14 pb-24 rounded-t-[44px] bg-[#0F1115]">
          {/* Puente visual Hero → Sección */}
          <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-black/0 via-[#0F1115]/60 to-[#0F1115]" />

          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-semibold">
                ¿Por qué elegirnos?
              </h2>
            </div>

            <div className="grid md:grid-cols-[1.6fr_0.4fr] gap-8 items-start">
              {/* IZQUIERDA */}
              <div className="space-y-8">
                <div className="flex gap-3 flex-wrap">
                  <div className="px-5 py-3 rounded-full bg-white/10 border border-white/15 shadow-sm text-sm font-semibold whitespace-nowrap text-white">
                    +6 años formando profesionales
                  </div>

                  <div className="px-5 py-3 rounded-full bg-white/10 border border-white/15 shadow-sm text-sm font-semibold whitespace-nowrap text-white">
                    Certificación internacional profesional
                  </div>

                  <div className="px-5 py-3 rounded-full bg-white/10 border border-white/15 shadow-sm text-sm font-semibold whitespace-nowrap text-white">
                    Reconocimiento en AMBA
                  </div>
                </div>


                
                   {/* TEXTO AUTORIDAD */}
<div className="max-w-2xl">
  <p className="text-white/85 text-[17px] leading-relaxed">
   En <span className="font-semibold">Drink Company</span> formamos bartenders con un programa certificado y alineado a las exigencias reales de la industria. Brindamos capacitación técnica, práctica profesional y todos los materiales necesarios —recetarios y libreta de curso— para que aprendas con estructura, confianza y proyección laboral desde el primer día.
  </p>
</div>

                <div className="space-y-6 max-w-none md:translate-x-0" aria-label="Testimonios">
                  {/* 1 */}
                  <article
                    className="flex items-start justify-between gap-5 bg-black/20 backdrop-blur-sm border border-white/5 rounded-2xl p-5 transition hover:bg-black/25"
                    aria-label="Testimonio de Daiana C."
                  >
                    <div className="flex items-start gap-5 flex-1">
                      <img
                        src={daiana}
                        alt="Daiana C."
                        className="h-14 w-14 rounded-full object-cover"
                      />

                      <div>
                        <p className="text-[15px] leading-relaxed text-white/85">
                          “Empecé de cero y hoy ya estoy trabajando gracias a todo lo que aprendí. Ramiro es un guía claro, exigente y comprometido con tu crecimiento.”
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          — Daiana C · Bartender Profesional
                        </p>
                      </div>
                    </div>

                    <div className="text-[#C65D3A]/90 text-[18px] whitespace-nowrap">
                      ★★★★★
                    </div>
                  </article>

                  {/* 2 */}
                  <article
                    className="flex items-start justify-between gap-5 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-5 transition hover:bg-black/50"
                    aria-label="Testimonio de Martin R."
                  >
                    <div className="flex items-start gap-5 flex-1">
                      <img
                        src={martin}
                        alt="Martin R."
                        className="h-14 w-14 rounded-full object-cover"
                      />

                      <div>
                        <p className="text-[15px] leading-relaxed text-white/85">
                          “La dedicación y el nivel de enseñanza marcan la diferencia. Hoy aplico estas técnicas todos los días detrás de la barra.”
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          — Martin R. · Formación en Coctelería
                        </p>
                      </div>
                    </div>

                    <div className="text-[#C65D3A]/90 text-[18px] whitespace-nowrap">
                      ★★★★★
                    </div>
                  </article>

                  {/* 3 */}
                  <article
                    className="flex items-start justify-between gap-5 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-5 transition hover:bg-black/50"
                    aria-label="Testimonio de Marcelo G."
                  >
                    <div className="flex items-start gap-5 flex-1">
                      <img
                        src={marcelo}
                        alt="Marcelo G."
                        className="h-14 w-14 rounded-full object-cover"
                      />

                      <div>
                        <p className="text-[15px] leading-relaxed text-white/85">
                          “Gracias a esta formación hoy trabajo en barra y estoy poniendo en práctica todo lo aprendido.”
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          — Marcelo G. · Bartender Internacional
                        </p>
                      </div>
                    </div>

                    <div className="text-[#C65D3A]/90 text-[18px] whitespace-nowrap">
                      ★★★★☆
                    </div>
                  </article>
                </div>
              </div>

              {/* DERECHA */}
              <aside className="space-y-6 flex flex-col items-end md:-mt-10" aria-label="Profesor destacado">
                <h3 className="text-2xl font-semibold self-end w-[320px] text-left">
                  Profesores de calidad
                </h3>

                <div className="rounded-3xl overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-white/15 w-[320px]">
                  <img
                    src={profesor}
                    alt="Profesor de coctelería"
                    className="w-full h-[320px] object-cover"
                  />

                  <div className="pt-3 pb-6 px-6 bg-black/50">
                    <p className="text-lg font-semibold text-white -ml-1">
                      Ramiro Cardozo
                    </p>

                    <p className="text-sm text-white/60 mt-1">
                      Head Bartender · 10 años de experiencia
                    </p>
                  </div>
                </div>

               <a
  href="https://wa.me/5491154708191?text=Hola!%20Quiero%20hablar%20con%20un%20asesor%20sobre%20los%20cursos."
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full text-center bg-[#C65D3A] hover:bg-[#A84E30] text-white font-semibold py-3 rounded-xl transition"
>
  Hablar con un asesor
</a>

              </aside>
            </div>
          </div>
        </section>


      {/* SECCIÓN TRANSFORMACIÓN */}
<section className="relative pt-8 pb-24 bg-[#0B0D10]">
  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0F1115] to-transparent" />

        <div className="max-w-7xl mx-auto px-8">
       {/* TITULO */}
          <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
             De alumno a profesional
         </h2>

      <p className="mt-4 text-white/70 text-lg">
        Formamos profesionales preparados para trabajar detrás de una barra real.
      </p>
              </div>
         </div>
       </section>

{/* Espacio */}
<div className="h-16" />

      </main>

      <footer aria-label="Pie de página">{/* después lo armamos */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
      © {new Date().getFullYear()} Drink Company — Todos los derechos reservados.
    </div>
      </footer>
    </div>
  );
}
