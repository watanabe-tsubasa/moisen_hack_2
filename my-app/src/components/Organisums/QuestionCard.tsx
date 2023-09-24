import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { defaultQuestions } from "../../utils/defaultQuestion";
import { QuestionForm } from "../molecules/QuestionForm";
import { handleScrollToTop } from "../../utils/handleScrollTop";
import Question from "../../utils/types/questionType";
import { testQuestions } from "../../utils/testQuestionFisrt";
import { useQuery } from "@tanstack/react-query";
import { dataFetcher } from "../../utils/dataFetcher";
import { LiffContext } from "../contexts/LiffContext";

export const QuestionCard = () => {

  const contextValue = useContext(LiffContext);
  if (!contextValue) {
    // handle the null context value, e.g., by returning, throwing an error, etc.
    return null;
  }
  const { lineId } = contextValue;


  const cardRef = useRef<HTMLDivElement | null>(null);

  const { error, data } = useQuery({
    queryKey: ['data'],
    queryFn: dataFetcher
  })

  const [askingQuestions, setAskingQestions] = useState<Question[]>(defaultQuestions);
  const [isFirst, setIsFirst] = useState(true);
  const [cardOpacity, setCardOpacity] = useState(1);

  const [answers, setAnswers] = useState<any[]>([]);
  const handleAnswerChange = (id: number, answer: any) => {
    const newAnswers = [...answers];
    newAnswers[id] = answer;
    setAnswers(newAnswers);
  }

  const onClickSendButton = async () => {
    setIsFirst(false);
    setCardOpacity(0.5);
    console.log(answers);
    const newData = await dataFetcher()
    if(cardRef.current){ cardRef.current.scrollTop = 0; }
    handleScrollToTop('auto');
    setAskingQestions(testQuestions);
    setCardOpacity(1);
  }

  if (error) {return 'もう一度開き直してください。'}

  return (
    <Box opacity={cardOpacity} p={4} h="95vh" w="100%" bgColor="teal.50">
      <Card h="90vH" overflow="auto" ref={cardRef}>
        {isFirst && 
          <Box>
            <CardHeader>
              <Text>
                {lineId}
                以下の質問に回答し、送信ボタンを押してください。
                回答に合わせて３回質問いたします。
              </Text>
            </CardHeader>
            <Divider />
          </Box>}
        <CardBody>
          <Stack divider={<StackDivider />}>
            {askingQuestions.map((elem, idx) => {
              return (
                <QuestionForm
                  key={elem.questionId}
                  questionId={idx + 1}
                  question={elem.question}
                  format={elem.format}
                  choices={elem.choices}
                  onAnswerChange={(answer) => handleAnswerChange(idx, answer)}
                />
              )
            })}
          </Stack>
        </CardBody>
        <Divider color="blackAlpha.500" />
        <CardFooter justifyContent="center">
          <Button onClick={onClickSendButton} colorScheme="facebook">送信</Button>
        </CardFooter>
      </Card>
    </Box>
  );
}
