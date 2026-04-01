import { Cabecera } from '@/components/cabecera'
import { SeccionHero } from '@/components/seccion-hero'
import { SeccionAgencias } from '@/components/seccion-agencias'
import { PiePagina } from '@/components/pie-pagina'

export default function PaginaInicio() {
  return (
    <main className="min-h-screen">
      <Cabecera />
      <SeccionHero />
      <SeccionAgencias />
      <PiePagina />
    </main>
  )
}
