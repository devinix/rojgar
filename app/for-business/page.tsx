import Header from "@/components/Header";
import ForBusinessHero from "@/components/ForBusinessHero";
import JobCategories from "@/components/JobCategories";
import BusinessFeatures from "@/components/BusinessFeatures";
import AppDownload from "@/components/AppDownload";
import BusinessProcess from "@/components/BusinessProcess";
import BusinessTestimonials from "@/components/BusinessTestimonials";
import BusinessCTA from "@/components/BusinessCTA";
import Footer from "@/components/Footer";

export default function ForBusinessPage() {
    return (
        <main className="min-h-screen bg-[#F9FAFB]">
            <Header />
            <ForBusinessHero />
            <JobCategories />
            <BusinessFeatures />
            <AppDownload />
            <BusinessProcess />
            <BusinessTestimonials />
            <BusinessCTA />
            <Footer />
        </main>
    );
}
