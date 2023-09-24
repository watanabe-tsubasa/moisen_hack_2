import { createContext } from "react";

type LiffContextType = {
  lineId: string | null;
  liff: any;
}

export const LiffContext = createContext<LiffContextType | null>(null);