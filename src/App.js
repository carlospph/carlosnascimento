import React from 'react';
import './style.css';

import Hero from './componentes/hero/Hero';
import Buttons from './componentes/buttons/Buttons';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/Footer/Footer';

import Aula_status from './componentes/Aulas/Aula_status';
import TelaCadastro from './componentes/TelaCadastro/TelaCadastro';
import Header from './componentes/Header/Header';

export default function App() {
  return (
    <div>
      <Header/>
      <TelaCadastro/>
      
    </div>
  );
}
