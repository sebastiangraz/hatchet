import { useMemo } from "react";
import styles from "./-BlogAsset.module.css";

interface BlogAssetProps {
  seed: string;
}

// Seeded random number generator for deterministic randomness
class SeededRandom {
  private seed: number;

  constructor(seed: string) {
    // Convert string seed to number
    this.seed = 0;
    for (let i = 0; i < seed.length; i++) {
      this.seed = (this.seed << 5) - this.seed + seed.charCodeAt(i);
      this.seed = this.seed & this.seed; // Convert to 32bit integer
    }
  }

  next(): number {
    // LCG algorithm
    this.seed = (this.seed * 1664525 + 1013904223) % 4294967296;
    return this.seed / 4294967296;
  }

  nextInt(min: number, max: number): number {
    return Math.floor(this.next() * (max - min)) + min;
  }
}

// Available accent colors
const accentColors = ["red", "blue", "green"] as const;

export const BlogAsset = ({ seed }: BlogAssetProps) => {
  const { selectedTiles, tileCount, accentColor } = useMemo(() => {
    const terminatedSeed = `${seed}\0`;
    const rng = new SeededRandom(terminatedSeed);

    // Randomly select tile count between 5-8
    const count = rng.nextInt(5, 9); // 9 is exclusive, so this gives 5-8

    // Randomly select accent color
    const colorIndex = rng.nextInt(0, accentColors.length);
    const accent = accentColors[colorIndex];

    const selected = [];

    // Select random tiles based on the seeded count
    for (let i = 0; i < count; i++) {
      const index = rng.nextInt(0, tiles.length);
      selected.push(tiles[index]);
    }

    return {
      selectedTiles: selected,
      tileCount: count,
      accentColor: accent,
    };
  }, [seed]);

  // Dynamic viewBox width based on tile count
  const viewBoxWidth = tileCount * 48;

  // Capitalize accent color for CSS class name
  const accentClassName = `accent${accentColor?.charAt(0)?.toUpperCase()}${accentColor?.slice(1)}`;

  return (
    <svg
      data-seed={seed}
      viewBox={`0 0 ${viewBoxWidth} 48`}
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.blogAsset} ${styles[accentClassName]}`}
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        overflow: "visible",
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      {selectedTiles.map((tile, index) => (
        <g key={index} transform={`translate(${index * 48}, 0)`}>
          {tile}
        </g>
      ))}
    </svg>
  );
};

// 15 unique SVG tile designs (48x48px)
const tiles = [
  <>
    <path
      d="M0 24H19M10 28H19M10 20H19M29 24H48M29 20H38M29 28H38M24 36V12"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </>,
  <>
    <path
      d="M47 24C47 15.1635 39.8366 8.00001 31 8.00001H17C15.8864 8.00001 14.7994 8.11377 13.75 8.3303M47 24C47 32.8366 39.8366 40 31 40H17C15.8864 40 14.7994 39.8863 13.75 39.6697M47 24H48M1 24H0M1 24C1 16.277 6.47176 9.83203 13.75 8.3303M1 24C1 31.723 6.47176 38.168 13.75 39.6697M27 14L23 14V34H27M26.5 18H33.5M26.5 22H33.5M26.5 26H33.5M26.5 30H33.5M33 14L37 14V34H33M13.75 16L13.75 8.3303M13.75 39.6697L13.75 32M17 21V27H11V21H17Z"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </>,
  <>
    <path
      d="M24 36V12M12 24H36M40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24M40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24M40 24H48M8 24H0M4 40H7M8 36V39M9 40H12M8 41V44M14 40C14 43.3137 11.3137 46 8 46C4.68629 46 2 43.3137 2 40C2 36.6863 4.68629 34 8 34C11.3137 34 14 36.6863 14 40ZM46 8C46 11.3137 43.3137 14 40 14C36.6863 14 34 11.3137 34 8C34 4.68629 36.6863 2 40 2C43.3137 2 46 4.68629 46 8ZM43 8C43 9.65685 41.6569 11 40 11C38.3431 11 37 9.65685 37 8C37 6.34315 38.3431 5 40 5C41.6569 5 43 6.34315 43 8Z"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </>,
  <>
    <path
      d="M6 8H12M6 12H12M6 16H12M6 20H12M2.62268e-07 24H12M6 28H12M6 32H12M6 36H12M6 40H12M16 41V35M20 41V35M24 41V35M28 41V35M32 41V35M42 8H36M42 12H36M42 16H36M42 20H36M48 24H36M42 28H36M42 32H36M42 36H36M42 40H36M16 13V7M20 13V7M24 13V7M28 13V7M32 13V7M20 20H28V28H20V20Z"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </>,
  <>
    <path
      d="M12 14L12 34M16 14L16 34M20 14L20 34M24 14V18M24 20V28M24 30V34M28 14V18M32 14V18M36 14V18M28 21V27M32 22V26M36 22V26M28 30V34M32 30V34M36 30V34"
      stroke="var(--accent)"
      fill="none"
      stroke-width="1.5"
    />
    <path
      d="M8.5 14L4.5 14L4.5 24M8.5 34H4.5L4.5 24M4.5 24L0 24M39.5 14L43.5 14V24M39.5 34H43.5V24M43.5 24L48 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
    />
  </>,
  <>
    <path
      d="M8 30L40 30M8 26L40 26M8 22L40 22M8 18L40 18"
      stroke="var(--accent)"
      fill="none"
      stroke-width="1.5"
    />
    <path
      d="M8.5 14L4.5 14L4.5 24M8.5 34H4.5L4.5 24M4.5 24L0 24M39.5 14L43.5 14V24M39.5 34H43.5V24M43.5 24L48 24"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </>,
  <>
    <path
      d="M16 24H0M16 24L20 28H28L32 24M16 24L20 20H28L32 24M48 24H32"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </>,
  <>
    <path
      d="M24 36V28V12M12 24H28H36M40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24M40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24M40 24H48M8 24H0"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </>,
  <>
    <path
      d="M7 8H41M7 12H41M7 16H41M7 20H41M0 24H48M7 28H41M7 32H41M7 36H41M7 40H41"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </>,
  <>
    <path
      d="M0 24C0.346842 24 0.520263 24 0.648111 23.989C1.38323 23.926 1.7429 23.7784 2.31018 23.3066C2.40884 23.2245 2.62093 23.0151 3.04512 22.5961C5.59931 20.0732 8.1535 20.5412 10.7077 24C13.6615 28 16.6154 28 19.5692 24C22.5231 20 25.4769 20 28.4308 24C31.3846 28 34.3385 28 37.2923 24C39.8465 20.5412 42.4007 20.0732 44.9549 22.5961C45.3791 23.0151 45.5912 23.2245 45.6898 23.3066C46.2571 23.7784 46.6168 23.926 47.3519 23.989C47.4797 24 47.6532 24 48 24"
      stroke="var(--accent)"
      fill="none"
      stroke-width="1.5"
    />
    <path
      d="M0 24C0.346842 24 0.520263 24 0.648111 24.011C1.38323 24.074 1.7429 24.2216 2.31018 24.6934C2.40884 24.7755 2.62093 24.9849 3.04512 25.4039C5.59931 27.9268 8.1535 27.4588 10.7077 24C13.6615 20 16.6154 20 19.5692 24C22.5231 28 25.4769 28 28.4308 24C31.3846 20 34.3385 20 37.2923 24C39.8465 27.4588 42.4007 27.9268 44.9549 25.4039C45.3791 24.9849 45.5912 24.7755 45.6898 24.6934C46.2571 24.2216 46.6168 24.074 47.3519 24.011C47.4797 24 47.6532 24 48 24"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </>,
  <>
    <path
      d="M0 24L24 24M24 24L19.9999 28M24 24L19.9999 20M25.4999 28L29.5 24M29.5 24L25.4999 20M29.5 24H48"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </>,
  <>
    <path
      d="M8 24H13M0 24H1M17 24H22M26 24H31M35 24H40M47 24H48M1 26L1 22L5 22V26H1ZM43 26V22L47 22V26H43Z"
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
    />
  </>,
];
