import { SCORM } from "../scorm/scorm-api-wrapper.js";
import React from "react";

export default function Conclusao({ score, onRestart }) {
  const percent = Math.round((score / 3) * 100);

  React.useEffect(() => {
    SCORM.completeCourse();
  }, []);

  let feedbackMessage;
  if (percent === 100) {
    feedbackMessage = "Incrível! Você é um verdadeiro Mestre do Café! Compartilhe seu sucesso!";
  } else if (percent >= 70) {
    feedbackMessage = "Excelente trabalho! Você está quase lá. Mais uma tentativa para a perfeição?";
  } else if (percent > 0) {
    feedbackMessage = "Bom começo! Continue praticando para se tornar um Mestre do Café!";
  } else {
    feedbackMessage = "Parece que há espaço para aprimoramento! Que tal tentar novamente para dominar a arte do café?";
  }

  const scoreStatusClass = percent >= 70 ? "high" : "low";

  return (
    <div className="conclusao-page">
      <div className="completion-card">
        <h1>Parabéns, Barista!</h1>
        <p className="subtitle">Você concluiu o mini-curso Mestre do Café!</p>

        <div className="score-section">
          <p>Sua Pontuação:</p>
          <span className={`score-value ${scoreStatusClass}`}>{percent}%</span>
        </div>

        <p className="feedback-text">{feedbackMessage}</p>
      </div>

      <div className="action-buttons">
        <button className="btn btn-primary" onClick={onRestart}>
          Refazer Curso
        </button>
      </div>
    </div>
  );
}
