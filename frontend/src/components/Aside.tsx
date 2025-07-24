import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Aside() {
  return (
    <aside className="w-64 bg-black border-gray-900 border-r p-4 flex flex-col">
      <div className="mb-10">
        <Logo />
      </div>
      <nav>
        <ul className="space-y-5">
          <li><Link to="/inicio" className="text-white">Inicio</Link></li>
          <li><Link to="/busqueda" className="text-white">Búsqueda</Link></li>
          <li><Link to="/mensajes" className="text-white">Mensajes</Link></li>
          <li><Link to="/notificaciones" className="text-white">Notificaciones</Link></li>
          <li><Link to="/crear" className="text-white">Crear</Link></li>
          <li><Link to="/perfil" className="text-white">Perfil</Link></li>
        </ul>
      </nav>
      <div className="mt-auto">
        <h2 className="text-white">Más</h2>
        <p className="text-gray-400">Loovesick - 2025</p>
      </div>
    </aside>
  );
}

export default Aside;