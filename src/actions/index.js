import { auth, db } from '../config/Fire';

export const addQuestionToUser = (questionData) => {
    auth.onAuthStateChanged(user => {
        if (user) {
            const questions = db.collection(`users/${user.uid}/questions`);
            questions.doc().set(questionData)
            .catch(err => console.error(err.message));
        } else {
            return 'User not logged in';
        }
    });
}

export const getQuestions = () => {
    let questions = [];
    auth.onAuthStateChanged(user => {
        if (user) {
            const questionsRef = db.collection(`users/${user.uid}/questions`);
            questionsRef.get()
            .then(data =>  questions=data.docs )
            .catch(err => console.error(err.message));
        }
    });
    return questions;
}