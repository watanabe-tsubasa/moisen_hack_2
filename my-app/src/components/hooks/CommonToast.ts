import { useToast } from "@chakra-ui/react"


export const useCommonToast = () => {
  const toast = useToast();

  const showToast = ({
    title = "Default Title",
    description = "Default Description",
    status = undefined,
    duration = 4000,
    isClosable = true,
    position = undefined,
  } = {}) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable,
      position,
    });
  };

  return showToast;
}