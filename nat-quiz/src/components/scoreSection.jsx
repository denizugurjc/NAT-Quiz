import { ScoreSectionItem } from "./ScoreSectionItem"
import { Quiz } from "./Quiz";

export const ScoreSection = ({wrongAnswers, correctAnswers, time}) => {
    return ( 
        <>
            <h1>Du hast {correctAnswers.length} von {wrongAnswers.length + correctAnswers.length} Fragen in {time} Sekunden richtig beantwortet</h1>
            {wrongAnswers.map(() => {
                return (
                    <div className="score-section">
                        <ScoreSectionItem />
                    </div>
                )
            })}
        </>
    );
};