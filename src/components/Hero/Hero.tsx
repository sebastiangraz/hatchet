import { theme } from "~/types";
import { Text } from "~/components/Text/Text";
import { Button } from "~/components/Button/Button";
import { Section } from "~/components/Section/Section";
import styles from "./hero.module.css";

interface HeroProps {
  theme?: theme;
  title?: string;
  description?: string;
}

export const Hero = (props: HeroProps) => {
  const {
    theme,
    title = "Managed infrastructure for everything async.",
    description = "Hatchet simplifies your stack for running background jobs, distributed workloads, and real-time AI agents with a single, scalable, easy-to-use platform. ",
  } = props;

  const themeValue = theme ? theme : "";

  return (
    <Section data-theme={themeValue} className={styles.hero}>
      <Text.H1 balance>{title}</Text.H1>

      <Text.Body balance> {description} </Text.Body>
      <div className="flex">
        <Button
          href="https://cloud.onhatchet.run/auth/register?ref=01985b6e-d55b-772d-bc5a-3831ce1fd2c7"
          target="_blank"
        >
          Start for free
        </Button>
        <Button
          href="https://docs.hatchet.run/home"
          target="_blank"
          icon="docs"
          type="secondary"
        >
          Docs
        </Button>
      </div>
    </Section>
  );
};
