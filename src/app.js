import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cadastro from './pages/cadastro.js';
import Login from './pages/login.js';
import Routes from './components/routes.js';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [Logado, setLogado] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<Cadastro usuarios={usuarios} setUsuarios={setUsuarios} />} />
        <Route path="/login" element={<Login usuarios={usuarios} setUsuarioLogado={setLogado} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute usuario={Logado}>
              <Notas usuario={Logado} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
