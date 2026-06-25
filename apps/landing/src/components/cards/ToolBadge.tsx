type ToolBadgeProps = {
  name: string;
  icon?: string;
};

export const ToolBadge = ({ name, icon }: ToolBadgeProps) => (
  <div className="flex flex-col items-center gap-2">
    <div
      className="
        flex items-center justify-center
        w-12 h-12
        rounded-full
        bg-black/40 border border-soft/16
      "
    >
      {icon ? (
        <i className={`devicon-${icon}-plain text-2xl`}></i>
      ) : (
        <span className="text-lg font-semibold text-white">
          {name[0].toUpperCase()}
        </span>
      )}
    </div>

    <span className="text-xs text-neutral-400">{name}</span>
  </div>
);
