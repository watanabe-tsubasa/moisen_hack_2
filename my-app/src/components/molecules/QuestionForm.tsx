import { Box, Text } from "@chakra-ui/react"
import Question from "../../utils/types/questionType"
import { CommonMenu } from "../atoms/CommonMenu";
import { CommonSlider } from "../atoms/CommonSlider";
import { CommonSwitch } from "../atoms/CommonSwitch";
import { CommonTextArea } from "../atoms/CommonTextArea";
import { useReducer } from "react";
import { reducer, initialState } from "../reducer/reducer";

type QuestionFormProps = Question & {
  onAnswerChange: (answer: any) => void;
}

export const QuestionForm: React.FC<QuestionFormProps> = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { questionId, question, format, choices, onAnswerChange } = props;
  const menuList = choices || [];

  let renderedComponent = null;

  switch (format) {
    case "Bool":
      renderedComponent = (
        <CommonSwitch
          state={state}
          dispatch={(action) => {
            dispatch(action);
            onAnswerChange(action.payload);
          }} />
        );
      break;
    case "Value":
      renderedComponent = (
        <CommonSlider
          state={state}
          dispatch={(action) => {
            dispatch(action);
            onAnswerChange(action.payload);
          }} />
        );
      break;
    case "Select":
      renderedComponent = (
        <CommonMenu
          menuList={menuList}
          state={state}
          dispatch={(action) => {
            dispatch(action);
            onAnswerChange(action.payload);
          }} />
        );
      break;
    case "Text":
      renderedComponent = (
        <CommonTextArea
          state={state}
          dispatch={(action) => {
            dispatch(action);
            onAnswerChange(action.payload);
          }} />
        );
      break;
    default:
      renderedComponent = null; // 未知のフォーマットの場合は何も表示しない
  } 

  return (
    <Box>
      <Text>{`${questionId}. ${question}`}</Text>
      {renderedComponent}
    </Box>
  )
}