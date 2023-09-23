import { Box, Text, Textarea } from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"


export const CommonTextArea = () => {
  let [value, setValue] = useState('')

  let handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = event.target.value
    setValue(inputValue)
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