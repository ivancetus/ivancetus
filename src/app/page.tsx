import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import homePic from "../../public/images/ivancetus_Weaving_Ideas_Into_Digital_Realities_blue_theme_soft_2_bg.png";

export default function HomePage() {
  return (
    <main className="flex items-center w-full h-auto">
      <div className="flex items-center justify-between w-full lg:flex-col">
        {/* Image */}
        <div className="w-1/2 md:w-full">
          <Image
            src={homePic}
            alt="Ivan"
            className="w-full h-auto lg:hidden md:inline-block md:w-full"
            priority
            sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw
                "
          />
        </div>

        {/* Introduction Text */}
        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
          <AnimatedText
            text="Weaving Ideas into Digital Realities."
            className="
                !text-6xl !text-left
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
                "
          />

          <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            As a junior software developer, I&apos;m thrilled to share a
            selection of my projects that showcase my passion for coding and
            problem-solving. From web development to problem-solving challenges,
            each project reflects my dedication to learning and growing as a
            software developer.
          </p>
        </div>
      </div>
    </main>
  );
}
