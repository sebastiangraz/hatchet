import styles from "./logostrip.module.css";
import { Text } from "~/components/Text/Text";
const globLogos = Object.entries(
  import.meta.glob<{ default: string }>(["/src/assets/logos/*.svg"], {
    eager: true,
  })
);

const logoArray = [
  "distill",
  "ellipsis",
  "greptile",
  "mit",
  "moonhub",
  "motion",
  "sweetspot",
];

const buffArray = ["distill", "motion", "aevy"];
const nerfArray = [""];

const logos = globLogos
  .map(([url, module]) => {
    const fileName = url.split("/").pop()?.replace(".svg", "") || "";

    return {
      src: module.default,
      alt: fileName,
      name: fileName,
    };
  })
  .filter((logo) => logoArray.includes(logo.name));

export const Logostrip = () => {
  const logosWithClass = logos.map((logo) => ({
    ...logo,
    className: buffArray.includes(logo.name.toLowerCase())
      ? styles.buff
      : nerfArray.includes(logo.name.toLowerCase())
        ? styles.nerf
        : "",
  }));

  return (
    <div className={styles.logostrip}>
      <Text.Small secondary mono>
        Running Billions of Tasks for Scale-Ups and Enterprises
      </Text.Small>
      <div className={styles.logos}>
        {[...logosWithClass].map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={`${logo.alt} logo`}
            className={logo.className}
          />
        ))}
      </div>
    </div>
  );
};
