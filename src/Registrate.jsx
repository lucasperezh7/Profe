import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };
  return (
    <>
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 font-bold text-base text-white bg-gray-700 rounded-lg
               hover:bg-yellow-600 focus:outline-none hover:ring-none hover:ring-blue-600 transition-colors duration-450 ease-in-out focus:opacity-80 focus:scale-105"
      >
        Únete a Reyesantos
      </button>
      {isOpen && (
        <div
          onClick={handleOverlayClick}
          className="modal-overlay fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white modal rounded-lg shadow-lg w-1/3">
            <div className="px-6 py-4">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  ¡Unadudaprofe te da la bienvenida!
                </h2>
                <h3 className="text-2xl font-bold text-gray-800">
                  Para continuar, inicia sesión en Unadudaprofe:
                </h3>
              </div>
              <form>
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
                    className="bg-gray-200 border border-gray-400 rounded py-2 px-4 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-200 border border-gray-400 rounded py-2 px-4 w-full"
                  />
                  <button
                    type="button"
                    className="ml-2 text-gray-500"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
            <div className="px-6 py-4"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
