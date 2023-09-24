import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { defaultQuestions } from "../../utils/questions/defaultQuestion";
import { QuestionForm } from "../molecules/QuestionForm";
import { handleScrollToTop } from "../../utils/handleScrollTop";
import { useQuery } from "@tanstack/react-query";
import { dataFetcher } from "../../utils/dataFetcher";
import { LiffContext } from "../contexts/LiffContext";
import { timestamp } from "../../utils/timestamp";
import { testDataFetcher } from "../../utils/testDataFetcher";

import Question from "../../utils/types/questionType";
import { Question_1 } from "../../utils/questions/Question_1";
import { Question_2 } from "../../utils/questions/Question_2";
import { Question_3 } from "../../utils/questions/Question_3";


export const QuestionCard = () => {

  const contextValue = useContext(LiffContext);
  if (!contextValue) {
    return null;
  }
  const { lineId, liff } = contextValue;
  const timeStamp = timestamp();

  const cardRef = useRef<HTMLDivElement | null>(null);

  const { error, data } = useQuery({
    queryKey: ['data'],
    queryFn: testDataFetcher
  })

  const [askingQuestions, setAskingQestions] = useState<Question[]>(defaultQuestions);
  const [count, setCount] = useState(0);
  const [cardOpacity, setCardOpacity] = useState(1);

  const [answers, setAnswers] = useState<Record<number, any>>({});
  const handleAnswerChange = (id: number, answer: any) => {
    const newAnswers = { ...answers };
    newAnswers[id] = answer;
    setAnswers(newAnswers);
  }

  const onClickSendButton = async () => {
    setCount(prevCount => prevCount + 1);
    setCardOpacity(0.5);
    const postData = {
      timeStamp: timeStamp,
      lineId: lineId,
      content: answers
    };
    console.log(postData);
    const newData = await testDataFetcher()
    if(cardRef.current){ cardRef.current.scrollTop = 0; }
    handleScrollToTop('auto');
    if (count === 1) {
      setAskingQestions(Question_1);
    } else if (count === 2) {
      setAskingQestions(Question_2)
    } else if (count === 3) {
      setAskingQestions(Question_3)
    } else {
      liff.closeWindow();
    }
    setCardOpacity(1);
    setAnswers({});
  }

  if (error) {return 'もう一度開き直してください。'}

  return (
    <Box opacity={cardOpacity} p={4} h="95vh" w="100%" bgColor="teal.50">
      <Card h="90vH" overflow="auto" ref={cardRef}>
        {count == 0 && 
          <Box>
            <CardHeader>
              <Text>
                以下の質問に回答し、送信ボタンを押してください。
                あなたの回答に合わせて何度か質問しますので、よろしくお願いします。
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
                  onAnswerChange={(answer) => handleAnswerChange(elem.questionId, answer)}
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
