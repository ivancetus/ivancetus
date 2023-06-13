import { defineDocumentType, makeSource } from "@contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeSlug from "rehype-slug";
import rehypeImageSize from "./src/plugins/rehypeImageSize";
import remarkMdxImages from "remark-mdx-images";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `content/posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    slug: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields: {
    url: { type: "string", resolve: (post) => `/posts/${post.slug}` },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    resolveCwd: "relative",
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".png": "dataurl",
        ".jpg": "dataurl",
      };
      return options;
    },
    remarkPlugins: [remarkMdxImages],
    rehypePlugins: [
      rehypeImageSize, // For adding image metadata (width, height)
      rehypeSlug, // For generating slugs for headings
      rehypeCodeTitles, // For adding titles to code blocks
      [rehypePrism, { ignoreMissing: true }], // For code syntax highlighting
    ],
  },
});
export default contentLayerConfig;
