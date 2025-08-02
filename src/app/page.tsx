import Goals from "@/components/molecules/home/Goals";
import Hero from "@/components/molecules/home/Hero";
import HowWeHelp from "@/components/molecules/home/HowWeHelp";
import Success from "@/components/molecules/home/Success";
import TrustedBy from "@/components/molecules/home/TrustedBy";


export default function Home() {
  return (
    <div className="font-sans px-4 sm:p-0">
      <main className="w-full">
        <Hero /> 
        <Success />
        <Goals />
        <HowWeHelp />
        <TrustedBy />
        <div className="h-[300vh]"></div>
      </main>
      <footer>

      </footer>
    </div>
  );
}
