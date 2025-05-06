import React from 'react';
import Buttons from '../buttons/Buttons.jsx';

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="hero__container">
          <h2>Compre com o Vizinho, Conecte-se, Empreenda e Cresça</h2>
          <p>
            Uma comunidade vibrante para cooperados e compradores, impulsionando
            negócios e construindo um futuro colaborativo.
          </p>
          <Buttons contentButton="Explores os empreendedores"/>
        </div>
      </section>
    </>
  );
};

export default Hero;
