import React, { useState } from 'react';
import superheroNames from './tableauSuphero';

export default function SuperheroNameGenerator() {
  const [superheroName, setSuperheroName] = useState('');

  function generateSuperheroName() {
    const randomName = superheroNames[Math.floor(Math.random() * superheroNames.length)];
    setSuperheroName(randomName);
  }

  return (
    <div>
      <p>Salut {superheroNames[Math.floor(Math.random() * superheroNames.length)]}</p>
      <button onClick={generateSuperheroName}>Ce nom te plait pas ?</button>
    </div>
  );
}

