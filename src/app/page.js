import Header from "@/components/Header";
import PresentationSection from "@/components/PresentationSection";
import ServiceSection from "@/components/ServiceSection";
import ShowcaseSection from "@/components/ShowcaseSection";

export default function Home() {
  return (
    <div>
      <Header />   
      <PresentationSection /> 
      <ServiceSection />
      <ShowcaseSection />
    </div>
  );
}
