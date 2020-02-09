import React from 'react';

const QuestionCard = ({ question, questionAnswer }) => {

    const badgeClass = `badge badge-pill badge-${categoryColor[question.category]}`

    return <>
        <div className="card p-2 m-2 text-left">
            <div className="text-right">
                <span className={badgeClass}>
                    <small>
                        <strong>
                           {question.category}
                        </strong>
                    </small>
                </span>
            </div>
            <p>{question.question}</p>
            <div className="d-flex justify-content-center">
                <button name='yes' className="btn btn-sm btn-outline-primary m-2" onClick={ e => questionAnswer(e.target.name) }>Yes</button>            
                <button name='no' className="btn btn-sm btn-outline-primary m-2" onClick={ e => questionAnswer(e.target.name) }>No</button>            
            </div>
        </div>
    </>
}

const categoryColor = {
    'Health' : 'success',
    'Finance' : 'danger',
    'Relationship': 'primary'
}

export default QuestionCard;