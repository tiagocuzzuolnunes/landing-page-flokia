import Header from "@/components/Header";
import PresentationSection from "@/components/PresentationSection";
import ServiceSection from "@/components/ServiceSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FeedbackSection from "@/components/FeedbackSection";
import FeedbackCarousel from "@/components/FeedbackCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />   
      <PresentationSection /> 
      <ServiceSection />
      <ShowcaseSection />
      {/* <FeedbackSection /> */}
      <FeedbackCarousel />
      <Footer />
    </div>
  );
}
