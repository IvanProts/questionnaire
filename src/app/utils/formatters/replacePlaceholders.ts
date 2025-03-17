import { Question } from '@/types/survey';
import { getSurveyQuestions } from '../helpers/getSurveyQuestions';

export const replacePlaceholders = (text: string, answers: Record<string, string>): string => {
  const placeholderMap = generatePlaceholderMap(getSurveyQuestions('relationshipSurvey')!);

  return text
    .replace(/\{([^}]+)\}/g, (_, key) => {
      if (key === 'who have children (if have children)') {
        return answers['3'] === 'Yes' ? 'who have children' : '';
      }

      const questionId = placeholderMap[key];
      return answers[questionId] || '';
    })
    .replace(/\s+/g, ' ')
    .trim();
};

const generatePlaceholderMap = (questions: Question[]) => {
  return questions.reduce(
    (acc, question) => {
      if (question.placeholderKey) {
        acc[question.placeholderKey] = question.id;
      }
      return acc;
    },
    {} as Record<string, string>,
  );
};
