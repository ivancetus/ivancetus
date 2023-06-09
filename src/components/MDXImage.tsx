import type { ImageProps } from "next/image";
import NextImage from "next/image";
import Image from "next/image";
type Props = ImageProps & { base64?: string };
export default function MDXImage({
  src,
  alt,
  height,
  width,
  base64,
  ...rest
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      // These are dynamically provided at build-time by `rehypeImageSize`
      height={height}
      width={width}
      sizes="(min-width: 40em) 40em, 100vw"
      placeholder={base64 ? "blur" : "empty"}
      blurDataURL={base64}
      priority
      {...rest}
    />
  );
}
