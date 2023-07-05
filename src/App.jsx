import { Tablero } from './Tablero'
import { useJuegoMemoria } from './hooks/useJuegoMemoria'
import { Winner } from './Winner'
import './App.css'

function App() {
  const {
    tablero,
    reiniciarJuego,
    handleClick,
    tarjetasReveladas,
    tarjetasSeleccionadas,
    mostrarTablero,
    hayGanador,
    ok,
  } = useJuegoMemoria()

  return (
    <div>
      <h1>Juego de memoria</h1>
      <div>
        <Tablero
          tablero={tablero}
          handleClick={handleClick}
          tarjetasReveladas={tarjetasReveladas}
          tarjetasSeleccionadas={tarjetasSeleccionadas}
        />
      </div>
      <div className='botones'>
        <button onClick={reiniciarJuego} className='btn-comenzar'>
          Nuevo Tablero
        </button>
        <button onClick={mostrarTablero}>Mostrar Tablero</button>
      </div>
      <Winner hayGanador={hayGanador} ok={ok} />
    </div>
  )
}

export default App
