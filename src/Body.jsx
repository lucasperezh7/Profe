import { useState } from "react";
import BgImage from "./assets/Inicio.jpg";

function Portada() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Gracias por suscribirte con el correo electrónico ${email}!`);
  };

  const divStyle = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${BgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="h-96" style={divStyle}>
        <h1>huwiuhwie</h1>
      </div>
      <div className="bg-gradient-to-b from-gray-900 to-blue-600 h-screen flex flex-col justify-center items-center">
        <h1 className="text-white flex flex-initial text-5xl font-bold mb-8">
          Produce tu propia música de la mano de artistas con años de
          experiencia en "término técnico" de temas y beats musicales.
        </h1>
        <p className="text-white text-lg mb-16">
          En nuestro estudio podrás componer, grabar, ... tu música desde 0 y
          plasmar tus ideas sobre el Beat. Nosotros te ayudamos a conseguirlo.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-8 max-w-lg"
        >
          <h2 className="text-3xl font-bold mb-8">
            Suscríbete a mi newsletter
          </h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Suscribirse
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Portada;
