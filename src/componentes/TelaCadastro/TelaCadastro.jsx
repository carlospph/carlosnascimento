import React from 'react';
import { useState } from 'react';
import './TelaCadastro.css';

const TelaCadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const addNome = (e) => {
    setNome(e.target.value);
  };

  const addEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleClickValidate = (event) => {
    event.preventDefault();
    sendForm();
  };

  const sendForm = () => {
    if (!nome || !email) {
      alert('Preencha os campos');
    } else {
      alert('Dados enviados com sucesso');
      setNome('');
      setEmail('');
    }
  };

  return (
    <div className="cadastro__container">
      <h1>Tela de cadastro</h1>
      <hr />
      <form>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={addNome}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={addEmail}
          />
        </div>
        <div>
          <button type="submit" onClick={handleClickValidate}>
            Cadastrar
          </button>
        </div>
      </form>
      Nome = {nome}
      <br />
      Email = {email}
    </div>
  );
};

export default TelaCadastro;
