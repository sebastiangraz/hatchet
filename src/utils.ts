import { useEffect, useState } from "react";

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

export function isArrayofObjects(input: any): input is Array<object> {
  return (
    Array.isArray(input) &&
    input.every((item) => typeof item === "object" && item !== null)
  );
}

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
