import Formulario from "./components/Formulario";
import Respuesta from "./components/Respuesta";
import Imagen from "./assets/img/instructor.svg";
import { useState } from "react";

function App() {
  const [div, setDiv] = useState(0);
  const [mod, setMod] = useState(0);
  return (
    <div>
      <div className="flex flex-col">
        <div className="grow flex justify-center">
          <div className="sm:w-6/12 md:w-3/12">
            <img src={Imagen} alt="Imagen" className="w-full" />
          </div>
        </div>
        <div className="grow-0 pb-3">
          <h1 className="font-black text-3xl text-custom-text text-center">
            Calculadora para el <span className="text-custom-button">DIV</span>{" "}
            y <span className="text-custom-button">MOD</span>
          </h1>
        </div>
      </div>
      <div>
        <div className="md:flex">
          <div className="md:w-3/6 mb-5">
            <Formulario setDiv={setDiv} setMod={setMod} />
          </div>
          <div className="md:w-3/6 mb-5">
            <Respuesta div={div} mod={mod} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
