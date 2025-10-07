import { Section } from "../Section/Section";
import styles from "./footer.module.css";
import { Logo } from "../Logo/Logo";
import { Text } from "../Text/Text";
import { Link } from "@tanstack/react-router";

interface FooterProps {
  className?: string;
}

export const Footer = (props: FooterProps) => {
  const { className } = props;
  return (
    <footer className={`${styles.footer ?? ""} ${className ?? ""}`.trim()}>
      <Section className={styles.section}>
        <div className={styles.socials}>
          <Text.H5>Socials</Text.H5>
          <div className={styles.linksContent}>
            <Text.Small secondary mono caps>
              <a
                href="https://x.com/hatchet_dev"
                target="_blank"
                rel="noreferrer"
              >
                X.com
              </a>
            </Text.Small>
            <Text.Small secondary mono caps>
              <a
                href="https://github.com/hatchet-dev"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Text.Small>
            <Text.Small secondary mono caps>
              <a
                href="https://discord.com/invite/ZMeUafwH89"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </Text.Small>
            <Text.Small secondary mono caps>
              <a
                href="https://www.linkedin.com/company/hatchet-run"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Text.Small>
            <Text.Small secondary mono caps>
              <a
                href="mailto:contact@hatchet.run"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </Text.Small>
          </div>
        </div>
        <div className={styles.copyright}>
          <Logo className={styles.logo} />

          <Text.Micro secondary mono caps>
            &copy; {new Date().getFullYear()} Hatchet Technologies
          </Text.Micro>

          <div className={styles.content}>
            <Text.Micro secondary mono caps>
              <a
                href="https://trust.hatchet.run/"
                target="_blank"
                rel="noreferrer"
              >
                Security
              </a>{" "}
            </Text.Micro>
          </div>
        </div>
        <div className={styles.links}>
          <Text.H5>Links</Text.H5>
          <div className={styles.linksContent}>
            <Text.Small secondary mono caps>
              <a
                href="https://docs.hatchet.run/home"
                target="_blank"
                rel="noreferrer"
              >
                Docs
              </a>
            </Text.Small>
            <Text.Small secondary mono caps>
              <Link to="/pricing">Pricing</Link>
            </Text.Small>
            <Text.Small secondary mono caps>
              <Link to="/customers">Customers</Link>
            </Text.Small>
            <Text.Small secondary mono caps>
              <a
                href="https://status.hatchet.run"
                target="_blank"
                rel="noreferrer"
              >
                Status
              </a>
            </Text.Small>

            <Text.Small secondary mono caps>
              <a
                href="https://www.ycombinator.com/companies/hatchet-run"
                target="_blank"
                rel="noreferrer"
              >
                Jobs
              </a>
            </Text.Small>
          </div>
        </div>
      </Section>{" "}
      <div className={styles.footerChecker}></div>
    </footer>
  );
};
