import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import JobRoles from "@/components/JobRoles";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Offerings from "@/components/Offerings";
import JobListings from "@/components/JobListings";
import AppDownload from "@/components/AppDownload";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Partners />
      <JobRoles />
      <Stats />
      <Features />
      <Offerings />
      <JobListings />
      <AppDownload />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
