import React from 'react';
import { useState } from 'react';

const Aula_status = () => {

  let [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(num++);
  };


  return (
    <div>
      <p>numero: {num}</p>
      <h3>Use states e evento clique </h3>
      <button onClick={handleClick} style={{padding:'1rem', background: 'green', color:'white', margin: '1rem 0', cursor: 'pointer'}}>Clique aqui</button>
      <hr />
    </div>
  );
};

export default Aula_status;
