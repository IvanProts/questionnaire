import Link from 'next/link';
import { FC } from 'react';
import { ROUTES } from '@/constants/routes';

const Home: FC = () => {
  const surveyId = 'relationshipSurvey';

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#FFF0F0] px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Welcome to the Questionnaire App</h1>
      <Link
        href={ROUTES.SURVEY_START(surveyId)}
        aria-label="Start Personality Test"
        className="mt-4 px-6 py-3 bg-gradient-to-r from-indigo-700 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90 transition"
      >
        Start a Test
      </Link>
    </main>
  );
};

export default Home;
