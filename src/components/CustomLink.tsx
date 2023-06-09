import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

type Props = React.ComponentPropsWithoutRef<"a">;

export default function CustomLink({ href, children, ...rest }: Props) {
  const internal = href && href.startsWith("/");
  const anchor = href && href.startsWith("#");
  const className =
    "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400";

  if (internal) {
    return (
      <Link href={href} className={className}>
        <a {...rest}>{children}</a>
      </Link>
    );
  }

  if (anchor) {
    return (
      <a href={href} {...rest} className={className}>
        {children}
      </a>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={className}
    >
      {children}
      {typeof children === "string" && (
        <LinkArrow className="ml-1 inline-block h-4 !w-4" />
      )}
    </a>
  );
}
