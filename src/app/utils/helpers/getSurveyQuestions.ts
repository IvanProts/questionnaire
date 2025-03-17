import surveyConfig from '@/data/surveys/relationshipSurvey.json';
import { Question, SurveysConfig } from '@/types/survey';

const typedConfig: SurveysConfig = surveyConfig as SurveysConfig;

export const getSurveyQuestions = (surveyId: string): Question[] | undefined => {
  return typedConfig[surveyId];
};
