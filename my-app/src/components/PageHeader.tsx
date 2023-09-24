import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { handleScrollToTop } from "../utils/handleScrollTop";

export const PageHeader = () => {
  return (
    <Box bg="darkcyan" py={2} position="sticky" top={0} left={0} right={0} zIndex="sticky">
      <Flex align="center" justifyContent="start" ml={4}>
        <Heading color="white">お手軽問診票</Heading>
        <Spacer />
        <Button mr={4}  onClick={() => {handleScrollToTop('smooth')}}>up</Button>
      </Flex>
    </Box>
  );
}