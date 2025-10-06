// Import all images from both case studies and pages
const globContentImages = Object.entries(
  import.meta.glob<{ default: string }>(
    [
      "/src/content/customers/**/*.{png,jpg,jpeg,svg,gif}",
      "/src/content/pages/**/*.{png,jpg,jpeg,svg,gif}",
    ],
    {
      eager: true,
    }
  )
);

export const imagesByPath: Record<string, string> = Object.fromEntries(
  globContentImages.map(([url, module]) => {
    // Extract content type, content name, and image filename
    const parts = url.split("/");
    const contentIndex = parts.findIndex((part) => part === "content");
    const contentName = parts[contentIndex + 2]; // e.g., "dev-tester" or "announcement"
    const fileName = parts.pop() || "";

    // Create keys for different access patterns
    const shortKey = `${contentName}/${fileName}`;
    return [shortKey, module.default as string];
  })
);

export const resolveImageSrc = (
  src: string,
  contentSlug: string,
  imageResolver: Record<string, string> = imagesByPath
): string => {
  // If imageResolver and contentSlug are provided, try to resolve relative paths
  if (contentSlug && src) {
    // Handle relative paths like "./og.png" or "og.png"
    if (src.startsWith("./") || !src.includes("/")) {
      const filename = src.replace("./", "");
      const imageKey = `${contentSlug}/${filename}`;

      if (imageResolver[imageKey]) {
        return imageResolver[imageKey];
      }
    }
  }

  // Return original src if no resolution found
  return src;
};
