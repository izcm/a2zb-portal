import { cn } from "../lib/cn";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ className, children, ...props }: LinkProps) => (
  <a
    {...props}
    className={cn(
      "text-sm text-neutral-400 no-underline transition-colors hover:text-white",
      className,
    )}
  >
    {children}
  </a>
);
