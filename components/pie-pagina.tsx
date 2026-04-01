'use client'

import Image from 'next/image'
import Link from 'next/link'
import { obtenerUrlTerminos } from '@/lib/servicios'

export function PiePagina() {
  const urlTerminos = obtenerUrlTerminos()
  const añoActual = new Date().getFullYear()

  return (
    <footer className="bg-marca-azul text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="1001Talleres Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <Link href="#ubicaciones" className="hover:text-white transition-colors">
              Ubicaciones
            </Link>
            <Link href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
            <a
              href={urlTerminos}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Términos y Condiciones
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/60">
            © {añoActual} 1001Talleres. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
