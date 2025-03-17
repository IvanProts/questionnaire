import { ScreenType } from "@/constants/enum";

export interface Question {
    id: string;
    question?: string;
    screenType: ScreenType;
    options?: string[];
    next: string | Record<string, string>;
    placeholderKey?: string;
    statement?: string;
    description?: string;
    nextBasedOnQuestion?: string;
  }  

  export interface SurveysConfig {
    [surveyId: string]: Question[];
  }