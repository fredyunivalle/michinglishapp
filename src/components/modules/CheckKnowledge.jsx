import React from 'react';
import { useSelector } from 'react-redux';
import QuizCard from '../quizcard';
import { extractQuestionsWithUserData } from '../../helpers/extractQuestionWiUsrData';
import { shuffleArray } from '../../helpers/shuffleArray';

const CheckKnowledge = () => {
  const data = useSelector((state) => state.data.data);
  const tittle = "Check Your Knowledege"
  let allQuestions = extractQuestionsWithUserData(data)
  allQuestions =shuffleArray(allQuestions)

  return (
    
    <QuizCard allQuestions={allQuestions} tittle={tittle} />
  );
};

export default CheckKnowledge;