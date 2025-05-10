import { useSelector } from 'react-redux';
import QuizCard from '../quizcard';
import { extractQuestionsWithUserData } from '../../helpers/extractQuestionWiUsrData';
import { shuffleArray } from '../../helpers/shuffleArray';

const ModalsPossibilityModule = () => {
  const data = useSelector((state) => state.modalspossibility.data);
  const tittle = "Modals of possibility"
  let allQuestions = extractQuestionsWithUserData(data)
  allQuestions =shuffleArray(allQuestions)
  return (
   <QuizCard allQuestions={allQuestions} tittle={tittle} />
  );
};

export default ModalsPossibilityModule;