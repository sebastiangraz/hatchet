import React from "react";

export const Shape = React.memo(
  ({
    x,
    y,
    type,
    size = 8,
    opacity,
    isStatic,
    variant,
    color,
    rotation = 0,
  }: ShapeProps) => {
    if (!type) return null;
    // don’t add strokeOpacity if isStatic is
    const isStaticProps = isStatic ? { strokeOpacity: opacity } : {};
    const opacityVariant = variant === "pcb" ? opacity : 1;
    const commonProps = {
      stroke: "currentColor",
      vectorEffect: "non-scaling-stroke",
      strokeWidth: 1.25,
      fill: "currentColor",
      style: { color },
      ...isStaticProps,
    };
    const cx = x + size / 2;
    const cy = y + size / 2;

    switch (type) {
      case "line":
        return (
          <line
            transform={`rotate(${rotation} ${cx} ${cy})`}
            x1={x}
            y1={y + size / 2}
            x2={x + size}
            y2={y + size / 2}
            {...commonProps}
          />
        );
      case "rect":
        return (
          <rect
            x={x + size / 4}
            y={y + size / 4}
            width={size / 2}
            height={size / 2}
            {...commonProps}
            fillOpacity={opacityVariant}
            stroke="none"
          />
        );
      case "ellipse":
        return (
          <ellipse
            cx={x + size / 2}
            cy={y + size / 2}
            rx={size / 2}
            ry={size / 2}
            {...commonProps}
          />
        );
      default:
        return null;
    }
  }
);

export interface ShapeProps {
  x: number;
  y: number;
  size: number;
  type: "rect" | "ellipse" | "line" | null;
  opacity: number;
  isStatic?: boolean;
  variant?: string;
  color: string;
  rotation?: number;
}
