import { cn } from "../lib/cn";
import { ExternalLink } from "../lib/icons";

type IconLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: React.ReactNode;
};

export function IconLink({
  icon,
  children,
  className,
  iconClassNames,
  ...props
}: IconLinkProps & { iconClassNames?: string }) {
  const defaultIconClassnames =
    "flex items-center h-4 w-4 shrink-0 text-accent";

  return (
    <a
      {...props}
      className={cn(
        "flex items-center justify-between gap-3 w-full",
        "text-sm text-neutral-400 no-underline transition-colors hover:text-white",
        className,
      )}
    >
      <span className="flex items-center gap-3">
        <span className={cn(defaultIconClassnames, iconClassNames)}>
          {icon}
        </span>
        {children}
      </span>
      <ExternalLink className={cn(defaultIconClassnames, iconClassNames)} />
    </a>
  );
}
