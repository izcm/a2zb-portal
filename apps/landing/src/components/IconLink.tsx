import { cn } from "../lib/cn";
import { ExternalLink } from "../lib/icons";

type IconLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: React.ReactNode;
};

export const IconLink = ({
  icon,
  children,
  className,
  ...props
}: IconLinkProps) => (
  <a
    {...props}
    className={cn(
      "flex items-center justify-between gap-3 w-full",
      "text-sm text-neutral-400 no-underline transition-colors hover:text-white",
      className,
    )}
  >
    <span className="flex items-center gap-3">
      {icon}
      {children}
    </span>
    <ExternalLink className="h-4 shrink-0 text-accent" />
  </a>
);
