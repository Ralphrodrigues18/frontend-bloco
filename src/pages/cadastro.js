import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastro = ({ usuarios, setUsuarios }) => {
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //verificação se o email existe
    const emailExiste = usuarios.find((u) => u.email === form.email);
    if (emailExiste) {
      alert('Email já cadastrado!');
    } else {
      setUsuarios([...usuarios, { ...form, home: [] }]);
      alert('Cadastro realizado!');
      navigate('/login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      <input placeholder="Nome" onChange={(e) => setForm({ ...form, nome: e.target.value })} required />
      <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <input type="password" placeholder="Senha" onChange={(e) => setForm({ ...form, senha: e.target.value })} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastro;
