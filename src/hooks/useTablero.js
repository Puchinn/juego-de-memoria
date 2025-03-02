import { useState } from "react";
import { crearTablero } from "../js/functions";
import { contenidoTarjetas } from "../js/consts";
import { encontrarPar } from "../js/functions";

const tableroInicial = crearTablero({
  arrayDeContenido: contenidoTarjetas,
  longitud: 18,
});

export function useTablero({ velocidad, tamañoTablero }) {
  const [tablero, setTablero] = useState(tableroInicial);
  const [tarjetasEncontradas, setTarjetasEncontradas] = useState([]);
  const [tarjetasSeleccionadas, setTarjetasSeleccionadas] = useState([]);
  const [esperarAnimacion, setEsperarAnimacion] = useState(false);
  const [movimientos, setMovimientos] = useState(0);
  const [parEncontrado, setParEncontrado] = useState(0);

  const tableroCompletado = tarjetasEncontradas.length === tablero.length;
  const parejas = [tablero.length / 2, parEncontrado];

  const nuevoTablero = (long = tamañoTablero) => {
    const nuevoTablero = crearTablero({
      arrayDeContenido: contenidoTarjetas,
      longitud: long,
    });
    setTablero(nuevoTablero);
    setTarjetasEncontradas([]);
    setTarjetasSeleccionadas([]);
    setEsperarAnimacion(false);
    setMovimientos(0);
    setParEncontrado(0);
  };

  const mostrarTablero = () => {
    if (esperarAnimacion) return;
    setEsperarAnimacion(true);
    const copiaTablero = [...tarjetasSeleccionadas];
    const tableroMostrar = tablero.map((_, i) => i);
    setTarjetasSeleccionadas(tableroMostrar);
    setTimeout(() => {
      setTarjetasSeleccionadas(copiaTablero);
      setEsperarAnimacion(false);
    }, 1000);
  };

  const mostrarTarjeta = (indice) => {
    return (
      tarjetasEncontradas.includes(indice) ||
      tarjetasSeleccionadas.includes(indice)
    );
  };

  const seleccionarTarjeta = (indice) => {
    if (esperarAnimacion) return;
    const estaSeleccionada = tarjetasSeleccionadas.includes(indice);
    const estaEncontrada = tarjetasEncontradas.includes(indice);

    if (!estaSeleccionada && !estaEncontrada) {
      setTarjetasSeleccionadas([...tarjetasSeleccionadas, indice]);
      setTarjetasEncontradas([...tarjetasEncontradas, indice]);
    }
  };

  if (tarjetasSeleccionadas.length === 2) {
    setMovimientos(movimientos + 1);
    setEsperarAnimacion(true);
    const encontroPar = encontrarPar(tablero, tarjetasSeleccionadas);
    if (encontroPar) {
      setEsperarAnimacion(false);
      setParEncontrado(parEncontrado + 1);
    } else {
      setTimeout(() => {
        const tableroSinSeleccionadas = tarjetasEncontradas.filter(
          (i) => !tarjetasSeleccionadas.includes(i)
        );
        setTarjetasEncontradas(tableroSinSeleccionadas);
        setEsperarAnimacion(false);
      }, velocidad);
    }
    setTarjetasSeleccionadas([]);
  }

  return {
    tablero,
    nuevoTablero,
    seleccionarTarjeta,
    mostrarTarjeta,
    tableroCompletado,
    mostrarTablero,
    movimientos,
    parejas,
  };
}
