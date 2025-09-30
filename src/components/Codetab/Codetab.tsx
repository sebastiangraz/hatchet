import { ReactElement } from "react";
import { useCodetab, CodeLanguage } from "./CodetabContext";
import styles from "./codetab.module.css";
import { Text } from "~/components/Text/Text";

interface CodetabProps {
  languages: Partial<Record<CodeLanguage, ReactElement>>;
  className?: string;
}

const languageLabels: Record<CodeLanguage, string> = {
  typescript: "TypeScript",
  python: "Python",
  go: "Go",
};

export const Codetab = ({ languages, className }: CodetabProps) => {
  const { selectedLanguage, setSelectedLanguage } = useCodetab();

  const handleTabClick = (lang: CodeLanguage) => {
    setSelectedLanguage(lang);
  };

  const availableLanguages = Object.keys(languages) as CodeLanguage[];

  return (
    <div className={`${styles.codetab} ${className || ""}`}>
      <div className={styles.tabs}>
        {availableLanguages.map((lang) => (
          <Text
            caps
            as="button"
            key={lang}
            className={`${styles.tab} ${selectedLanguage === lang ? styles.active : ""}`}
            onClick={() => handleTabClick(lang)}
          >
            {languageLabels[lang]}
          </Text>
        ))}
      </div>
      <div className={styles.codeBlockContainer}>
        {languages[selectedLanguage]}
      </div>
    </div>
  );
};
