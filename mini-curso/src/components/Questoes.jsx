import React from "react";

export default function Questoes({ question, options, correct, onSelect }) {
  const [selected, setSelected] = React.useState(null);
  const [isCorrect, setIsCorrect] = React.useState(null);

  const handleSelect = (index) => {
    if (selected !== null) return; 
    setSelected(index);

    const acertou = index === correct;
    setIsCorrect(acertou);
    onSelect(acertou);
  };

  React.useEffect(() => {
    setSelected(null);
    setIsCorrect(null);
  }, [question]);

  return (
    <div className="questao-card">
      <h3>{question}</h3>

      {options.map((opt, idx) => {
        let className = "answer";
        if (selected !== null) {
          if (idx === selected) {
            className += isCorrect
              ? " correct"
              : " wrong";
          }
          if (idx === correct && !isCorrect) {
            className += " correct"; 
          }
        }

        return (
          <div
            key={idx}
            className={className}
            onClick={() => handleSelect(idx)}
          >
            {opt}
          </div>
        );
      })}

    
      {selected !== null && (
        <p
          className={`feedback-text ${
            isCorrect ? "feedback-correct" : "feedback-wrong"
          }`}
        >
          {isCorrect ? "✅ Você acertou!" : "❌ Você errou!"}
        </p>
      )}
    </div>
  );
}
