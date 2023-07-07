import { juego } from './juego'
import { useJuegoMemoria } from '../hooks/useJuegoMemoria'

export function JuegoContext({ children }) {
  const objetoJuego = useJuegoMemoria()

  return (
    <juego.Provider value={objetoJuego}>
      <div>{children}</div>
    </juego.Provider>
  )
}
