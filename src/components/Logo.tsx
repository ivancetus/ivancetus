"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="
          h-8 flex items-center justify-center text-xl font-bold dark:text-light
        "
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.1, type: "spring" },
        }}
        whileTap={{ scale: 0.98 }}
      >
        IVANCETUS
      </MotionLink>
    </div>
  );
}
