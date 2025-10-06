import { useEffect, useState } from "react";
import { ReactChild } from "~/types";

export function getPrevPathFromExtension(path: string, extension = ".mdx") {
  const regex = new RegExp(`/[^/]+${extension}$`);
  const match = path.match(regex);
  return match
    ? path.slice(
        path.lastIndexOf("/", path.length - match[0].length - 1) + 1,
        path.length - match[0].length
      )
    : "";
}

export const getFirstChild = (children: unknown): ReactChild | undefined => {
  return Array.isArray(children) ? children[0] : (children as ReactChild);
};

export function useStickyObserver(
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit
) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    (async () => {
      const observer = new IntersectionObserver(([e]) => {
        if (document.body) {
          document.body.dataset.sticky =
            e.intersectionRatio < 1 ? "true" : "false";
          setIsSticky(e.intersectionRatio < 1);
        }
      }, options);
      observer.observe(ref.current as HTMLDivElement);
      return () => observer.disconnect();
    })();
  }, [ref, options]);

  return isSticky;
}

type TextPart = {
  type: "text" | "number";
  value: string;
};

export const highlightNumbers = (text: string): TextPart[] => {
  // Regex to match numbers with optional prefixes (like $) and suffixes (like %, h, s, M, x, +, etc.)
  // Matches: 93, 100s, 1h, 50%, 10,000+, $1M, 99.99%, 3x, etc.
  const numberPattern = /(\$?[\d,]+\.?\d*[%hsMxX+]?|\d+[%hsMxX+])/g;

  const parts: TextPart[] = [];
  let lastIndex = 0;
  let match;

  while ((match = numberPattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push({
        type: "text",
        value: text.substring(lastIndex, match.index),
      });
    }

    // Add the number
    parts.push({
      type: "number",
      value: match[0],
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text after last match
  if (lastIndex < text.length) {
    parts.push({
      type: "text",
      value: text.substring(lastIndex),
    });
  }

  return parts;
};
