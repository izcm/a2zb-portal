import { sortTools, type Demo } from "../../data/demos";

import { ToolBadge } from "./ToolBadge";
import { IconLink } from "../IconLink";

import { Clapperboard, Code } from "../../lib/icons";

type DemoCardProps = Demo & { onSelectDemo?: (id: string) => void };

export const DemoCard = ({
  title,
  desc,
  repoLink,
  extraLinks,
  tools,
  composedOf,
  onSelectDemo,
}: DemoCardProps) => {
  return (
    <div
      className="
        flex gap-4
        border border-white/5 rounded-lg p-4
        cursor-pointer bg-white/3
      "
    >
      {/* TEXT INFO (LEFT) */}
      <div className="flex flex-col flex-1 text-start">
        <h3 className="text-white tracking-tight my-1">{title}</h3>

        {/* DESCRIPTION */}
        <p className="flex-1 text-neutral-400 text-sm leading-relaxed mb-4">
          {desc.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>

        {/* BUILD WITH */}
        {composedOf && (
          <p className="text-xs text-neutral-500">
            built with:{" "}
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
      <div className="flex flex-col justify-between gap-8 w-1/3">
        {/* TOOLS */}
        <div className="grid grid-cols-4 gap-2">
          {sortTools(tools)
            .slice(0, 7)
            .map((tool) => (
              <ToolBadge name={tool.name} icon={tool.devicon} />
            ))}
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-2 px-2">
          {extraLinks?.map((link) => (
            <IconLink
              key={link.label}
              href={link.label}
              icon={<Clapperboard className="h-5 text-accent" />}
            >
              {link.label}
            </IconLink>
          ))}
          <IconLink href={repoLink} icon={<Code className="h-5 text-accent" />}>
            visit codebase
          </IconLink>
        </div>
      </div>
    </div>
  );
};
