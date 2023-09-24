import Question from "./types/questionType";

export const defaultQuestions: Question[] = [
  {
    "questionId": 1,
    "question": "default question script 1",
    "format": "Value",
  },
  {
    "questionId": 2,
    "question": "default question script 2",
    "format": "Value",
  },
  {
    "questionId": 3,
    "question": "default question script 3",
    "format": "Bool",
  },
  {
    "questionId": 4,
    "question": "default question script 4",
    "format": "Select",
    "choices": [
      "default selecter1",
      "default selecter2",
      "default selecter3",
      "default selecter4",
    ],
  },
  {
    "questionId": 5,
    "question": "default question script 5",
    "format": "Text",
  },
]