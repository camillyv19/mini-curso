import React from "react";
import Questoes from "../components/Questoes.jsx";
import { SCORM } from "../scorm/scorm-api-wrapper.js";

export default function Quiz({ onNext, score, setScore }) {
  const perguntas = [
    {
      question: "1. Qual desses é um método de preparo de café?",
      options: ["Infusão Lunar", "Aeropress", "Torra Seca", "Gotejamento Solar"],
      correct: 1,
    },
    {
      question: "2. Qual tipo de grão é mais utilizado mundialmente?",
      options: ["Robusta", "Arábica", "Liberica", "Excelsa"],
      correct: 1,
    },
    {
      question: "3. Qual desses cafés é mais encorpado?",
      options: ["Espresso", "Latte", "Cappuccino"],
      correct: 0,
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState(Array(perguntas.length).fill(null));

  const handleSelect = (isCorrect) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = isCorrect;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < perguntas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Finaliza o quiz
      const totalCorrect = answers.filter((x) => x === true).length;
      setScore(totalCorrect);

      const percent = (totalCorrect / answers.length) * 100;
      const passed = percent >= 60;
      SCORM.recordScore(percent, passed);
      onNext();
    }
  };

  const progress = ((currentIndex + 1) / perguntas.length) * 100;

  return (
    <div className="quiz-container">
      {/* Barra de Progresso */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <h2>Quiz</h2>

      <Questoes
        key={currentIndex} 
        question={perguntas[currentIndex].question}
        options={perguntas[currentIndex].options}
        correct={perguntas[currentIndex].correct}
        onSelect={handleSelect}
      />

      <button
        onClick={handleNext}
        disabled={answers[currentIndex] === null}
      >
        {currentIndex === perguntas.length - 1 ? "Enviar" : "Próxima"}
      </button>
    </div>
  );
}
