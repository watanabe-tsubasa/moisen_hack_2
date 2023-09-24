import { useEffect, useState } from "react";
import liff from "@line/liff";
import { LiffContext } from "./components/contexts/LiffContext";
import { Box } from "@chakra-ui/react";
import { PageHeader } from "./components/PageHeader";
import { PageFooter } from "./components/PageFooter";
import { PageBody } from "./components/PageBody";

function App() {

  const [lineId, setLineId] = useState<string | null>(null);

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        console.log("LIFF init succeeded.");
        const context  = liff.getContext();
        const userId = context?.userId || 'testId'
        console.log(userId);
        setLineId(userId);
      })
      .catch((e: Error) => {
        console.log(`LIFF init failed.: ${e}`);

      });
  });

  return (
    <LiffContext.Provider value={{lineId: lineId}}>
      <Box>
        <PageHeader />
        <PageBody />
        <PageFooter />
      </Box>
    </LiffContext.Provider>
  );
}

export default App;
