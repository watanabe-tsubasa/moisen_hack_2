import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { defaultQuestions } from "../../utils/defaultQuestion";
import { QuestionForm } from "../molecules/QuestionForm";
import { handleScrollToTop } from "../../utils/handleScrollTop";
import Question from "../../utils/types/questionType";
import { testQuestions } from "../../utils/testQuestionFisrt";
import { useQuery } from "@tanstack/react-query";
import { dataFetcher } from "../../utils/dataFetcher";

export const QuestionCard = () => {

  const cardRef = useRef<HTMLDivElement | null>(null);

  const { error, data } = useQuery({
    queryKey: ['data'],
    queryFn: dataFetcher
  })

  const [askingQuestions, setAskingQestions] = useState<Question[]>(defaultQuestions);
  const [isFirst, setIsFirst] = useState(true);
  const [cardOpacity, setCardOpacity] = useState(1);

  const onClickSendButton = async () => {
    setIsFirst(false);
    setCardOpacity(0.5);
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