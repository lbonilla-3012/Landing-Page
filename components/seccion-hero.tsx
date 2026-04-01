'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, MessageCircle, MapPin, ShieldCheck, Car, Building2,ClipboardCheck } from 'lucide-react'
import { FormularioDiagnostico } from './formulario-diagnostico'

export function SeccionHero() {
  const [formularioAbierto, setFormularioAbierto] = useState(false)

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="Taller 1001Talleres en acción"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Overlay con gradiente más suave y desvaneciéndose */}
          <div className="absolute inset-0 bg-gradient-to-r from-marca-azul/80 via-indigo-700/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-marca-azul/70 via-indigo-800/30 to-transparent" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-40 flex flex-col items-center gap-8 text-center">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-marca-amarillo text-marca-azul font-bold text-sm md:text-base px-4 py-2 rounded-full animate-fade-in">
            <Clock className="w-5 h-5" />
            <span>SIN CITA PREVIA</span>
          </div>

          {/* Título */}
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight uppercase max-w-4xl text-balance">
            Más que un taller, una experiencia{' '}
            <span className="text-marca-amarillo">excepcional</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
            Diagnóstico <strong className="text-marca-amarillo">GRATIS de 20 puntos</strong>, mantenimiento
            preventivo y correctivo multimarca.
          </p>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <button
              onClick={() => setFormularioAbierto(true)}
              className="flex items-center justify-center gap-3 bg-marca-amarillo text-marca-azul font-bold text-base md:text-lg px-6 md:px-8 py-4 rounded-full cursor-pointer hover:bg-marca-amarillo/90 hover:scale-105 transition-all shadow-lg"
            >
              <ClipboardCheck className="w-6 h-6" />
              ¡Diagnóstico GRATIS ahora!
            </button>
            <Link
              href="#ubicaciones"
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-base md:text-lg px-6 md:px-8 py-4 rounded-full cursor-pointer hover:bg-white/10 transition-all"
            >
              <MapPin className="w-5 h-5" />
              Ver ubicaciones
            </Link>
          </div>

          {/* Características */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 text-white/90 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-marca-amarillo" />
              <span>Garantía en todos los servicios</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5 text-marca-amarillo" />
              <span>Todas las marcas</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-marca-amarillo" />
              <span>4 agencias en Ecuador</span>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Modal del formulario */}
      <FormularioDiagnostico 
        estaAbierto={formularioAbierto} 
        alCerrar={() => setFormularioAbierto(false)} 
      />
    </>
  )
}
