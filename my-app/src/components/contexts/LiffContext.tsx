import { createContext } from "react";

type LiffContextType = {
  lineId: string | null;
}

export const LiffContext = createContext<LiffContextType | null>(null);