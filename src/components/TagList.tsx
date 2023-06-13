"use client";
import Link from "next/link";
import { useContext } from "react";
import { tagContext } from "@/context/TagContextProvider";
import { usePathname, useRouter } from "next/navigation";

export default function TagList({ tagName, count }: TagCountPair) {
  const { tag, setTag } = useContext(tagContext);
  const pathname = usePathname();
  const href = `/posts/tag/${tagName}`;
  const isTagPage = pathname.startsWith(href);
  const router = useRouter();
  const handleClick = () => {
    if (isTagPage) {
      setTag("");
      router.push("/posts");
    } else {
      setTag(tagName);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`
      transition-colors text-xs flex-row font-mono p-1 py-0.5 m-1 dark:bg-zinc-700 bg-zinc-200 rounded-lg 
      hover:dark:bg-zinc-300 hover:bg-zinc-700 hover:text-zinc-300 hover:dark:text-zinc-500
      ${
        isTagPage
          ? "font-semibold bg-zinc-700 dark:bg-zinc-300 text-zinc-300 dark:text-zinc-500"
          : ""
      }
      `}
    >
      <Link href={href}>
        {tagName.toUpperCase()}({count})
      </Link>
    </button>
  );
}
