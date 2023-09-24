import Question from "../types/questionType";

export const defaultQuestions: Question[] = [
  {
    "questionId": 1,
    "question": "初診ですか？あるいは体調に変化がありましたか？",
    "format": "Bool",
  },
  {
    "questionId": 2,
    "question": "本日はどのような症状ですか？",
    "format": "Select",
    "choices": [
      "かぜっぽい",
      "頭が痛い",
      "お腹が痛い",
    ],
  },
]