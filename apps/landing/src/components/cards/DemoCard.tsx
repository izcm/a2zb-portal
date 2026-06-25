import { BtnPill } from "../BtnPill";
import { Link } from "../Link";
import type { Demo } from "../../data/demos";
import { ToolBadge } from "./ToolBadge";

type DemoCardProps = Demo & { onSelectDemo?: (id: string) => void };

export const DemoCard = ({
  id,
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
      <div className="flex flex-col text-start basis-2/3">
        <h3 className="text-white tracking-tight mb-1">{title}</h3>

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
      <div className="flex gap-8 flex-col ml-auto">
        {/* TOOLS */}
        <div className="grid grid-cols-4 gap-2">
          {tools.slice(0, 7).map((tool) => (
            <ToolBadge name={tool} />
          ))}
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-1 items-start">
          {extraLinks?.map((link) => (
            <Link
              href={link.classNames}
              className={`${link.classNames} text-md`}
            >
              {link.label} →
            </Link>
          ))}
          <Link href={repoLink} className="text-md">
            visit codebase
          </Link>
        </div>
      </div>
    </div>
  );
};
