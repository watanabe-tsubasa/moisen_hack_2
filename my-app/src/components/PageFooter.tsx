import { Box, Flex, Text } from "@chakra-ui/react";

export const PageFooter = () => {
  return (
    <Box bg="#263238" py={2} position="sticky" bottom={0} left={0} right={0}>
      <Flex align="center" justifyContent="end" wrap="wrap" mr={4}>
        <Text color="white">written in 2023</Text>
      </Flex>
    </Box>
  );
}
