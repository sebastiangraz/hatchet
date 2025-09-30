import { createContext, useContext, useState, ReactNode } from "react";

export type CodeLanguage = "typescript" | "python" | "go";

interface CodetabContextType {
  selectedLanguage: CodeLanguage;
  setSelectedLanguage: (lang: CodeLanguage) => void;
}

const CodetabContext = createContext<CodetabContextType | undefined>(undefined);

export const CodetabProvider = ({ children }: { children: ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<CodeLanguage>("typescript");

  return (
    <CodetabContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </CodetabContext.Provider>
  );
};

export const useCodetab = () => {
  const context = useContext(CodetabContext);
  if (!context) {
    throw new Error("useCodetab must be used within a CodetabProvider");
  }
  return context;
};
