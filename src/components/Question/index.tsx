'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { saveAnswer } from '@/store/questionnaireSlice';
import { useRouter, usePathname } from 'next/navigation';
import { replacePlaceholders } from '@/app/utils/formatters/replacePlaceholders';
import { ScreenType } from '@/constants/enum';
import Header from '../Header';
import Button from '../Button';
import { Question as QuestionType } from '@/types/survey';

interface QuestionProps {
  questionData: QuestionType;
}

const Question: React.FC<QuestionProps> = ({ questionData }) => {
  const { id, question, options, next, screenType, statement, description, nextBasedOnQuestion } =
    questionData;
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const answers = useSelector((state: RootState) => state.questionnaire.answers);

  const handleAnswer = (answer: string) => {
    dispatch(saveAnswer({ questionId: id, answer }));

    const nextId = typeof next === 'string' ? next : next[answer];
    router.push(pathname.replace(`/${id}`, `/${nextId}`));
  };

  const renderOptions = () =>
    options?.map((option) => (
      <Button
        key={option}
        text={option}
        isActive={answers[id] === option}
        onClick={() => handleAnswer(option)}
      />
    ));

  const handleInfoNext = () => {
    if (!nextBasedOnQuestion) return;
    const prevAnswer = answers[nextBasedOnQuestion];
    const nextQuestionId = typeof next === 'object' ? next[prevAnswer] : next;
    router.push(pathname.replace(`/${id}`, `/${nextQuestionId}`));
  };

  return (
    <div
      className={`flex flex-col items-center min-h-screen w-full ${
        screenType === ScreenType.INFO
          ? 'bg-gradient-to-b from-[#141333] via-[#202261] to-[#6939A2]'
          : 'bg-[#FFF0F0]'
      } px-6 py-10`}
    >
      <Header isDarkMode={screenType === ScreenType.INFO} />

      <div className="flex flex-col w-[330px] items-center justify-start flex-1 text-left">
        {question && (
          <h1
            className={`text-[24px] font-bold mb-6 text-center ${
              screenType === ScreenType.INFO ? 'text-white' : 'text-[#333333]'
            }`}
          >
            {replacePlaceholders(question, answers)}
          </h1>
        )}

        {screenType === ScreenType.SINGLE_CHOICE && (
          <div className="flex flex-col gap-3">{renderOptions()}</div>
        )}

        {screenType === ScreenType.STATEMENT && (
          <>
            {statement && <p className="font-bold text-center">{`"${statement}"`}</p>}
            <div className="mt-4 flex flex-col gap-3">{renderOptions()}</div>
          </>
        )}

        {screenType === ScreenType.INFO && (
          <div className="flex flex-col items-center text-center text-white w-[320px] max-w-lg">
            {description && <p className="text-[14px] leading-[25px] mt-4">{description}</p>}
            <button
              onClick={handleInfoNext}
              className="mt-6 py-3 px-6 bg-white text-[#6A3AA2] font-bold rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
