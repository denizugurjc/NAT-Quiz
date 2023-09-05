import React from "react";
import { QuizSectionItem } from "./QuizSectionItem";
import "../App.css"

export const QuizSection = () => {

   return (
        <div className="container">
            <QuizSectionItem page="/flaggenQuiz" picture="https://cdn.pixabay.com/photo/2013/07/12/19/18/world-154527_1280.png" description="Flaggen"/>
            <QuizSectionItem page="/allgemeinQuiz" picture="https://cdn.pixabay.com/photo/2017/01/31/00/09/books-2022464_1280.png" description="Allgemeinwissen"/>
            <QuizSectionItem page="/tierQuiz" picture="https://cdn.pixabay.com/photo/2016/03/31/22/14/blue-1296931_1280.png" description="Tier"/>
        </div>
    )
}