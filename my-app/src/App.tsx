import { useEffect, useState } from "react";
import liff from "@line/liff";
import { LiffContext } from "./components/contexts/LiffContext";
import { Box } from "@chakra-ui/react";
import { PageHeader } from "./components/PageHeader";
import { PageFooter } from "./components/PageFooter";
import { PageBody } from "./components/PageBody";

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
      <PageHeader />
      <PageBody />
      <PageFooter />
    </Box>
  );
}

export default App;
