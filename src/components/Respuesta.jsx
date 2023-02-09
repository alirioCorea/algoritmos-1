export default function Respuesta({ div, mod }) {
  return (
    <div>
      <p className="font-black text-3xl text-custom-text mb-5">
        DIV:{" "}
        <span className="font-black text-3xl text-custom-button mb-5">
          {div}
        </span>
      </p>
      <p className="font-black text-3xl text-custom-text mb-5">
        MOD:{" "}
        <span className="font-black text-3xl text-custom-button mb-5">
          {mod}
        </span>
      </p>
    </div>
  );
}
