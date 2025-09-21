import styles from "./logoStrip.module.css";

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
    <div className={styles.logoStrip}>
      {logos.map((logo) => (
        <img key={logo.name} src={logo.src} alt={`${logo.alt} logo`} />
      ))}
    </div>
  );
};
