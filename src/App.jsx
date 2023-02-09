import Formulario from "./components/Formulario"
import Respuesta from "./components/Respuesta"
import Imagen from "./assets/img/instructor.svg"
import { useState } from "react"

function App() {
  const [div, setDiv] = useState(0);
  const [mod, setMod] = useState(0);
  return (
    <div className="h-screen">
      <div className="h-2/4">
        <div className="flex justify-center h-4/5">
          <img src={Imagen} alt="teacher"/>
        </div>
        <div className="flex justify-center">
          <h1 className="font-black text-3xl text-custom-text">Calculadora para el <span className="text-custom-button">DIV</span> y <span className="text-custom-button">MOD</span></h1>
        </div>
      </div>
      <div className="h-2/4">
        <div className="md:flex h-full">
          <div className="md:w-3/6 md:h-full">
          <Formulario
            setDiv={setDiv}
            setMod={setMod}
          />
          </div>
          <div className="md:w-3/6">
          <Respuesta
            div={div}
            mod={mod}
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
