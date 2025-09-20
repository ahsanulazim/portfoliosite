import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Expertise />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
    </main>
  );
}
