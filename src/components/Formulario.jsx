import { useState } from "react";
import Alert from "./Alert";
export default function Formulario({ setDiv, setMod }) {
  const [dividendo, setDividendo] = useState('');
  const [divisor, setDivisor] = useState('');
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("Error: El campo no puede estar vacío");

  const handleSubmit = (e) => {
    setMod(0);
    setDiv(0);
    e.preventDefault();
    if([dividendo, divisor].includes('')){
      setMensaje("Error: El campo no puede estar vacío");
      setError(true);
    }else if(divisor == "0"){
      setMensaje("Error: El divisor no puede ser 0");
      setError(true);
    }else{
      setDiv(Math.floor(dividendo / divisor));
      setMod(dividendo % divisor);
      setError(false);
    }
  };

  return (
    <div className="bg-custom-white mx-1 md:mx-6 p-6 rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="dividendo"
            className="block font-bold text-custom-text uppercase"
          >
            Dividendo
          </label>
          <input
            type="number"
            value={dividendo}
            className="border-2 rounded border-custom-text w-full pl-1"
            onChange={(e) => setDividendo(e.target.value)}
            required
            onInvalid={(e) => {
              e.preventDefault();
              setError(true);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className="block font-bold text-custom-text uppercase"
          >
            Divisor
          </label>
          <input
            type="number"
            className="border-2 rounded border-custom-text w-full pl-1"
            value={divisor}
            onChange={(e) => setDivisor(e.target.value)}
            required
            onInvalid={(e) => {
              e.preventDefault();
              setError(true);
            }}
          />
        </div>
        <input
          type="submit"
          value={"Calcular"}
          className="bg-custom-button text-custom-text font-bold uppercase text-lg w-full py-2 rounded mb-5"
        />
      </form>
      {error && <Alert mensaje={mensaje} />}
    </div>
  );
}
