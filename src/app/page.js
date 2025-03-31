import Header from "@/components/Header";
import PresentationSection from "@/components/PresentationSection";
import ServiceSection from "@/components/ServiceSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FeedbackCarousel from "@/components/FeedbackCarousel";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />   
      <PresentationSection /> 
      <ServiceSection />
      <ShowcaseSection />
      <FeedbackCarousel />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
