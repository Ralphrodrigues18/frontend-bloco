import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ usuarios, setUsuarios }) => {
  const [form, setForm] = useState({ email: '', senha: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = usuarios.find((u) => u.email === form.email && u.senha === form.senha);
    if (usuario) {
      setUsuarios(usuario);
      navigate('/notas');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <input type="password" placeholder="Senha" onChange={(e) => setForm({ ...form, senha: e.target.value })} required />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
