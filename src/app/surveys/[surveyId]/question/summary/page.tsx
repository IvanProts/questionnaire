'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter, useParams } from 'next/navigation';
import { replacePlaceholders } from '@/app/utils/formatters/replacePlaceholders';
import { getSurveyQuestions } from '@/app/utils/helpers/getSurveyQuestions';
import { resetAnswers } from '@/store/questionnaireSlice';

export default function SummaryPage() {
  const { surveyId } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const answers = useSelector((state: RootState) => state.questionnaire.answers);
  const questions = getSurveyQuestions(surveyId as string);

  if (!questions) return <p>Survey not found.</p>;

  const answeredQuestions = questions.filter((question) => answers[question.id]);

  const handleComplete = () => {
    dispatch(resetAnswers());
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF0F0] px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Answers</h1>
      <div className="w-full max-w-lg space-y-4">
        {answeredQuestions.map((question) => (
          <div key={question.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-700">
              {replacePlaceholders(question.question || '', answers)}
            </h2>
            <p className="text-gray-600 mt-2">{answers[question.id]}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleComplete}
        className="mt-6 py-3 px-6 bg-gradient-to-r from-indigo-700 to-purple-500 text-white rounded-lg"
      >
        Complete Test
      </button>
    </div>
  );
}
