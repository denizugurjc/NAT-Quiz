import { ButtonSection } from "./ButtonSection";
import { TopBar } from "./TopBar";
import { Question } from "./Question";
import { useState } from "react";
import { ScoreSection } from "./ScoreSection";
import { useEffect } from "react";
import { Confetti } from "./Confetti";

export const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [results, setResults] = useState(
    questions.map((question) => ({ question, yourAnswer: "" }))
  );

  const handleAnswerButtonClick = (selectedAnswer) => {
    results[currentQuestion].yourAnswer = selectedAnswer;
    setResults([...results]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setShowConfetti(true);
    }
  };

  useEffect(() => {
    let timer;
    if (showConfetti) {
      timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showConfetti]);

  return (
    <div className="question-section">
      {showScore ? (
        <>
          <Confetti />
          <ScoreSection
            results={results}
            time={timer}
            showConfetti={showConfetti}
          />
        </>
      ) : (
        <>
          <TopBar
            onTimeChange={(timer) => setTimer(timer)}
            text={`Frage ${currentQuestion + 1} von ${questions.length}`}
          />
          <Question
            text={questions[currentQuestion].question}
            img={questions[currentQuestion].bild}
          />
          <ButtonSection
            answers={questions[currentQuestion].options}
            onAnswer={handleAnswerButtonClick}
          />
        </>
      )}
    </div>
  );
};
