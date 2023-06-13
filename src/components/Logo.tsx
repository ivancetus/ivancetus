"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { MenuContext } from "@/context/MenuMobileContextProvider";

// const MotionLink = motion(Link);

export default function Logo() {
  const router = useRouter();
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
    router.push("/");
  };
  return (
    <div className="flex items-center justify-center">
      <motion.button
        onClick={handleClick}
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
      </motion.button>
    </div>
  );
}
