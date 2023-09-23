import { Box, FormControl, FormLabel, SimpleGrid, Switch } from "@chakra-ui/react";
import { useState } from "react";

export const CommonSwitch = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Box p={6}>
      <Switch isChecked={isChecked} onChange={handleSwitchChange} />
    </Box>
  );
};
