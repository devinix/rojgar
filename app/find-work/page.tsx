import Header from "@/components/Header";
import FindWorkHero from "@/components/FindWorkHero";
import JobCategories from "@/components/JobCategories";
import Features from "@/components/Features";
import AppDownload from "@/components/AppDownload";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function FindWorkPage() {
    return (
        <main className="min-h-screen bg-[#F9FAFB]">
            <Header />
            <FindWorkHero />
            <JobCategories />
            <Features />
            <AppDownload />
            <Process />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    );
}
