import React from 'react';
import QuestionCard from './QuestionCard';

const QuestionDisplay = ({questions}) => {

    const questionAnswer = answer => {
        console.log(answer);
    }

    return <>
        <div className="mt-5">
            {questions.map(question => {
                if(!question.answered) {
                    return <QuestionCard key={question.question} question={question} questionAnswer={questionAnswer} />
                }
            }
            )}
        </div>
    </>
}

export default QuestionDisplay;
