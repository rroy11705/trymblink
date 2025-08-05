import Footer from "@/components/layout/Footer";
import Contact from "@/components/molecules/common/Contact";
import Goals from "@/components/molecules/home/Goals";
import Hero from "@/components/molecules/home/Hero";
import HowWeHelp from "@/components/molecules/home/HowWeHelp";
import Impact from "@/components/molecules/home/Impact";
import Newsletter from "@/components/molecules/home/Newsletter";
import Projects from "@/components/molecules/home/Projects";
import Services from "@/components/molecules/home/Services";
import Success from "@/components/molecules/home/Success";
import TrustedBy from "@/components/molecules/home/TrustedBy";


export default function HomePage() {
  return (
    <div className="font-sans">
      <main className="w-full">
        <Hero /> 
        <Success />
        <Goals />
        <HowWeHelp />
        <TrustedBy />
        <Impact />
        <Services />
        <Projects />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
