import { useTablero } from './useTablero'

export function useJuegoMemoria() {
  const {
    tablero,
    nuevoTablero,
    seleccionarTarjeta,
    mostrarTarjeta,
    tableroCompletado,
    mostrarTablero,
  } = useTablero()

  const reiniciarJuego = () => {
    nuevoTablero()
  }

  const handleClick = (indice) => {
    seleccionarTarjeta(indice)
  }

  return {
    tablero,
    reiniciarJuego,
    handleClick,
    mostrarTarjeta,
    tableroCompletado,
    mostrarTablero,
  }
}
