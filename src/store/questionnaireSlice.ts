import { QuestionnaireState } from '@/types/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: QuestionnaireState = {
  answers: {},
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    saveAnswer: (state, action: PayloadAction<{ questionId: string; answer: string }>) => {
      state.answers[action.payload.questionId] = action.payload.answer;
    },
    resetAnswers: () => initialState,
  },
});

export const { saveAnswer, resetAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;

export const selectAnswers = (state: { questionnaire: QuestionnaireState }) => state.questionnaire.answers;
export const selectAnswerByQuestionId =
  (questionId: string) => (state: { questionnaire: QuestionnaireState }) =>
    state.questionnaire.answers[questionId];
