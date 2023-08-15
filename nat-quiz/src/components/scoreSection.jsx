import { ScoreSectionItem } from "./ScoreSectionItem"
import "../allgemein.css"

// result = {
//    question: {
//       question: "myQuestion",
//       bild: "url",
//       options: ["hello", "bye"],
//       answer: "hello",
//    },
//    yourAnswer: "hey"
// }

export const ScoreSection = ({results, time}) => {
    const correctAnswers = results.filter((result) => result.yourAnswer === result.question.answer).length;
    const wrongAnswers = results.filter((result) => result.yourAnswer !== result.question.answer).length;

    return ( 
        <>
            <h1>Du hast {correctAnswers} von {wrongAnswers + correctAnswers} Fragen in {time} Sekunden richtig beantwortet</h1>
            {results.map((result) => {
                return (
                    <div className="score-section">
                        <ScoreSectionItem result={result}/>
                    </div>
                )
            })}
        </>
    );
};