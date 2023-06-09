import CustomImage from "@/components/CustomImage";
import CustomPre from "@/components/CustomPre";
import CustomLink from "@/components/CustomLink";
import {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
} from "@/components/CustomHeading";
import { MDXComponents } from "mdx/types";
import MDXImage from "@/components/MDXImage";

// Custom components/renderers to pass to MDX.
const mdxComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
  a: CustomLink,
  pre: CustomPre,
  img: MDXImage,
};

export default mdxComponents;
