import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Project, Skills, WorkingCurrently } from "@/components/Project";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center ">
      <div className="max-w-3xl w-full">
        <Header />
        <Hero />
        <Project />
        <WorkingCurrently/>
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
