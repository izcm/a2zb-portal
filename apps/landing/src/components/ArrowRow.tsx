import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import { cn } from "../lib/cn";

type ArrowRowProps = {
  isSelected: boolean;
  onSelect: () => void;
  onEnter?: () => void;
  children: ReactNode;
  className?: string;
  dataId?: string;
  dataTestId?: string;
  bare?: boolean;
};

export function ArrowRow({
  isSelected,
  onSelect,
  onEnter,
  children,
  className,
  dataId,
  dataTestId,
  bare: bareRow,
}: ArrowRowProps) {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const li = ref.current;
    if (!li) return;

    li.querySelectorAll<HTMLElement>(
      "a, button, input, select, textarea, [tabindex]",
    ).forEach((el) => {
      el.tabIndex = isSelected ? 0 : -1;
    });

    if (isSelected) {
      li.focus();
    }
  }, [isSelected]);

  const appliedClasses = bareRow
    ? className
    : cn(
        "hover:bg-white/10 rounded-lg bg-surface border border-soft",
        isSelected && "bg-accent/20",
        className,
      );

  return (
    <li
      ref={ref}
      data-id={dataId}
      data-testid={dataTestId}
      tabIndex={isSelected ? 0 : -1}
      onClick={onEnter ?? onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" && onEnter) {
          e.preventDefault();
          onEnter();
        }
      }}
      className={appliedClasses}
    >
      {children}
    </li>
  );
}
