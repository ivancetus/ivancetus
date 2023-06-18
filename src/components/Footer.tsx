import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        w-full lg:text-base xs:text-sm
        text-zinc-700
        dark:text-zinc-200
        "
    >
      <div className="p-8 py-8 flex items-center justify-center lg:flex-col lg:py-6">
        <span>
          Copyright &copy; {new Date().getFullYear()} &nbsp;{" "}
          <Link href="/">Ivancetus</Link>
        </span>
      </div>
    </footer>
  );
}
