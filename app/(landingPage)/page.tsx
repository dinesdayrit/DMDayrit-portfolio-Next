import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <About />
      </div>
    </main>
  );
}
