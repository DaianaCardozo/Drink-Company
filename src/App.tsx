import { useState } from "react";
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
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [tarjetaActiva, setTarjetaActiva] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-[#0F1115] text-white font-['Plus_Jakarta_Sans']">

      {/* HEADER RESPONSIVE */}
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/30">
        <div className="mx-auto flex h-[80px] max-w-6xl items-center justify-between px-5 sm:px-8 md:h-[90px]">
          <a href="#home" className="flex items-center shrink-0 lg:-ml-27" aria-label="Ir al inicio" onClick={() => setMenuAbierto(false)}>
            <img src={logo} alt="Drink Company" className="h-[76px] w-auto object-contain md:h-[100px]" />
          </a>

          {/* Menú de escritorio */}
          <nav className="hidden items-center gap-10 text-lg font-semibold text-white/90 md:flex" aria-label="Navegación principal">
            <a href="#cursos" className="transition hover:text-white">Eventos</a>
            <a href="#servicios" className="transition hover:text-white">Servicios</a>
            <a href="#contacto" className="transition hover:text-white">Contacto</a>
          </nav>

          {/* Botón de menú para celulares */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 bg-black/30 md:hidden"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            aria-controls="menu-mobile"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto ? (
              <span aria-hidden="true" className="text-2xl leading-none">×</span>
            ) : (
              <span aria-hidden="true" className="flex flex-col gap-[5px]">
                <span className="block h-[2px] w-5 bg-white" />
                <span className="block h-[2px] w-5 bg-white" />
                <span className="block h-[2px] w-5 bg-white" />
              </span>
            )}
          </button>
        </div>
        {menuAbierto && (
          <nav id="menu-mobile" aria-label="Navegación móvil" className="absolute inset-x-0 top-[80px] flex flex-col gap-1 border-b border-white/15 bg-[#0F1115]/95 px-6 py-4 shadow-xl backdrop-blur-lg md:hidden">
            <a className="rounded-lg px-3 py-3 hover:bg-white/10" href="#cursos" onClick={() => setMenuAbierto(false)}>Eventos</a>
            <a className="rounded-lg px-3 py-3 hover:bg-white/10" href="#servicios" onClick={() => setMenuAbierto(false)}>Servicios</a>
            <a className="rounded-lg px-3 py-3 hover:bg-white/10" href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
          </nav>
        )}
      </header>

      <main>

        {/* HERO */}
        <section id="home" className="relative min-h-[690px] overflow-hidden sm:min-h-[640px]">

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
          <div className="relative z-10 mx-auto max-w-7xl px-5 pt-32 pb-24 sm:px-8 md:pt-32">

            <div className="flex flex-col items-start justify-between md:flex-row md:items-start">

              <div className="w-full max-w-xl text-left lg:-ml-10">

                <h1 className="mt-5 text-[clamp(2rem,8vw,3.5rem)] leading-[1.12] font-semibold tracking-tight text-white md:text-6xl md:leading-[1.1] md:max-w-[680px]">
                  Elevá tu evento con una experiencia de coctelería premium.
                </h1>


      <p className="mt-6 max-w-md text-sm text-white/80 leading-relaxed sm:text-[16px]">
        Barras móviles, coctelería de autor y servicio profesional para celebraciones únicas.
      </p>

        <div className="mt-10 flex flex-col gap-3 sm:mt-16 sm:flex-row sm:gap-4 lg:mt-30">

          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-7 py-3 text-sm font-semibold text-white hover:bg-[#A84E30] transition"
          >
            Cotizá tu evento
          </a>

          <a
  href="https://wa.me/5491154708191?text=Hola%2C%20quisiera%20consultar%20por%20el%20servicio%20de%20cocteler%C3%ADa%20para%20un%20evento."

  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur px-7 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
>
  Contactanos por WhatsApp
</a>

        </div>
      </div>

      <aside className="hidden lg:flex flex-col gap-6 pl-6 mt-14" aria-label="Indicadores de confianza">
        <div>
          <p className="text-2xl font-semibold text-white">Coctelería de autor</p>
          <p className="text-sm text-white/70 tracking-wide"> Experiencias diseñadas para cada ocasión</p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-white">10+ años </p>
          <p className="text-sm text-white/70 tracking-wide">De experiencia profesional</p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-white">Servicio premium</p>
          <p className="text-sm text-white/70 tracking-wide">Cada detalle hace la diferencia</p>
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
          className="pt-8 pb-20 bg-gradient-to-b from-[#0F1115] via-[#0B0D10] to-[#0F1115]"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                Una experiencia a la altura de cada ocasión
              </h2>
              <p className="text-white/70 mt-3 max-w-2xl">
                Desde celebraciones privadas hasta eventos corporativos, creamos propuestas de coctelería adaptadas a cada momento.
              </p>
            </div>

            <ul
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7 items-stretch"
              aria-label="Servicios para eventos" id="servicios"
            >
            
              <li>
                {/* Tarjeta táctil: tocar para abrir, volver a tocar para cerrar */}
                <div className="relative isolate h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-[#0F1115] shadow-sm sm:h-[420px] lg:hidden">
                  <img src={cursoInicial} alt="Bodas y celebraciones" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/35" />

                  {tarjetaActiva !== 0 && (
                    <button
                      type="button"
                      aria-label="Ver detalles de Bodas y celebraciones"
                      aria-expanded={false}
                      onClick={() => setTarjetaActiva(0)}
                      className="absolute inset-0 z-10 flex h-full w-full flex-col items-start justify-between p-6 text-left"
                    >
                      <h3 className="max-w-[18ch] text-2xl font-semibold leading-tight text-white">Bodas y celebraciones</h3>
                      <span className="rounded-full border border-white/25 bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">Tocá para ver detalles +</span>
                    </button>
                  )}

                  {tarjetaActiva === 0 && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-5 text-center sm:p-7">
                      <div className="absolute inset-0 bg-black/95" />
                      <button
                        type="button"
                        aria-label="Cerrar detalles de Bodas y celebraciones"
                        onClick={() => setTarjetaActiva(null)}
                        className="absolute inset-0 z-10 h-full w-full cursor-pointer"
                      />
                      <div className="pointer-events-none relative z-20 flex w-full flex-col items-center gap-3">
                        <p className="text-lg font-semibold text-white">Tu celebración, nuestra experiencia</p>
                        <p className="flex flex-col text-sm leading-relaxed text-white/90">
                        <span>Barras móviles personalizadas</span>
                        <span>Bartenders profesionales</span>
                        <span>Coctelería clásica y de autor</span>
                        </p>
                        <p className="max-w-[30ch] text-xs leading-relaxed text-white/65">Creamos experiencias únicas para acompañar los momentos más especiales.</p>
                        <a
                          href="https://wa.me/5491154708191?text=Hola%2C%20quisiera%20consultar%20por%20bodas%20y%20celebraciones%20de%20Drink%20Company."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto mt-3 inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition active:scale-[0.98]"
                        >Cotizar mi evento</a>
                        <button type="button" onClick={() => setTarjetaActiva(null)} className="pointer-events-auto mt-1 px-3 py-2 text-xs text-white/70 underline underline-offset-4">Cerrar detalles</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="group relative hidden h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#17191e] shadow-sm lg:block">
                  {/* IMAGEN */}
                  <img
                    src={cursoInicial}
                    alt="Bodas y celebraciones"
                    className="absolute inset-x-0 top-0 h-[195px] w-full object-cover transition-all duration-300 lg:inset-0 lg:h-full lg:group-hover:opacity-0"
                  />

                  {/* CAPAS */}
                  <div className="absolute inset-x-0 top-0 h-[195px] bg-black/45 transition-opacity duration-300 lg:inset-0 lg:h-full lg:group-hover:opacity-0" />
                  <div className="absolute inset-x-0 top-0 h-[195px] bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 lg:inset-0 lg:h-full lg:group-hover:opacity-0" />

                  {/* CONTENIDO (NORMAL) */}
                  <div className="relative z-10 flex h-[195px] flex-col pl-5 pr-8 pt-6 pb-6 transition-opacity duration-200 lg:h-full lg:group-hover:opacity-0">
                    <h3 className="text-white text-2xl font-semibold leading-tight max-w-[18ch]">
                      Bodas y celebraciones
                    </h3>

                    <div className="flex flex-col gap-3 mt-auto"> 

                  
                    </div>
                  </div>

                  {/* OVERLAY (HOVER) */}
                  <div className="relative z-20 opacity-100 transition-opacity duration-200 lg:absolute lg:inset-0 lg:z-30 lg:opacity-0 lg:group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[#17191e] lg:bg-black/95" />

                    <div className="relative flex h-full flex-col items-center justify-center p-5 text-center lg:p-6">
                      <p className="text-white text-lg font-semibold">
                        Tu celebración, nuestra experiencia
                      </p>

                      <p className="mt-3 text-white/90 text-sm leading-relaxed">
                        Barras móviles personalizadas <br />
                        Bartenders profesionales <br />
                        Coctelería clásica y de autor
                      </p>

                      <p className="mt-4 text-white/60 text-xs max-w-[26ch]">
                        Creamos experiencias únicas para acompañar los momentos más especiales. 
                      </p>

                      <a
  href="https://wa.me/5491154708191?text=Hola%2C%20quisiera%20consultar%20por%20el%20servicio%20de%20cocteler%C3%ADa%20para%20un%20evento."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
>
  Cotizar mi evento
</a>

                    </div>
                  </div>
                </div>
              </li>

              

              <li>
                {/* Tarjeta táctil: tocar para abrir, volver a tocar para cerrar */}
                <div className="relative isolate h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-[#0F1115] shadow-sm sm:h-[420px] lg:hidden">
                  <img src={cursoAcademia} alt="Eventos corporativos" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/35" />

                  {tarjetaActiva !== 1 && (
                    <button
                      type="button"
                      aria-label="Ver detalles de Eventos corporativos"
                      aria-expanded={false}
                      onClick={() => setTarjetaActiva(1)}
                      className="absolute inset-0 z-10 flex h-full w-full flex-col items-start justify-between p-6 text-left"
                    >
                      <h3 className="max-w-[18ch] text-2xl font-semibold leading-tight text-white">Eventos corporativos</h3>
                      <span className="rounded-full border border-white/25 bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">Tocá para ver detalles +</span>
                    </button>
                  )}

                  {tarjetaActiva === 1 && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-5 text-center sm:p-7">
                      <div className="absolute inset-0 bg-black/95" />
                      <button
                        type="button"
                        aria-label="Cerrar detalles de Eventos corporativos"
                        onClick={() => setTarjetaActiva(null)}
                        className="absolute inset-0 z-10 h-full w-full cursor-pointer"
                      />
                      <div className="pointer-events-none relative z-20 flex w-full flex-col items-center gap-3">
                        <p className="text-lg font-semibold text-white">Elevá la experiencia de tu evento</p>
                        <p className="flex flex-col text-sm leading-relaxed text-white/90">
                        <span>Barras profesionales para empresas</span>
                        <span>Coctelería clásica y de autor</span>
                        <span>Servicio adaptado a cada ocasión</span>
                        </p>
                        <p className="max-w-[30ch] text-xs leading-relaxed text-white/65">Una propuesta de coctelería que combina profesionalismo, calidad y atención a cada detalle.</p>
                        <a
                          href="https://wa.me/5491154708191?text=Hola%2C%20quisiera%20consultar%20por%20eventos%20corporativos%20de%20Drink%20Company."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto mt-3 inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition active:scale-[0.98]"
                        >Solicitar presupuesto</a>
                        <button type="button" onClick={() => setTarjetaActiva(null)} className="pointer-events-auto mt-1 px-3 py-2 text-xs text-white/70 underline underline-offset-4">Cerrar detalles</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="group relative hidden h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#17191e] shadow-sm lg:block">
                  {/* IMAGEN */}
                  <img
                    src={cursoAcademia}
                    alt="Eventos corporativos"
                    className="absolute inset-x-0 top-0 h-[195px] w-full object-cover transition-opacity duration-300 lg:inset-0 lg:h-full lg:group-hover:opacity-0"
                  />

                  {/* CAPAS */}
                  <div className="absolute inset-x-0 top-0 h-[195px] bg-black/50 transition-opacity duration-300 lg:inset-0 lg:h-full lg:group-hover:opacity-0" />
                  <div className="absolute inset-x-0 top-0 h-[195px] bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 lg:inset-0 lg:h-full lg:group-hover:opacity-0" />

                  {/* CONTENIDO NORMAL */}
                  <div className="relative z-10 flex h-[195px] flex-col pl-5 pr-8 pt-6 pb-6 transition-opacity duration-200 lg:h-full lg:group-hover:opacity-0">
                    <h3 className="text-white text-2xl font-semibold leading-tight max-w-[18ch]">
                      Eventos corporativos
                    </h3>

                    <div className="flex flex-col gap-3 mt-auto">
                      <span className="inline-flex w-fit items-center gap-2 text-[11px] tracking-widest uppercase font-semibold text-white bg-[#C65D3A] px-3 py-1 rounded-full">
                        ⭐ Descuento especial para empresas
                      </span>

                      
                    </div>
                  </div>

                  {/* OVERLAY */}
                  <div className="relative z-20 opacity-100 transition-opacity duration-200 lg:absolute lg:inset-0 lg:z-30 lg:opacity-0 lg:group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[#17191e] lg:bg-black/95" />

                    <div className="relative flex h-full flex-col items-center justify-center p-5 text-center lg:p-6">
                      <p className="text-white text-lg font-semibold">
                        Elevá la experiencia de tu evento
                      </p>

                      <p className="mt-3 text-white/90 text-sm leading-relaxed">
                        Barras profesionales para empresas<br />
                        Coctelería clásica y de autor<br />
                        Servicio adaptado a cada ocasión
                      </p>

                      <p className="mt-4 text-white/60 text-xs max-w-[26ch]">
                        Una propuesta de coctelería que combina profesionalismo, calidad y atención a cada detalle.
                      </p>

                    <a
  href="https://wa.me/5491154708191?text=Hola%2C%20quisiera%20consultar%20por%20el%20servicio%20de%20cocteler%C3%ADa%20para%20un%20evento."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
>
  Solicitar presupuesto
</a>

                    </div>
                  </div>
                </div>
              </li>

              <li>
                {/* Tarjeta táctil: tocar para abrir, volver a tocar para cerrar */}
                <div className="relative isolate h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-[#0F1115] shadow-sm sm:h-[420px] lg:hidden">
                  <img src={cursoTiki} alt="Fiestas privadas" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/35" />

                  {tarjetaActiva !== 2 && (
                    <button
                      type="button"
                      aria-label="Ver detalles de Fiestas privadas"
                      aria-expanded={false}
                      onClick={() => setTarjetaActiva(2)}
                      className="absolute inset-0 z-10 flex h-full w-full flex-col items-start justify-between p-6 text-left"
                    >
                      <h3 className="max-w-[18ch] text-2xl font-semibold leading-tight text-white">Fiestas privadas</h3>
                      <span className="rounded-full border border-white/25 bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">Tocá para ver detalles +</span>
                    </button>
                  )}

                  {tarjetaActiva === 2 && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-5 text-center sm:p-7">
                      <div className="absolute inset-0 bg-black/95" />
                      <button
                        type="button"
                        aria-label="Cerrar detalles de Fiestas privadas"
                        onClick={() => setTarjetaActiva(null)}
                        className="absolute inset-0 z-10 h-full w-full cursor-pointer"
                      />
                      <div className="pointer-events-none relative z-20 flex w-full flex-col items-center gap-3">
                        <p className="text-lg font-semibold text-white">Celebrá de una manera diferente</p>
                        <p className="flex flex-col text-sm leading-relaxed text-white/90">
                        <span>Barras móviles para celebraciones</span>
                        <span>Cócteles clásicos y personalizados</span>
                        <span>Bartenders profesionales</span>
                        </p>
                        <p className="max-w-[30ch] text-xs leading-relaxed text-white/65">Convertí tu cumpleaños, aniversario o celebración privada en una experiencia para recordar.</p>
                        <a
                          href="https://wa.me/5491154708191?text=Hola%2C%20quisiera%20consultar%20por%20fiestas%20privadas%20de%20Drink%20Company."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto mt-3 inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition active:scale-[0.98]"
                        >Cotizar mi fiesta</a>
                        <button type="button" onClick={() => setTarjetaActiva(null)} className="pointer-events-auto mt-1 px-3 py-2 text-xs text-white/70 underline underline-offset-4">Cerrar detalles</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="group relative hidden h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#17191e] shadow-sm lg:block">
                  {/* IMAGEN */}
                  <img
                    src={cursoTiki}
                    alt="Fiestas privadas"
                    className="absolute inset-x-0 top-0 h-[195px] w-full object-cover transition-opacity duration-300 lg:inset-0 lg:h-full lg:group-hover:opacity-0"
                  />

                  {/* CAPAS */}
                  <div className="absolute inset-x-0 top-0 h-[195px] bg-black/45 transition-opacity duration-300 lg:inset-0 lg:h-full lg:group-hover:opacity-0" />
                  <div className="absolute inset-x-0 top-0 h-[195px] bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 lg:inset-0 lg:h-full lg:group-hover:opacity-0" />

                  {/* CONTENIDO NORMAL */}
                  <div className="relative z-10 flex h-[195px] flex-col pl-5 pr-8 pt-6 pb-6 transition-opacity duration-200 lg:h-full lg:group-hover:opacity-0">
                    <h3 className="text-white text-2xl font-semibold leading-tight max-w-[18ch]">
                      Fiestas privadas
                    </h3>

                    <div className="flex flex-col gap-3 mt-auto">
                      <span className="inline-flex w-fit text-[11px] tracking-widest uppercase font-semibold text-white/90 bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                        Celebrá de una manera diferente
                      </span>

                        
                    </div>
                  </div>

                  {/* OVERLAY */}
                  <div className="relative z-20 opacity-100 transition-opacity duration-200 lg:absolute lg:inset-0 lg:z-30 lg:opacity-0 lg:group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[#17191e] lg:bg-black/95" />

                    <div className="relative flex h-full flex-col items-center justify-center p-5 text-center lg:p-6">
                      <p className="text-white text-lg font-semibold">
                        Agenda tu aventura hoy
                      </p>

                      <p className="mt-3 text-white/90 text-sm leading-relaxed">
                        Barras móviles para celebraciones<br />
                        Cócteles clásicos y personalizados <br />
                        Bartenders profesionales
                      </p>

                      <p className="mt-4 text-white/60 text-xs max-w-[26ch]">
                        Convertí tu cumpleaños, aniversario o celebración privada en una experiencia para recordar.
                      </p>

                      <a
  href="https://wa.me/5491154708191?text=Hola%2C%20quisiera%20consultar%20por%20el%20servicio%20de%20cocteler%C3%ADa%20para%20un%20evento."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
>
  Cotizar mi fiesta
</a>

                    </div>
                  </div>
                </div>
              </li>
              <li>
  {/* Tarjeta táctil: tocar para abrir, volver a tocar para cerrar */}
                <div className="relative isolate h-[380px] overflow-hidden rounded-3xl border border-white/10 bg-[#0F1115] shadow-sm sm:h-[420px] lg:hidden">
                  <img src={barraMovil} alt="Barras personalizadas" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/35" />

                  {tarjetaActiva !== 3 && (
                    <button
                      type="button"
                      aria-label="Ver detalles de Barras personalizadas"
                      aria-expanded={false}
                      onClick={() => setTarjetaActiva(3)}
                      className="absolute inset-0 z-10 flex h-full w-full flex-col items-start justify-between p-6 text-left"
                    >
                      <h3 className="max-w-[18ch] text-2xl font-semibold leading-tight text-white">Barras personalizadas</h3>
                      <span className="rounded-full border border-white/25 bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">Tocá para ver detalles +</span>
                    </button>
                  )}

                  {tarjetaActiva === 3 && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-5 text-center sm:p-7">
                      <div className="absolute inset-0 bg-black/95" />
                      <button
                        type="button"
                        aria-label="Cerrar detalles de Barras personalizadas"
                        onClick={() => setTarjetaActiva(null)}
                        className="absolute inset-0 z-10 h-full w-full cursor-pointer"
                      />
                      <div className="pointer-events-none relative z-20 flex w-full flex-col items-center gap-3">
                        <p className="text-lg font-semibold text-white">Una barra diseñada para tu evento</p>
                        <p className="flex flex-col text-sm leading-relaxed text-white/90">
                        <span>Propuestas a medida</span>
                        <span>Selección personalizada de cócteles</span>
                        <span>Presentación y servicio profesional</span>
                        </p>
                        <p className="max-w-[30ch] text-xs leading-relaxed text-white/65">Diseñamos una experiencia de coctelería que se adapta al estilo y la identidad de cada celebración.</p>
                        <a
                          href="https://wa.me/5491154708191?text=Hola%2C%20quisiera%20consultar%20por%20barras%20personalizadas%20de%20Drink%20Company."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto mt-3 inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition active:scale-[0.98]"
                        >Personalizar mi barra</a>
                        <button type="button" onClick={() => setTarjetaActiva(null)} className="pointer-events-auto mt-1 px-3 py-2 text-xs text-white/70 underline underline-offset-4">Cerrar detalles</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="group relative hidden h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-[#17191e] shadow-sm lg:block">
    {/* IMAGEN */}
    <img
      src={barraMovil}
      alt="Barras personalizadas"
      className="absolute inset-x-0 top-0 h-[195px] w-full object-cover transition-opacity duration-300 lg:inset-0 lg:h-full lg:group-hover:opacity-0"
    />

    {/* CAPAS */}
    <div className="absolute inset-x-0 top-0 h-[195px] bg-black/50 transition-opacity duration-300 lg:inset-0 lg:h-full lg:group-hover:opacity-0" />
    <div className="absolute inset-x-0 top-0 h-[195px] bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300 lg:inset-0 lg:h-full lg:group-hover:opacity-0" />

    {/* CONTENIDO NORMAL */}
    <div className="relative z-10 flex h-[195px] flex-col pl-5 pr-8 pt-6 pb-6 transition-opacity duration-200 lg:h-full lg:group-hover:opacity-0">
      <h3 className="text-white text-2xl font-semibold leading-tight max-w-[18ch]">
        Barras personalizadas
      </h3>

      <div className="flex flex-col gap-3 mt-auto">
        <span className="inline-flex w-fit text-[11px] tracking-widest uppercase font-semibold text-white/90 bg-white/20 backdrop-blur px-3 py-1 rounded-full">
          Premium Service
        </span>

        <p className="text-white/85 text-sm leading-relaxed max-w-[26ch]">
          Experiencia de coctelería profesional para bodas, empresas y celebraciones privadas.
        </p>

        
      </div>
    </div>

    {/* OVERLAY */}
    <div className="relative z-20 opacity-100 transition-opacity duration-200 lg:absolute lg:inset-0 lg:z-30 lg:opacity-0 lg:group-hover:opacity-100">
      <div className="absolute inset-0 bg-[#17191e] lg:bg-black/95" />

      <div className="relative flex h-full flex-col items-center justify-center p-5 text-center lg:p-6">
        <p className="text-white text-lg font-semibold">
          Una barra diseñada para tu evento
        </p>

        <p className="mt-3 text-white/90 text-sm leading-relaxed">
          Propuestas a medida <br />
          Selección personalizada de cócteles <br />
          Presentación y servicio profesional
        </p>

        <p className="mt-4 text-white/60 text-xs max-w-[26ch]">
          Diseñamos una experiencia de coctelería que se adapta al estilo y la identidad de cada celebración.
        </p>

        <a
  href="https://wa.me/5491154708191?text=Hola%2C%20quisiera%20consultar%20por%20el%20servicio%20de%20cocteler%C3%ADa%20para%20un%20evento."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm tracking-wide transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
>
  Personalizar mi barra
</a>

      </div>
    </div>
  </div>
</li>

            </ul>
          </div>
        </section>

        {/* SECCIÓN: ¿POR QUÉ ELEGIRNOS?  */}
        <section className="relative z-20 pt-14 pb-20 lg:-mt-24 lg:pb-24 rounded-t-[32px] lg:rounded-t-[44px] bg-[#0F1115]">
          {/* Puente visual Hero → Sección */}
          <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-black/0 via-[#0F1115]/60 to-[#0F1115]" />

          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                La experiencia Drink Company
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(260px,0.6fr)] gap-8 items-start">
              {/* IZQUIERDA */}
              <div className="space-y-8">
                <div className="flex gap-3 flex-wrap">
                  <div className="px-4 py-3 rounded-full bg-white/10 border border-white/15 shadow-sm text-xs sm:text-sm font-semibold text-white">
                    10+ años de experiencia
                  </div>

                  <div className="px-4 py-3 rounded-full bg-white/10 border border-white/15 shadow-sm text-xs sm:text-sm font-semibold text-white">
                    Coctelería de autor
                  </div>

                  <div className="px-4 py-3 rounded-full bg-white/10 border border-white/15 shadow-sm text-xs sm:text-sm font-semibold text-white">
                    Servicio personalizado
                  </div>
                </div>


                
                   {/* TEXTO AUTORIDAD */}
<div className="max-w-2xl">
  <p className="text-white/85 text-[17px] leading-relaxed">
    En <span className="font-semibold">Drink Company</span> transformamos cada celebración en una experiencia de coctelería única. Combinamos bartenders profesionales, propuestas personalizadas y atención a cada detalle para ofrecer un servicio que se adapta al estilo y las necesidades de cada evento.
  </p>
</div>

<div className="mt-8 grid gap-4 sm:grid-cols-3">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 h-2.5 w-12 rounded-full bg-[#C65D3A]" />
      
      <h3 className="text-lg font-semibold text-white"> <span>🍸</span>Coctelería de calidad</h3>
      <p className="mt-2 text-sm text-white/70">
        Una selección de cócteles clásicos y de autor, preparados con técnica, creatividad y atención a la presentación.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 h-2.5 w-12 rounded-full bg-[#C65D3A]" />
      <h3 className="text-lg font-semibold text-white">✨Atención profesional</h3>
      <p className="mt-2 text-sm text-white/70">
        Bartenders con experiencia que brindan un servicio cuidado, dinámico y adaptado al ritmo de cada celebración.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 h-2.5 w-12 rounded-full bg-[#C65D3A]" />
      <h3 className="text-lg font-semibold text-white">⭐Experiencias a medida</h3>
      <p className="mt-2 text-sm text-white/70">
        Propuestas personalizadas según el tipo de evento, la cantidad de invitados y las preferencias de cada cliente.
      </p>
    </div>
  </div>


                <div className="space-y-6 max-w-none md:translate-x-0" aria-label="Testimonios">
                  {/* 1 */}
                  <article
                    className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-5 bg-black/20 backdrop-blur-sm border border-white/5 rounded-2xl p-5 transition hover:bg-black/25"
                    aria-label="Maria Florencia Gonzalez"
                  >
                    <div className="flex min-w-0 items-start gap-3 sm:gap-5 flex-1">
                      <img
                        src={daiana}
                        alt="Maria Florencia Gonzalez "
                        className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
                      />

                      <div>
                        <p className="text-[15px] leading-relaxed text-white/85">
                            "todo excelente ! súper recomendable ⭐️⭐️⭐️⭐️⭐️
                            La barra impecable y Ramiro un genio y buena onda. Muy atento y copado con todos los invitados.
                            El cumpleaños salió hermoso y todos encantados con los tragos 🍸🩷

                            es la segunda vez que contratamos el servicio y sin duda vamos a volver a hacerlo !"
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          — Maria Florencia Gonzalez · Cliente de Drink company
                        </p>
                      </div>
                    </div>

                    <div className="text-[#C65D3A]/90 text-[18px] whitespace-nowrap">
                      ★★★★★
                    </div>
                  </article>

                  {/* 2 */}
                  <article
                    className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-5 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-5 transition hover:bg-black/50"
                    aria-label="Testimonio de Martin R."
                  >
                    <div className="flex min-w-0 items-start gap-3 sm:gap-5 flex-1">
                      <img
                        src={martin}
                        alt="Martin R."
                        className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
                      />

                      <div>
                        <p className="text-[15px] leading-relaxed text-white/85">
                          “Excelente servicio, si estás buscando contratar una barra que te ofrezca bebidas y tragos de calidad, no dudes en contratar a Ramiro y a su equipo. Estuvieron en el cumpleaños de 15 de mi hija en Victoria PALACE y los volveremos a contratar para los 50 de marido. Cumplieron con todo y mucho más.”
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          — Maria Alison · Cliente de Drink company
                        </p>
                      </div>
                    </div>

                    <div className="text-[#C65D3A]/90 text-[18px] whitespace-nowrap">
                      ★★★★★
                    </div>
                  </article>

                  {/* 3 */}
                  <article
                    className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-5 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-5 transition hover:bg-black/50"
                    aria-label="Testimonio de Marcelo G."
                  >
                    <div className="flex min-w-0 items-start gap-3 sm:gap-5 flex-1">
                      <img
                        src={marcelo}
                        alt="Marcelo G."
                        className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
                      />

                      <div>
                        <p className="text-[15px] leading-relaxed text-white/85">
                          “Impecable servicio, buena onda y predisposición, muy buena calidad, la verdad están en todo! Súper recomendable! ☺️”
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">
                          — Sabrina GFonzalez · Cliente de Drink company
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
<aside className="space-y-6 flex flex-col items-stretch lg:items-end lg:-mt-10" aria-label="Profesor destacado">
  <h3 className="text-2xl font-semibold w-full lg:max-w-[320px] text-left">
    Profesionales de calidad
  </h3>

  <div className="rounded-3xl overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-white/15 w-full lg:max-w-[320px]">
    <img
      src={profesor}
      alt="Profesor de coctelería"
      className="w-full h-[320px] object-cover"
    />

    <div className="pt-3 pb-6 px-6 bg-black/50">
      <div className="flex items-center gap-2">
  <p className="text-lg font-semibold text-white -ml-1">
    Ramiro Cardozo
  </p>

  <a
  href="https://www.instagram.com/_u/ramacocktail12/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Ramiro Cardozo"
  className="inline-flex items-center ml-2"
>
  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="igREAL" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497"/>
        <stop offset="5%" stopColor="#fdf497"/>
        <stop offset="45%" stopColor="#fd5949"/>
        <stop offset="60%" stopColor="#d6249f"/>
        <stop offset="90%" stopColor="#285AEB"/>
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#igREAL)" />
    <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.4" fill="white"/>
  </svg>
</a>



</div>




      <p className="text-sm text-white/60 mt-1">
        Head Bartender · 10 años de experiencia
      </p>
    </div>
  </div>

  <a
    href="https://wa.me/5491154708191?text=Hola%2C%20quisiera%20consultar%20por%20el%20servicio%20de%20cocteler%C3%ADa%20para%20un%20evento."
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

       {/* PRE FOOTER — CIERRE EMOCIONAL */}
<section className="relative pt-10 pb-20 bg-[#0F1115]">

  {/* puente suave DESDE la sección anterior */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0F1115] to-transparent" />

  {/* puente suave HACIA el footer */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0B0D10]" />

  <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
      Hagamos de tu evento algo extraordinario.
      </h2>


    <p className="mt-5 text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
      Contanos qué estás planeando y diseñemos juntos una experiencia de coctelería a la altura de tu celebración.
    </p>

    <a
      href="https://wa.me/5491154708191"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-10 px-8 py-4 rounded-full bg-[#C65D3A] hover:bg-[#A84E30] text-white font-semibold transition-transform hover:scale-[1.03]"
    >
      Cotizá tu evento
    </a>
  </div>
</section>

          </main>

    

      <footer id="contacto" className="bg-[#0B0D10]">

        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 items-start">

            {/* MARCA */}
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Drink Company
              </h3>

              <p className="mt-3 text-white/60 max-w-xs">

                Experiencias de coctelería, barras móviles y servicio profesional para eventos y celebraciones.
              </p>
            </div>

            {/* CONTACTO */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-white/40">
                Contacto
              </h4>

              <ul className="mt-4 space-y-2 text-white/70">
                <li>info@drinkcompany.com</li>
                <li>+54 9 1154708191</li>
              </ul>
            </div>

            {/* REDES */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-white/40">
                Seguinos
              </h4>

              <div className="mt-4 flex gap-4">
                <a
  href="https://www.instagram.com/drink.company_barras/?hl=es-la"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/70 hover:text-white transition-colors"
>
  Instagram
</a>

<a
  href="https://www.facebook.com/ramiiroc07"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/70 hover:text-white transition-colors"
>
  Facebook
</a>

              </div>
            </div>

          </div>

          {/* LINEA INFERIOR */}
          <div className="mt-16 pt-6 border-t border-white/10 text-center text-white/40 text-sm">
            © {new Date().getFullYear()} Drink Company — Todos los derechos reservados.
          </div>

        </div>
      </footer>

    </div>
  );
}
