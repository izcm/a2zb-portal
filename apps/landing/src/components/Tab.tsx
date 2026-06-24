import { cn } from "../lib/cn";

type TabsProps<T extends string> = {
  value: T;
  onChange: (v: T) => void;
  items: readonly T[];
  classNames?: {
    container?: string;
    active?: string;
    inactive?: string;
  };
};

export function Tabs<T extends string>({
  value,
  onChange,
  items,
  classNames,
}: TabsProps<T>) {
  return (
    <div className={cn("flex", classNames?.container)}>
      {items.map((item) => {
        const active = item === value;

        return (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={cn(
              "flex-1 py-2 text-center transition-colors duration-200 cursor-pointer",
              active
                ? cn(
                    "border-b-2 border-accent/60 text-accent",
                    classNames?.active,
                  )
                : cn(
                    "border-soft hover:border-accent/30 text-muted",
                    classNames?.inactive,
                  ),
            )}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
