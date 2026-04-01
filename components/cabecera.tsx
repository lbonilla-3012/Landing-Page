'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { abrirWhatsApp } from '@/lib/servicios'


export function Cabecera() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [scrollPasadoHero, setScrollPasadoHero] = useState(false)

  useEffect(() => {
    const manejarScroll = () => {
      // Detectar cuando el scroll pasa la altura del hero (aproximadamente 100vh)
      const alturaHero = window.innerHeight * 0.85
      setScrollPasadoHero(window.scrollY > alturaHero)
    }

    window.addEventListener('scroll', manejarScroll)
    return () => window.removeEventListener('scroll', manejarScroll)
  }, [])

  const manejarClickWhatsApp = () => {
    abrirWhatsApp('Hola 1001Talleres, me gustaría más información')
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrollPasadoHero 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="1001Talleres Logo"
              width={160}
              height={45}
              className="h-10 md:h-12"
              style={{ width: 'auto' }}
              priority
            />
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="#ubicaciones" 
              className={`font-medium transition-colors ${
                scrollPasadoHero 
                  ? 'text-marca-azul hover:text-marca-azul/80' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Ubicaciones
            </Link>
            <Link 
              href="#contacto" 
              className={`font-medium transition-colors ${
                scrollPasadoHero 
                  ? 'text-marca-azul hover:text-marca-azul/80' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Contacto
            </Link>
            <button
              onClick={manejarClickWhatsApp}
              className="flex items-center gap-2 bg-marca-amarillo text-marca-azul font-bold px-5 py-2.5 rounded-full hover:bg-yellow-400 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos
            </button>
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className={`md:hidden p-2 ${scrollPasadoHero ? 'text-marca-azul' : 'text-white'}`}
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuAbierto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        {menuAbierto && (
          <nav className={`md:hidden py-4 border-t ${
            scrollPasadoHero ? 'border-gray-200 bg-white' : 'border-white/20'
          }`}>
            <div className="flex flex-col gap-4">
              <Link 
                href="#ubicaciones" 
                className={`font-medium py-2 ${
                  scrollPasadoHero 
                    ? 'text-marca-azul hover:text-marca-azul/80' 
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setMenuAbierto(false)}
              >
                Ubicaciones
              </Link>
              <Link 
                href="#contacto" 
                className={`font-medium py-2 ${
                  scrollPasadoHero 
                    ? 'text-marca-azul hover:text-marca-azul/80' 
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setMenuAbierto(false)}
              >
                Contacto
              </Link>
              <button
                onClick={() => {
                  manejarClickWhatsApp()
                  setMenuAbierto(false)
                }}
                className="flex items-center justify-center gap-2 bg-marca-amarillo text-marca-azul font-bold px-5 py-3 rounded-full"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escríbenos
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
