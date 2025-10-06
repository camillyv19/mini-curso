import React from "react";


export default function BemVindo({ onNext }) {
  return (
    <div className="bemvindo-container">
      <h1>Bem-vindo ao <br/> curso Mestre em Café!</h1>
      <p>Descubra o mundo do café em 3 perguntas rápidas.<br/>
      Será que você é um verdadeiro amante do café?</p>
      <button onClick={onNext}>Avançar</button>
    </div>
  );
}
