import { contenidoTarjetas } from './consts'

const numeroRandom = (rango) => {
  return Math.trunc(Math.random() * rango)
}

export const crearTablero = ({ arrayDeContenido }) => {
  const nuevoTablero = new Array(arrayDeContenido.length * 2).fill(0)
  const longitudTablero = nuevoTablero.length
  contenidoTarjetas.forEach((ele) => {
    const comprobar = (numero) => {
      const posicionAleatoria = numeroRandom(longitudTablero)
      if (nuevoTablero[numero] === 0) {
        nuevoTablero[numero] = ele.valor
        return
      }
      return comprobar(posicionAleatoria)
    }
    comprobar(numeroRandom(longitudTablero))
    comprobar(numeroRandom(longitudTablero))
  })
  return nuevoTablero
}
