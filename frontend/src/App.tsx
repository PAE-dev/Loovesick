import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Aside from './components/Aside';
import Main from './components/Main';
import Inicio from './pages/Inicio';
import Mensajes from './pages/Mensajes';
import Notificaciones from './pages/Notificaciones';
import Busqueda from './pages/Busqueda';
import Crear from './pages/Crear';
import Perfil from './pages/Perfil';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Aside />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/busqueda" element={<Busqueda />} />
          <Route path="/mensajes" element={<Mensajes />} />
          <Route path="/notificaciones" element={<Notificaciones />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/" element={<Inicio />} /> {/* Página por defecto */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;