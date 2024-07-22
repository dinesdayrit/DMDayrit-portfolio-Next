import Image from "next/image";

export default function About() {
  return (
    <section
      className="flex flex-col justify-center items-center max-w-7xl py-16"
      id="about"
    >
      <h2 className="font-serif font-bold text-xl md:text-3xl mb-5 text-sky-700">
        About me
      </h2>
      <div className="flex flex-col items-center md:flex-row gap-8 justify-center">
        <Image
          src="profilepic.svg"
          width={250}
          height={250}
          alt="profile"
          className="bg-sky-800 rounded-s-full rounded-tr-xl mt-12"
          priority
        />
        <p className="md:mt-16 ml-2 mr-2 md:w-1/3 font-mono text-xl text-balance text-center md:text-justify">
          &quot;Hey, I&apos;m Dines Dayrit, a dedicated web developer with a
          specialization in React.js. I&apos;m all about crafting dynamic and
          interactive user interfaces that breathe life into web
          applications.&quot;
        </p>
      </div>
    </section>
  );
}
