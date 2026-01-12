import Header from "@/components/Header";
import Footer from "@/components/Footer";


// Home Sections
import HomeHero from "@/components/Home/HeroSection";
import JoinSection from "@/components/Home/JoinSection";
import EventsSection from "@/components/Home/EventsSection";
import HomeAbout from "@/components/Home/AboutSection";
import NewsSection from "@/components/Home/NewsSection";

// Association Sections
import AssociationHero from "@/components/Association/HeroSection";
import AssociationAboutSection from "@/components/Association/AboutSection";
import AssociationOurRoleSection from "@/components/Association/OurRoleSection";
import AssociationVisionMissionSection from "@/components/Association/VisionMissionSection";
import AssociationGlobalImpactSection from "@/components/Association/GlobalImpactSection";
import AssociationLeadershipSection from "@/components/Association/LeadershipSection";
import AssociationResearchEducationSection from "@/components/Association/ResearchEducationSection";
import AssociationStrategicPrioritiesSection from "@/components/Association/StrategicPrioritiesSection";
import AssociationNetZeroSection from "@/components/Association/NetZeroSection";
import AssociationGlobalCommunitySection from "@/components/Association/GlobalCommunitySection";
import AssociationContactSection from "@/components/Association/ContactSection";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // For now, show pages even if Strapi data is not found
  // This prevents 404 errors while we're setting up Strapi
  switch (slug) {
    case "/":
      return (
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main>
            <HomeHero />
            <HomeAbout />
            <JoinSection />
            <EventsSection />
            <NewsSection />
          </main>
          <Footer />
        </div>
      );
    case "association":
      return (
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main>
            <AssociationHero />
            <AssociationAboutSection />
            <AssociationOurRoleSection />
            <AssociationVisionMissionSection />
            <AssociationGlobalImpactSection />
            <AssociationLeadershipSection />
            <AssociationResearchEducationSection />
            <AssociationStrategicPrioritiesSection />
            <AssociationNetZeroSection />
            <AssociationGlobalCommunitySection />
            <AssociationContactSection />
          </main>
          <Footer />
        </div>
      );
  }
}
