import { useEffect, useState } from "react";
import liff from "@line/liff";
import { LiffContext } from "./components/contexts/LiffContext";
import { CommonSpinner } from "./components/atoms/CommonSpinner";
import { CommonSlider } from "./components/atoms/CommonSlider";
import { Box } from "@chakra-ui/react";
import { CommonSwitch } from "./components/atoms/CommonSwitch";
import { CommonMenu } from "./components/atoms/CommonMenu";
import { CommonTextArea } from "./components/atoms/CommonTextArea";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
      })
      .catch((e: Error) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  });

  return (
    <Box>
      <CommonSpinner />
      <CommonSlider />
      <CommonSwitch />
      <CommonMenu menuList={['test1', 'test2', 'test3']} />
      <CommonTextArea />
    </Box>
  );
}

export default App;
