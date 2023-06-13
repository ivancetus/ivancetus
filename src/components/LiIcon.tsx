import { motion, useScroll } from "framer-motion";
import { MutableRefObject } from "react";

export default function LiIcon({
  reference,
}: {
  reference: MutableRefObject<null>;
}) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        width="75"
        height="75"
        viewBox="0 0 100 100"
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary-500 stroke-1 fill-none dark:stroke-primary-300"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary-500 dark:fill-primary-300"
        />
      </svg>
    </figure>
  );
}
