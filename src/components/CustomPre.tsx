// ref: https://philstainer.io/blog/copy-code-button-markdown

import { useEffect, useRef, useState } from "react";

import { copyToClipboard } from "@/lib/copyToClipboard";
import { removeDuplicateNewLine } from "@/lib/removeDuplicateNewLine";
import { CopyIcon } from "@/components/Icons";

type Props = React.ComponentPropsWithoutRef<"pre">;

export default function CustomPre({ children, className, ...props }: Props) {
  const preRef = useRef<HTMLPreElement>(null);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  const onClick = async () => {
    if (preRef.current?.innerText) {
      await copyToClipboard(removeDuplicateNewLine(preRef.current.innerText));
      setCopied(true);
    }
  };

  return (
    <div className="group relative">
      <pre
        {...props}
        ref={preRef}
        className={`${className} focus:outline-none`}
      >
        <div className="absolute top-0 right-0 m-2 flex items-center rounded-md bg-[#282a36] dark:bg-[#262626]">
          <span
            className={`
              hidden px-2 text-xs text-green-400 ease-in ${
                copied ? "group-hover:flex" : ""
              }
            `}
          >
            Copied!
          </span>
          <button
            type="button"
            aria-label="Copy to Clipboard"
            onClick={onClick}
            disabled={copied}
            className={`
              hidden rounded-md border bg-transparent p-2 transition ease-in-out duration-300 focus:outline-none group-hover:flex
              ${
                copied
                  ? "border-green-400"
                  : "border-gray-600 hover:border-gray-400 focus:ring-4 focus:ring-gray-200/50 dark:border-gray-700 dark:hover:border-gray-400"
              }
            `}
          >
            <CopyIcon className="" copied={copied} />
          </button>
        </div>
        {children}
      </pre>
    </div>
  );
}
