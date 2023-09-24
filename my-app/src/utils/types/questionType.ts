type Question = {
  questionId: number;
  question: string;
  format: "Bool" | "Value" | "Select" | "Text";
  choices?: string[];  
}

export default Question;