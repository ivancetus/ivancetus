import Projects from "@/components/Projects";
import featuredProject1 from "../../../public/images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg";
import youtubeProject from "../../../public/images/christian-wiediger-unsplash-1024.png";
import AnimatedText from "@/components/AnimatedText";
export default function Page() {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light text-center">
      <AnimatedText
        text="List of projects I built, some have live demo!"
        className="mb-16 !text-6xl lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
      />

      <div className="grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-16 lg:gap-x-8 sm:gap-y-18 sm:gap-x-0">
        <div className="col-span-12">
          <Projects
            title="Youtube Download"
            summary="
                Build with Nextjs 13 and Flask, a simple interface, takes two input data and respond with two button to press (sometimes alert window). This project was originated from a Python PyQt5 application, to read more, check out the article.
                "
            img={youtubeProject}
            projectLink="https://yt.ivancetus.com/"
            articleLink="/posts/youtube-download-project"
            githubLink="https://github.com/ivancetus/nextjs_hobby_frontend"
          />
        </div>
        {/*<div className="col-span-12">*/}
        {/*  <Projects*/}
        {/*    title="Number Guessing Game"*/}
        {/*    summary="*/}
        {/*        Develop a simple game where players guess a randomly generated number within a limited number of attempts. Players receive hints on whether the guessed number is higher or lower. Ideal for entry-level programmers to practice core concepts like conditionals, loops, and random number generation.*/}
        {/*        "*/}
        {/*    img={featuredProject1}*/}
        {/*    projectLink="/"*/}
        {/*    articleLink="/"*/}
        {/*    githubLink="/"*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    </main>
  );
}
