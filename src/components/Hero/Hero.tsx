import { theme } from "~/types";
import { Text } from "~/components/Text/Text";
import styles from "./hero.module.css";

interface HeroProps {
  theme?: theme;
  title?: string;
  description?: string;
}

export const Hero = (props: HeroProps) => {
  const {
    theme = "light",
    title = "Managed infrastructure for everything async.",
    description = "Hatchet simplifies your stack for running background jobs, distributed workloads, and real-time AI agents with a single, scalable, easy-to-use platform. ",
  } = props;

  return (
    <section data-theme={theme} className={styles.hero}>
      <Text.H1 balance>{title}</Text.H1>
      <Text.Body> {description} </Text.Body>
    </section>
  );
};

export default Hero;
