import { Box, Text } from "@chakra-ui/react"
import Question from "../../utils/types/questionType"
import { CommonMenu } from "../atoms/CommonMenu";
import { CommonSlider } from "../atoms/CommonSlider";
import { CommonSwitch } from "../atoms/CommonSwitch";
import { CommonTextArea } from "../atoms/CommonTextArea";
import { useReducer } from "react";
import { reducer, initialState } from "../reducer/reducer";

export const QuestionForm: React.FC<Question> = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { questionId, question, format, choices } = props;
  const menuList = choices || [];

  let renderedComponent = null;

  switch (format) {
    case "Bool":
      renderedComponent = <CommonSwitch state={state} dispatch={dispatch} />;
      break;
    case "Value":
      renderedComponent = <CommonSlider state={state} dispatch={dispatch} />;
      break;
    case "Select":
      renderedComponent = <CommonMenu menuList={menuList} state={state} dispatch={dispatch} />;
      break;
    case "Text":
      renderedComponent = <CommonTextArea state={state} dispatch={dispatch} />;
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