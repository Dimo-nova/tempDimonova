"use client";
import { useState } from "react";
import type React from "react";
import { s } from "@/lib/style";

type Tag = "button" | "a" | "div" | "span";
type Props = {
  as?: Tag;
  base: string;
  hover?: string;
  focus?: string;
} & React.HTMLAttributes<HTMLElement> &
  Record<string, unknown>;

export default function Hover({
  as = "button",
  base,
  hover,
  focus,
  children,
  ...rest
}: Props) {
  const [active, setActive] = useState(false);
  const Tag = as as React.ElementType;
  const style = {
    ...s(base),
    ...(active ? s([hover, focus].filter(Boolean).join(";")) : {}),
  };
  return (
    <Tag
      {...rest}
      style={style}
      onMouseEnter={() => hover && setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => focus && setActive(true)}
      onBlur={() => setActive(false)}
    >
      {children as React.ReactNode}
    </Tag>
  );
}
