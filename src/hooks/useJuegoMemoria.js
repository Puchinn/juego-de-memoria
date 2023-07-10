import { useTablero } from './useTablero'
import { useConfigJuego } from './useConfigJuego'

export function useJuegoMemoria() {
  const {
    velocidad,
    actualizarVelocidad,
    claseVelocidad,
    mostrarNumeracion,
    ocultarNumeros,
    motrarNumeros,
    actualizarTamaño,
    tamañoTablero,
    tamañoClase,
  } = useConfigJuego()

  const {
    tablero,
    nuevoTablero,
    seleccionarTarjeta,
    mostrarTarjeta,
    tableroCompletado,
    mostrarTablero,
  } = useTablero({ velocidad: velocidad, tamañoTablero: tamañoTablero })

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
    actualizarVelocidad,
    claseVelocidad,
    mostrarNumeracion,
    ocultarNumeros,
    motrarNumeros,
    actualizarTamaño,
    tamañoClase,
    nuevoTablero,
  }
}
