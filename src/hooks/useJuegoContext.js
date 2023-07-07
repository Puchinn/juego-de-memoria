import { useContext } from 'react'
import { juego } from './../context/juego'

export function useJuegoContext() {
  return useContext(juego)
}
