import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Stack, StackDivider, Text } from "@chakra-ui/react";
import { CommonSpinner } from "./atoms/CommonSpinner";
import { Suspense } from "react";
import { QuestionCard } from "./Organisums/QuestionCard";

export const PageBody = () => {

  return (
    <Suspense fallback={<CommonSpinner />}>
      <QuestionCard />
    </Suspense>
  );
}
