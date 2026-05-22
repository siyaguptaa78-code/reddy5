import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import Features from "@/components/Features";
import SportsCoverage from "@/components/SportsCoverage";
import WithdrawalProcess from "@/components/WithdrawalProcess";
import Bonuses from "@/components/Bonuses";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import ResponsibleGaming from "@/components/ResponsibleGaming";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <InfoSection />
      <Features />
      <SportsCoverage />
      <WithdrawalProcess />
      <Bonuses />
      <ComparisonTable />
      <FAQSection />
      <Testimonials />
      <ResponsibleGaming />
      <Footer />
    </main>
  );
}
