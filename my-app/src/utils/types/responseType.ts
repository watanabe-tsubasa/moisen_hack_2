type responseType = {
  questions: [
    {
      questionId: number,
      question: string,
      format: string,
      choices?: string[]
    }
  ]
}

export default responseType;