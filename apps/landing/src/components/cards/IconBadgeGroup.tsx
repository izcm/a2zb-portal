import { useId } from "react";
import { IconBadge } from "../badges/IconBadge";

type Breakpoint = { cols: number; minWidth?: number; maxWidth?: number };

function splitForOverflow(items: IconBadge[], cols: number) {
  const hidden = items.length > cols ? items.length % cols : 0;
  const visible = items.slice(0, items.length - hidden);
  const visibleWithSlotForOverflow =
    hidden > 0 ? visible.slice(0, visible.length - 1) : visible;
  const hiddenCount = hidden > 0 ? hidden + 1 : hidden;
  return { visibleWithSlotForOverflow, hidden, hiddenCount };
}

export function IconBadgeGroup({
  items,
  breakpoints,
}: {
  items: IconBadge[];
  breakpoints: Breakpoint[];
}) {
  const groupClass = `icon-badge-group-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  const css = [
    `.${groupClass} { display: none; }`,
    ...breakpoints.map((bp, i) => {
      const conditions = [
        bp.minWidth && `(min-width:${bp.minWidth}px)`,
        bp.maxWidth && `(max-width:${bp.maxWidth}px)`,
      ]
        .filter(Boolean)
        .join(" and ");
      const rule = `.${groupClass}[data-variant="${i}"] { display: grid; }`;
      return conditions ? `@media ${conditions} { ${rule} }` : rule;
    }),
  ].join("\n");

  return (
    <>
      <style>{css}</style>
      {breakpoints.map((bp, i) => {
        const { visibleWithSlotForOverflow, hidden, hiddenCount } =
          splitForOverflow(items, bp.cols);
        return (
          <div
            key={i}
            data-variant={i}
            className={`${groupClass} gap-4`}
            style={{
              gridTemplateColumns: `repeat(${bp.cols}, minmax(0, 1fr))`,
            }}
          >
            {visibleWithSlotForOverflow.map((item) => (
              <IconBadge key={item.label} label={item.label} icon={item.icon} />
            ))}
            {hidden > 0 && (
              <span
                title={items
                  .slice(visibleWithSlotForOverflow.length)
                  .map((item) => item.label)
                  .join(", ")}
              >
                <IconBadge label="others" icon={`+${hiddenCount}`} />
              </span>
            )}
          </div>
        );
      })}
    </>
  );
}
