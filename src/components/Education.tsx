"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "@/components/LiIcon";

const Details = ({
  type,
  time,
  place,
  info,
}: {
  type: string;
  time: string;
  place: string;
  info: string;
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="
        my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]
        "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 md:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="w-full">
      <div ref={ref} className="mx-auto relative md:w-full">
        {/* moving line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="
            absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[3px] xs:w-[2px] md:left-[30px] xs:left-[19px]
            "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Education In Early Childhood Education"
            time="2020-2022"
            place="Chung Chou University of Science and Technology"
            info="
              Relevant courses included Child Development, Curriculum Design, and Classroom Management.
              "
          />
        </ul>
      </div>
    </div>
  );
}
