const correctImg = "https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png"
const wrongImg = "https://static.vecteezy.com/system/resources/previews/017/178/056/non_2x/red-cross-mark-on-transparent-background-free-png.png"


// result = {
//    question: {
//       question: "myQuestion",
//       bild: "url",
//       options: ["hello", "bye"],
//       answer: "hello",
//    },
//    yourAnswer: "hey"
// }

export const ScoreSectionItem = ({result}) => {
   const isCorrect = result.yourAnswer === result.question.answer;

   console.log(result)
   return (
      <div className="score-item-section">
         <div>
            Frage: {result.question.question}
            <br />
            Korrekte Antwort: {result.yourAnswer}
            {!isCorrect && (
               <>
                <br />
                Deine Antwort: {result.question.answer}
               </>
            )} 
         </div> 
         <div className="image">
            {isCorrect ? (
            <img src={correctImg} alt="" />
            ) : (
            <img src={wrongImg} alt="" />
            )}
         </div>
      </div> 
   );
}