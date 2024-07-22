import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-16">
        <Hero />
        <About />
        <Experience />
      </div>
    </main>
  );
}
