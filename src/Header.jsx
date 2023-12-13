import React from "react";
import Modal from "./Registrate";
import Logo from "./assets/react.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 sm:p-6">
        <div className="flex items-center">
          <h1 className="px-4 py-2 text-lg font-bold text-yellow-500">
            Reyes Santos
          </h1>

          <nav>
            <ul className="hidden sm:flex sm:items-center sm:ml-6">
              <li>
                <Link
                  to="Artistas"
                  href=""
                  className="mr-4 text-gray-500 hover:text-yellow-500"
                >
                  Artistas
                </Link>
              </li>
              <li>
                <Link
                  to="Nosotros"
                  href=""
                  className="mr-4 text-gray-500 hover:text-yellow-500"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="mr-4 text-gray-500 hover:text-yellow-500"
                >
                  Servicios
                </a>
              </li>
              <li>
                <Link
                  to="Contacto"
                  href=""
                  className="text-gray-500 hover:text-yellow-500"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-end">
          <Modal />
        </div>
      </div>
      <div className="flex items-center justify-center pb-16">
        <Link to="/">
          <img className="h-10 ml-1" src={Logo} alt="Logo de la empresa" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
