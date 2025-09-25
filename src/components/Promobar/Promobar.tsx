import styles from "./promobar.module.css";
import { Text } from "~/components/Text/Text";
import { Link } from "@tanstack/react-router";
import settings from "~/settings";

export const Promobar = ({ link }: { link?: string }) => {
  if (!settings.promobarEnabled) return null;

  return (
    <Link to={link || settings.promobarLink}>
      <div className={styles.promobar}>
        <div className={styles.content}>
          <SVGRocket />
          <Text.Small>New feature launching soon - Stay tuned!</Text.Small>
          {/* <Button icon="back" type="secondary">
          Close
        </Button> */}

          <button
            className={styles.closeButton}
            type="button"
            aria-label="Close promotion"
          >
            ×
          </button>
        </div>
      </div>
    </Link>
  );
};

const SVGRocket = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2.82843"
        y1="12.975"
        x2="4.94975"
        y2="10.8537"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        id="fire"
        x1="2.82843"
        y1="17.2177"
        x2="7.07107"
        y2="12.9751"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="7.07111"
        y1="17.2177"
        x2="9.19243"
        y2="15.0964"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M15.9168 8.65356L10.6287 12.6435L7.40255 9.41729L11.3918 4.12849L15.5695 4.47652L15.9168 8.65356Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};
