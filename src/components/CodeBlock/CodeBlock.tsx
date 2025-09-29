import { useState, useEffect } from "react";
import { type BundledLanguage } from "shiki";
import styles from "./codeblock.module.css";
import { highlighterService } from "~/utils/highlighter";

interface CodeBlockProps {
  code: string;
  lang?: BundledLanguage;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  filename?: string;
  className?: string;
}

// Custom hook for code highlighting
const useCodeHighlighting = (
  code: string,
  lang: BundledLanguage,
  options?: { highlightLines?: number[] }
) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const highlightCode = async () => {
      try {
        const html = await highlighterService.highlightCode(
          code,
          lang,
          options
        );

        if (!cancelled) {
          setHighlightedCode(html);
          setIsLoading(false);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to highlight code:", error);
          setHighlightedCode(`<pre><code>${code}</code></pre>`);
          setIsLoading(false);
        }
      }
    };

    setIsLoading(true);
    highlightCode();

    return () => {
      cancelled = true;
    };
  }, [code, lang, JSON.stringify(options?.highlightLines)]);

  return { highlightedCode, isLoading };
};

// Custom hook for inline code highlighting
const useInlineCodeHighlighting = (code: string, lang: BundledLanguage) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const highlightCode = async () => {
      try {
        const html = await highlighterService.highlightInlineCode(code, lang);

        if (!cancelled) {
          setHighlightedCode(html);
          setIsLoading(false);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to highlight inline code:", error);
          setHighlightedCode(`<code>${code}</code>`);
          setIsLoading(false);
        }
      }
    };

    setIsLoading(true);
    highlightCode();

    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  return { highlightedCode, isLoading };
};

export const CodeBlock = ({
  code,
  lang = "typescript",
  showLineNumbers = true,
  highlightLines = [],
  filename,
  className,
}: CodeBlockProps) => {
  const { highlightedCode, isLoading } = useCodeHighlighting(code, lang, {
    highlightLines,
  });

  if (isLoading) {
    return (
      <div className={`${styles.codeBlock} ${className || ""}`}>
        <div className={styles.loading}>Loading syntax highlighting...</div>
      </div>
    );
  }

  return (
    <div className={`${styles.codeBlock} ${className || ""}`}>
      {filename && <div className={styles.filename}>{filename}</div>}
      <div
        className={`${styles.content} ${showLineNumbers ? styles.lineNumbers : ""}`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
};

interface InlineCodeProps {
  children: string;
  lang?: BundledLanguage;
}

export const InlineCode = ({
  children,
  lang = "typescript",
}: InlineCodeProps) => {
  const { highlightedCode, isLoading } = useInlineCodeHighlighting(
    children,
    lang
  );

  if (isLoading) {
    return <code className={styles.inlineCode}>{children}</code>;
  }

  return (
    <span
      className={styles.inlineCode}
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
};
