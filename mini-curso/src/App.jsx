import { useState, useEffect } from "react";
import BemVindo from "./pages/BemVindo.jsx";
import Quiz from "./pages/Quiz.jsx";
import Conclusao from "./pages/Conclusao.jsx";
import { SCORM } from "./scorm/scorm-api-wrapper.js";


export default function App() {
  const [page, setPage] = useState(1);
  const [score, setScore] = useState(0);

  const nextPage = () => setPage((prev) => prev + 1);
  const restartCourse = () => {
    setScore(0);
    setPage(1);
  };

  useEffect(() => {
    SCORM.init();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {page === 1 && <BemVindo onNext={nextPage} />}
      {page === 2 && <Quiz onNext={nextPage} score={score} setScore={setScore} />}
      {page === 3 && <Conclusao score={score} onRestart={restartCourse} />}
    </div>
  );
}
