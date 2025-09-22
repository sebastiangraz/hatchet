import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import styles from "./quote.module.css";

export const Quote = ({
  children,
  person,
  name,
  title,
  link,
}: {
  children: React.ReactNode;
  person: string;
  name: string;
  title: string;
  link: string;
}) => {
  return (
    <div className={styles.quote}>
      <div className={styles.quoteContent}>{children}</div>
      <div className={styles.quoteMeta}>
        <div>
          <Text.Micro mono caps>
            {person}
          </Text.Micro>
          <Text.Micro mono caps>
            {name}
          </Text.Micro>
          <Text.Micro mono caps>
            ·
          </Text.Micro>
          <Text.Micro mono caps>
            {title}
          </Text.Micro>
        </div>
        <Button to={link}>Case Study</Button>
      </div>
    </div>
  );
};
