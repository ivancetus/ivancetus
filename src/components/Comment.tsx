"use client";

import Giscus from "@giscus/react";
import { giscusConfig } from "../../giscus.config";

import { themeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";

export default function Comment() {
  const { theme } = useContext(themeContext);
  return (
    <div id="comment" className="w-[101%] mx-auto py-6">
      <Giscus
        repo={giscusConfig.repo}
        repoId={giscusConfig.repoId}
        category={giscusConfig.category}
        categoryId={giscusConfig.categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        loading="lazy"
      />
    </div>
  );
}
