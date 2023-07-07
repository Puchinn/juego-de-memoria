import { useState } from 'react'
import { crearTablero } from '../js/functions'
import { contenidoTarjetas } from '../js/consts'
import { encontrarPar } from '../js/functions'

const tableroInicial = crearTablero({ arrayDeContenido: contenidoTarjetas })

export function useTablero() {
  const [tablero, setTablero] = useState(tableroInicial)
  const [tarjetasEncontradas, setTarjetasEncontradas] = useState([])
  const [tarjetasSeleccionadas, setTarjetasSeleccionadas] = useState([])
  const [esperarAnimacion, setEsperarAnimacion] = useState(false)

  const tableroCompletado = tarjetasEncontradas.length === tablero.length

  const nuevoTablero = () => {
    const nuevoTablero = crearTablero({ arrayDeContenido: contenidoTarjetas })
    setTablero(nuevoTablero)
    setTarjetasEncontradas([])
    setTarjetasSeleccionadas([])
    setEsperarAnimacion(false)
  }

  const mostrarTablero = () => {
    if (esperarAnimacion) return
    setEsperarAnimacion(true)
    const copiaTablero = [...tarjetasSeleccionadas]
    const tableroMostrar = tablero.map((_, i) => i)
    setTarjetasSeleccionadas(tableroMostrar)
    setTimeout(() => {
      setTarjetasSeleccionadas(copiaTablero)
      setEsperarAnimacion(false)
    }, 1000)
  }

  const mostrarTarjeta = (indice) => {
    return (
      tarjetasEncontradas.includes(indice) ||
      tarjetasSeleccionadas.includes(indice)
    )
  }

  const seleccionarTarjeta = (indice) => {
    if (esperarAnimacion) return
    const estaSeleccionada = tarjetasSeleccionadas.includes(indice)
    const estaEncontrada = tarjetasEncontradas.includes(indice)

    if (!estaSeleccionada && !estaEncontrada) {
      setTarjetasSeleccionadas([...tarjetasSeleccionadas, indice])
      setTarjetasEncontradas([...tarjetasEncontradas, indice])
    }
  }

  if (tarjetasSeleccionadas.length === 2) {
    setEsperarAnimacion(true)
    const encontroPar = encontrarPar(tablero, tarjetasSeleccionadas)
    if (encontroPar) {
      setEsperarAnimacion(false)
    } else {
      setTimeout(() => {
        const tableroSinSeleccionadas = tarjetasEncontradas.filter(
          (i) => !tarjetasSeleccionadas.includes(i)
        )
        setTarjetasEncontradas(tableroSinSeleccionadas)
        setEsperarAnimacion(false)
      }, 500)
    }
    setTarjetasSeleccionadas([])
  }

  return {
    tablero,
    nuevoTablero,
    seleccionarTarjeta,
    mostrarTarjeta,
    tableroCompletado,
    mostrarTablero,
  }
}
