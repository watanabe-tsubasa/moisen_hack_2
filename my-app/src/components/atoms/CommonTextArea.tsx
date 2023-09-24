import { Box, Textarea } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import { initialState } from "../reducer/reducer";
import Action from "../../utils/types/actionType";
import { SET_VALUE } from "../reducer/actionTypes";

type CommonTextAreaProps = {
  state: typeof initialState;
  dispatch: React.Dispatch<Action>
}

export const CommonTextArea: React.FC<CommonTextAreaProps> = (props) => {
  
  const { state, dispatch } = props;
  const { value } = state;

  let handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = event.target.value
    dispatch({ type: SET_VALUE, payload: inputValue})
  }
  return (
    <Box p={6}>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='入力してください'
        size='sm'
      />
    </Box>
  )
}