import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { initialState } from "../reducer/reducer";
import Action from "../../utils/types/actionType";
import { SET_VALUE } from "../reducer/actionTypes";

type CommonMenuProps = {
  menuList: string[];
  state: typeof initialState;
  dispatch: React.Dispatch<Action>
}

export const CommonMenu: React.FC<CommonMenuProps> = (props) => {

  const { menuList, state, dispatch } = props;
  const { value } = state;
  const handleMenuSelect = (menuItem: string) => {
    dispatch({ type: SET_VALUE, payload: menuItem})
  }

  return (
    <Box p={6}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {value === "" ? 'タップして選択' : value}
        </MenuButton>
        <MenuList>
          {menuList.map((elem, idx) => (
            <MenuItem key={idx} onClick={() => {handleMenuSelect(elem)}}>
              {elem}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  )
}