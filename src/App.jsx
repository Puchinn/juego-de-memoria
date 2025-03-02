import { Tablero } from "./components/Tablero";
import { Winner } from "./components/Winner";
import { useJuegoContext } from "./hooks/useJuegoContext";
import { tamaños } from "./js/consts";
import { Eye, EyeOff, RefreshCw } from "lucide-react";
import "./App.css";

const claves = Object.keys(tamaños);

function App() {
  const {
    reiniciarJuego,
    mostrarTablero,
    actualizarVelocidad,
    ocultarNumeros,
    motrarNumeros,
    actualizarTamaño,
    nuevoTablero,
    claseVelocidad,
    mostrarNumeracion,
    tamañoClase,
    movimientos,
    parejas,
  } = useJuegoContext();

  const botones = claves.map((tamaño) => (
    <button
      className={`py-1 transition-all px-3 md:px-10 ${
        tamañoClase === tamaño
          ? "bg-white text-black"
          : "bg-transparent text-gray-700"
      } rounded-sm`}
      onClick={() => {
        actualizarTamaño(tamaño);
        nuevoTablero(tamaños[tamaño].cartasUnicas);
      }}
      key={tamaño}
    >
      {tamaño}
    </button>
  ));

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-4 text-primary">
        Juego de Memoria
      </h1>

      {/* Información del juego */}
      <div className="flex flex-wrap py-2 justify-center gap-4 w-full">
        <div className="bg-gray-200/45 rounded-lg p-3 text-center min-w-24">
          <p className="text-sm text-gray-700">Movimientos</p>
          <p className="text-2xl font-bold">{movimientos}</p>
        </div>
        <div className="bg-gray-200/45 rounded-lg p-3 text-center min-w-24">
          <p className="text-sm text-gray-700">Parejas</p>
          <p className="text-2xl font-bold">
            {parejas[1]}/{parejas[0]}
          </p>
        </div>
      </div>

      <Tablero />
      <div className="flex flex-wrap justify-center gap-4 py-4">
        <button
          onClick={reiniciarJuego}
          className="btn-comenzar font-semibold border-gray-200 hover:bg-gray-100 transition-all border py-2 px-3 rounded-md gap-2 flex items-center"
        >
          <RefreshCw size={16} />
          Nuevo Tablero
        </button>
        <button
          className="btn-comenzar font-semibold border-gray-200 hover:bg-gray-100 transition-all border py-2 px-3 rounded-md gap-2 flex items-center"
          onClick={mostrarTablero}
        >
          {" "}
          <Eye size={16} /> Mostrar Tablero
        </button>
      </div>
      <Winner />
      <div className="flex flex-wrap justify-center gap-x-3">
        <div className="">
          <p className="text-center py-1 ">Velocidad</p>
          <div className="bg-gray-200/45 rounded-sm font-medium max-w-max flex gap-1 p-1 text-center">
            <button
              className={`py-1 transition-all px-3 ${
                claseVelocidad === "rapido"
                  ? "bg-white text-black"
                  : "bg-transparent text-gray-700"
              } rounded-sm`}
              onClick={() => actualizarVelocidad("rapido")}
            >
              Rapido
            </button>
            <button
              className={`py-1 transition-all px-3 ${
                claseVelocidad === "normal"
                  ? "bg-white text-black"
                  : "bg-transparent text-gray-700"
              } rounded-sm`}
              onClick={() => actualizarVelocidad("normal")}
            >
              Normal
            </button>
            <button
              className={`py-1 transition-all px-3 ${
                claseVelocidad === "lento"
                  ? "bg-white text-black"
                  : "bg-transparent text-gray-700"
              } rounded-sm`}
              onClick={() => actualizarVelocidad("lento")}
            >
              Lento
            </button>
          </div>
        </div>
        <div className="">
          <p className="text-center py-1">Numeros</p>
          <div className="bg-gray-200/45 font-medium rounded-sm max-w-max flex gap-1 p-1 text-center">
            <button
              className={`py-1 transition-all px-3 ${
                mostrarNumeracion
                  ? "bg-white text-black"
                  : "bg-transparent text-gray-700"
              } rounded-sm`}
              onClick={motrarNumeros}
            >
              Mostrar
            </button>
            <button
              className={`py-1 transition-all px-3 ${
                !mostrarNumeracion
                  ? "bg-white text-black"
                  : "bg-transparent text-gray-700"
              } rounded-sm`}
              onClick={ocultarNumeros}
            >
              Ocultar
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center pt-4 pb-1">Tamaño del Tablero</p>
        <div className="bg-gray-200/45 font-medium rounded-sm max-w-max mx-auto gap-1 p-1">
          {botones}
        </div>
      </div>
    </div>
  );
}

export default App;
