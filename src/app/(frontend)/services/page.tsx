import Footer from "@/components/layout/Footer";
import Contact from "@/components/molecules/common/Contact";
import Hero from "@/components/molecules/services/Hero";
import Services from "@/components/molecules/services/Services";
import TrustedBy from "@/components/molecules/common/TrustedBy";
import { PageSource } from "@/types/contact";


export default function ServicesPage() {
  return (
    <div className="font-sans">
      <main className="w-full">
        <Hero /> 
        <Services />
        <TrustedBy />
        <Contact pageSource={PageSource.SERVICES} />
      </main>
      <Footer />
    </div>
  );
}