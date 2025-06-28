import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import UseCase from "@/components/sections/UseCase";
import CTA from "@/components/sections/CTA";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Problem />
      <Features />
      <Testimonials />
      <UseCase />
      <CTA />
      <Pricing />
      <Footer />
    </main>
  );
}
