import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

type CommonMenuProps = {
  menuList: string[];
}

export const CommonMenu: React.FC<CommonMenuProps> = (props) => {

  const { menuList } = props;

  return (
    <Box p={6}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          タップして選択
        </MenuButton>
        <MenuList>
          {menuList.map(elem => <MenuItem>{elem}</MenuItem>)}
        </MenuList>
      </Menu>
    </Box>
  )
}