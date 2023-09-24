import { Box, HStack, Switch, Text } from "@chakra-ui/react";
import { initialState } from "../reducer/reducer";
import Action from "../../utils/types/actionType";
import { SET_CHECKED } from "../reducer/actionTypes";

type CommonSwitchProps = {
  state: typeof initialState;
  dispatch: React.Dispatch<Action>;
}

export const CommonSwitch: React.FC<CommonSwitchProps> = (props) => {

  const { state, dispatch } = props;
  const { isChecked } = state;

  const handleSwitchChange = () => {
    dispatch({ type: SET_CHECKED, payload: !isChecked});
  };

  return (
    <Box p={6}>
      <HStack>
        <Text fontSize={10}>いいえ</Text>
        <Switch size="lg" px={2} isChecked={isChecked} onChange={handleSwitchChange} />
        <Text fontSize={10}>はい</Text>
      </HStack>
    </Box>
  );
};
