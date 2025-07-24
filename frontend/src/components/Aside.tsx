import React from 'react'
import Logo from './Logo'

function Aside() {
  return (
    <aside className="w-64 bg-black border-gray-900 border-r p-4 hidden md:block">
        {/* Aquí puedes agregar enlaces de navegación, información del usuario, etc. */}
        <div>
            <Logo />
        </div>
        <nav >
            <ul className="space-y-2">
            <li><a href="#" className="text-white">Inicio</a></li>
            <li><a href="#" className="text-white">Busqueda</a></li>
            <li><a href="#" className="text-white">Mensajes</a></li>
            <li><a href="#" className="text-white">notificaciones</a></li>
            <li><a href="#" className="text-white">Crear</a></li>
            <li><a href="#" className="text-white">Perfil</a></li>
            </ul>
        </nav>
        <div className="mt-4">
            <h2 className="text-white">Mas</h2>
            <p className="text-gray-400">Loovesick - 2025</p>
        </div>
    </aside>
  )
}

export default Aside