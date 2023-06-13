"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "@/components/LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
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
        <h3 className="capitalize font-bold text-2xl md:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className={`text-primary-500 capitalize dark:text-primar-300 ${
              companyLink ? "" : "hidden"
            }`}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 md:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
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
            position="Kindergarten Teacher"
            company=""
            companyLink=""
            time="2020-Present"
            address="Fuxing Township, Changhua County"
            work="
              Through collaboration with parents and colleagues, I plan and implement age-appropriate lessons,
              fostering children's social and emotional development and ensure their overall well-being.
              "
          />
          <Details
            position="Cleaning Worker"
            company="McDonald's"
            companyLink="https://www.mcdonalds.com/tw/zh-tw.html"
            time="2018-2019"
            address="Lukang Township, Changhua County"
            work="
              I worked the graveyard shift, and responsible for cleaning and sanitizing dishes, utensils, and kitchen equipment,
              ensuring a safe and sanitary environment for food preparation and service.
              "
          />
          <Details
            position="Operator"
            company="SPIL"
            companyLink="https://www.spil.com.tw/"
            time="2016-2018"
            address="Hemei Township, Changhua County"
            work="
               I worked as a material distriputor of the molding station.
               My responsibility is to ensure no delay in schedule, monitor equipment performance, and make necessary adjustments to maintain optimal operation.
              "
          />
        </ul>
      </div>
    </div>
  );
}
