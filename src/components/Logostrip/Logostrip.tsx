import styles from "./logostrip.module.css";
import { Text } from "~/components/Text/Text";
const globLogos = Object.entries(
  import.meta.glob<{ default: string }>(["/src/assets/logos/*.svg"], {
    eager: true,
  })
);

const logos = globLogos.map(([url, module]) => {
  const fileName = url.split("/").pop()?.replace(".svg", "") || "";
  return {
    src: module.default,
    alt: fileName,
    name: fileName,
  };
});

export const Logostrip = () => {
  console.log(logos);

  return (
    <div className={styles.logostrip}>
      <Text.Small secondary mono>
        Running Billions of Tasks for Scale-Ups and Enterprises
      </Text.Small>
      <div className={styles.logos}>
        {[...logos, ...logos].map((logo) => (
          <img key={logo.name} src={logo.src} alt={`${logo.alt} logo`} />
        ))}
      </div>
    </div>
  );
};
