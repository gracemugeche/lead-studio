import Navbar from "@/components/Navbar";
import ScrollAnimations from "@/components/ScrollAnimations";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import About from "@/components/About";
import TrustedBy from "@/components/TrustedBy";
import CaseStudies from "@/components/CaseStudies";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <About />
        <TrustedBy />
        <CaseStudies />
        <CtaBanner />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}