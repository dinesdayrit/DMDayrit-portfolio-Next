import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <About />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
