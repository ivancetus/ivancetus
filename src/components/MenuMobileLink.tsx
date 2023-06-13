import { usePathname, useRouter } from "next/navigation";

export default function MenuMobileLink({
  href,
  title,
  className = "",
  toggle,
}: {
  href: string;
  title: string;
  className: string;
  toggle: Function;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = title === "Home";
  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-dark dark:text-light my-2`}
    >
      {title}
      <span
        className={`
        h-[1px] inline-block bg-dark dark:bg-light
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        
                ${pathname.startsWith(href) && !isHome ? "w-full" : "w-0"}
        ${pathname === "/" && isHome ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </button>
  );
}
