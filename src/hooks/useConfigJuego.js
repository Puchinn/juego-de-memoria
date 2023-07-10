import { useState } from 'react'
import { tamaños } from '../js/consts'

export function useConfigJuego() {
  const [velocidad, setVelocidad] = useState(500)
  const [claseVelocidad, setClaseVelocidad] = useState('normal')
  const [mostrarNumeracion, setMostrarNumeracion] = useState(false)
  const [tamañoTablero, setTamañotablero] = useState(tamaños['6x6'])

  const actualizarTamaño = (clase) => {
    setTamañotablero(tamaños[clase])
  }
  const actualizarVelocidad = (string) => {
    switch (string) {
      case 'rapido': {
        setVelocidad(200)
        setClaseVelocidad(string)
        break
      }
      case 'normal': {
        setVelocidad(800)
        setClaseVelocidad(string)
        break
      }
      case 'lento': {
        setVelocidad(1700)
        setClaseVelocidad(string)
        break
      }
      default: {
        setVelocidad(500)
        setVelocidad('normal')
      }
    }
  }

  const motrarNumeros = () => {
    setMostrarNumeracion(true)
  }

  const ocultarNumeros = () => {
    setMostrarNumeracion(false)
  }

  return {
    velocidad,
    actualizarVelocidad,
    claseVelocidad,
    mostrarNumeracion,
    ocultarNumeros,
    motrarNumeros,
    actualizarTamaño,
    tamañoTablero: tamañoTablero.cartasUnicas,
    tamañoClase: tamañoTablero.clase,
  }
}
