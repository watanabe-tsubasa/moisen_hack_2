import { Box, Flex, Spinner } from "@chakra-ui/react"

export const CommonSpinner = () => {

  return (
    <Box h="100vH">
      <Flex h="85vH" width="100%" align="center" justify="center">
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Flex>
    </Box>
  )
}