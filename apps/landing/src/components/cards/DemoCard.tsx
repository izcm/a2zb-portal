import { sortTools, type Demo } from "../../data/demos";

import { IconLink, DEFAULT_ICON_CLASSES } from "../IconLink";
import { LiveBadge } from "../badges/LiveBadge";

import { Code, Radio } from "../../lib/icons";
import { cn } from "../../lib/cn";
import { IconBadgeGroup } from "./IconBadgeGroup";

type DemoCardProps = Demo & { onSelectDemo?: (id: string) => void };

export const DemoCard = ({
  title,
  desc,
  repoLink,
  tools,
  composedOf,
  onSelectDemo,
  isLive,
  liveUrl,
}: DemoCardProps) => {
  return (
    <div
      className="
        flex flex-col sm:flex-row gap-4
        border border-white/5 rounded-lg p-4
        cursor-pointer 
      "
    >
      {/* TEXT INFO (LEFT) */}
      <div className="flex flex-col flex-1 min-w-0 text-start">
        <h3 className="text-white tracking-tight mb-2">
          {title}
          {isLive && (
            <span className="ml-3">
              <LiveBadge />
            </span>
          )}
        </h3>

        {/* DESCRIPTION */}
        <p className="flex-1 text-neutral-400 text-sm leading-loose whitespace-pre-line">
          {desc}
        </p>

        {/* BUILD WITH */}
        {composedOf && (
          <p className="text-xs text-neutral-500">
            Composed of:{" "}
            {composedOf.map((demoId, i) => (
              <span key={demoId}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDemo?.(demoId);
                  }}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  {demoId}
                </button>
                {i < composedOf.length - 1 && (
                  <span className="mx-1 text-neutral-600">·</span>
                )}
              </span>
            ))}
          </p>
        )}
      </div>

      {/* LINKS & TOOL-BADGES (RIGHT) */}
      <div className="flex flex-col justify-between gap-8 px-1 sm:w-1/3 min-w-0">
        {/* TOOLS */}
        <IconBadgeGroup
          items={sortTools(tools).map((tool) => ({
            label: tool.name,
            icon: tool.devicon ? (
              <i className={`devicon-${tool.devicon}-plain text-2xl`}></i>
            ) : undefined,
          }))}
          breakpoints={[
            { cols: 5, maxWidth: 450 },
            { cols: 7, minWidth: 451, maxWidth: 639 },
            { cols: 3, minWidth: 640, maxWidth: 768 },
            { cols: 4, minWidth: 769 },
          ]}
        />

        {/* LINKS */}
        <div
          className="flex flex-col gap-2"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.stopPropagation();
            }
          }}
        >
          {isLive && (
            <IconLink
              href={liveUrl}
              className="[&>svg:last-child]:text-gold text-neutral-400"
            >
              <Radio className={cn(DEFAULT_ICON_CLASSES, "text-gold")} />
              See live
            </IconLink>
          )}
          <IconLink href={repoLink}>
            <Code className={DEFAULT_ICON_CLASSES} />
            Visit codebase
          </IconLink>
        </div>
      </div>
    </div>
  );
};
