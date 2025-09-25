import { useEffect, useState } from "react";
import {
  createHighlighter,
  type Highlighter,
  type BundledLanguage,
} from "shiki";
import styles from "./codeblock.module.css";

import hatchetTheme from "../../styles/hatchetsyntax.json";

interface CodeBlockProps {
  code: string;
  lang?: BundledLanguage;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  filename?: string;
  className?: string;
}

export const CodeBlock = ({
  code,
  lang = "typescript",
  showLineNumbers = true,
  highlightLines = [],
  filename,
  className,
}: CodeBlockProps) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const highlightCode = async () => {
      try {
        const highlighter = await createHighlighter({
          themes: [hatchetTheme as any],
          langs: [lang],
        });

        const html = highlighter.codeToHtml(code, {
          lang,
          theme: hatchetTheme.name,
          transformers: [
            {
              name: "highlight-lines",
              line(node: any, line: number) {
                if (highlightLines.includes(line)) {
                  if (!node.properties) {
                    node.properties = {};
                  }
                  if (!node.properties.className) {
                    node.properties.className = [];
                  }
                  if (Array.isArray(node.properties.className)) {
                    node.properties.className.push("highlighted-line");
                  } else {
                    node.properties.className = [
                      node.properties.className,
                      "highlighted-line",
                    ];
                  }
                }
                return node;
              },
            },
          ],
        });

        setHighlightedCode(html);
      } catch (error) {
        console.error("Failed to highlight code:", error);
        setHighlightedCode(`<pre><code>${code}</code></pre>`);
      } finally {
        setIsLoading(false);
      }
    };

    highlightCode();
  }, [code, lang, highlightLines]);

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
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    const highlightCode = async () => {
      try {
        const highlighter = await createHighlighter({
          themes: [hatchetTheme as any],
          langs: [lang],
        });

        const html = highlighter.codeToHtml(children, {
          lang,
          theme: hatchetTheme.name,
        });

        setHighlightedCode(html);
      } catch (error) {
        console.error("Failed to highlight inline code:", error);
        setHighlightedCode(`<code>${children}</code>`);
      }
    };

    highlightCode();
  }, [children, lang]);

  return (
    <span
      className={styles.inlineCode}
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  );
};
