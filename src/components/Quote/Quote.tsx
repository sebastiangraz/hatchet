import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import styles from "./quote.module.css";

// Dynamically import all people images using Vite's glob import
const imageModules = import.meta.glob<{ default: string }>(
  "../../assets/people/*.jpg",
  { eager: true }
);

// Create a mapping from slug to image URL
const authorImages: Record<string, string> = Object.entries(
  imageModules
).reduce(
  (acc, [path, module]) => {
    // Extract filename without extension from path like "../../assets/people/shaun.jpg"
    const filename = path
      .split("/")
      .pop()
      ?.replace(/\.(jpg|jpeg|png|webp)$/i, "");
    if (filename) {
      acc[filename] = module.default;
    }
    return acc;
  },
  {} as Record<string, string>
);

const Authors = [
  {
    name: "Shaun Berryman",
    slug: "shaun",
    title: "Staff Software Engineer",
    company: "Moonhub",
  },
  {
    name: "Soohoon Choi",
    slug: "soohoon",
    title: "Co-founder",
    company: "Greptile",
  },
  {
    name: "Meji Abidoye",
    slug: "meji",
    title: "Staff Engineer",
    company: "Otto",
  },
] as const;

type Author = (typeof Authors)[number];
type AuthorSlug = Author["slug"];

interface QuoteProps {
  children: React.ReactNode;
  author: AuthorSlug;
  link: string;
}

export const Quote = ({ children, link, author }: QuoteProps) => {
  const authorValue = Authors.find((a) => a.slug === author)!; // Since author is typed, this will always exist
  return (
    <div className={styles.quote}>
      <div className={styles.quoteContent}>{children}</div>
      <div className={styles.quoteMeta}>
        <Quote.Author
          name={authorValue.name}
          slug={authorValue.slug}
          title={authorValue.title}
          company={authorValue.company}
        />
        <Button to={link}>Case Study</Button>
      </div>
    </div>
  );
};

export const QuoteAuthor = ({
  name,
  slug,
  title,
  company,
}: {
  name: string;
  slug: string;
  title: string;
  company: string;
}) => {
  const image = authorImages[slug];
  return (
    <div className={styles.quoteAuthor}>
      {image && <img src={image} alt={name} />}
      <div>
        <span>
          <Text.Micro mono caps>
            {name}
          </Text.Micro>{" "}
          <Text.Micro mono caps>
            {title}
          </Text.Micro>
        </span>{" "}
        <Text.Micro mono caps>
          · {company}
        </Text.Micro>
      </div>
    </div>
  );
};

Quote.Author = QuoteAuthor;
