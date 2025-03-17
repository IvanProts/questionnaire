import Question from '@/components/Question';
import { notFound } from 'next/navigation';
import type { SurveysConfig } from '@/types/survey';
import { getSurveyQuestions } from '@/app/utils/helpers/getSurveyQuestions';
import surveyConfig from '@/data/surveys/relationshipSurvey.json';

const typedSurveys = surveyConfig as unknown as SurveysConfig;

export const generateStaticParams = async () => {
  const paths: { surveyId: string; id: string }[] = [];

  Object.keys(typedSurveys).forEach((surveyId: string) => {
    typedSurveys[surveyId].forEach((question) => {
      paths.push({ surveyId, id: question.id });
    });
  });

  return paths;
};

interface QuestionPageParams {
  params: Promise<{ surveyId: string; id: string }>;
}

export default async function QuestionPage({ params }: QuestionPageParams) {
  const { surveyId, id } = await params;

  const questions = getSurveyQuestions(surveyId);

  if (!questions) return notFound();

  const question = questions.find((q) => q.id === id);

  if (!question) return notFound();

  return <Question questionData={question} />;
}
