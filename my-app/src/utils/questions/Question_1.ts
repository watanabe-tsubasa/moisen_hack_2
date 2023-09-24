import Question from "../types/questionType";

export const Question_1: Question[] = [
  {
    "questionId": 11,
    "question": "身長",
    "format": "Value",
  },
  {
    "questionId": 12,
    "question": "体重",
    "format": "Value",
  },
  {
    "questionId": 13,
    "question": "既往歴を教えてください",
    "format": "Select",
    "choices": [
      '糖尿病','高血圧','脂質異常症','脳血管疾患','認知症','心不全','呼吸器疾患','悪性腫瘍','腎臓病・透析','膠原病','その他'
    ]
  },
  {
    "questionId": 14,
    "question": "アレルギーはありますか",
    "format": "Bool",
  },
  {
    "questionId": 15,
    "question": "アレルギーの詳細を教えてください",
    "format": "Text",
  },
  {
    "questionId": 16,
    "question": "現在内服薬を飲んでいますか",
    "format": "Text",
  },
  {
    "questionId": 17,
    "question": "喫煙をされますか",
    "format": "Bool",
  },
  {
    "questionId": 18,
    "question": "妊娠の可能性はありますか",
    "format": "Select",
    "choices": [
      'なし',
      '可能性あり',
      'あり'
    ]
  },
  {
    "questionId": 19,
    "question": "現在治療中の病気はありますか",
    "format": "Text",
  },
]