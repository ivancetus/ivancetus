import Image from "next/image";
import profilePic from "../../../public/images/profile-pic-1-transformed.png";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificate from "@/components/Certificate";

export default function AboutPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="grid w-full grid-cols-8 gap-4">
        <div
          className="
              col-span-6 col-start-2 md:col-span-8 relative h-max
              order-1 p-4 xs:p-2
              "
        >
          <Image
            src={profilePic}
            alt="Ivan"
            className="w-full h-auto"
            priority
            sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw
              "
          />
        </div>
        <div className="pt-4 col-span-8 flex flex-col items-start justify-start order-2">
          <h2 className="mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75 md:text-lg">
            ABOUT
          </h2>
          <p className="font-medium text-lg md:text-base">
            Hi, I&apos;m Ivan, a self-taught software engineer and web developer
            with a passion for creating simple and practical user-centered
            experiences.
          </p>
          <p className="mt-4 font-medium text-lg md:text-base">
            My current position is a kindergarten teacher, every year I get to
            see new generations rise and change, life have been very different
            for those born with a smart phone at hand.
          </p>
        </div>
        <div className="pt-8 col-span-8 flex flex-col items-start justify-start order-3">
          <h2 className="mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75 md:text-lg">
            SKILL
          </h2>
          <p className="font-medium text-lg md:text-base">
            NextJS, Tailwind CSS, HTML, Python, GraphQL, Typescript
          </p>
        </div>
        <div className="pt-12 col-span-8 flex flex-col items-start justify-start order-3">
          <h2 className="mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75 md:text-lg">
            Experience
          </h2>
          <Experience />
          <h2 className="pt-12 mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75 md:text-lg">
            Education
          </h2>
          <Education />
          <h2 className="pt-12 mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75 md:text-lg">
            Certificate
          </h2>
          <Certificate />
        </div>
      </div>
    </main>
  );
}
