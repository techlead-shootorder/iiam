import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// Home
import HomeHero from "@/components/Home/HeroSection";
import JoinSection from "@/components/Home/JoinSection";
import EventsSection from "@/components/Home/EventsSection";
import HomeAbout from "@/components/Home/AboutSection";
import NewsSection from "@/components/Home/NewsSection";

// Shared CMS Pages
import AssociationHero from "@/components/AssociationHero";
import AssociationContent from "@/components/AssociationContent";
import Breadcrumb from "@/components/Breadcrumb";

import {
  getAssociationData,
  getCouncilsData,
  getSocietiesData,
} from "@/lib/api";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Block events here
  if (slug === "events") notFound();

  // Home page
  if (slug === "home" || slug === "") {
    return (
      <div className="min-h-screen bg-white">
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
  }

  let data = null;

  if (slug === "association") data = await getAssociationData();
  if (slug === "councils") data = await getCouncilsData();
  if (slug === "societies") data = await getSocietiesData();

  if (!data) notFound();

  const pageTitleMap: Record<string, string> = {
    association: "Association",
    councils: "Councils",
    societies: "Societies",
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* HARD BOUNDARY */}
      <div className="relative">
        <AssociationHero data={data} />

        {/* FORCE breadcrumb under hero */}
        <div
          style={{
            position: "relative",
            marginTop: "0px",
            background: "white",
            zIndex: 20,
          }}
        >
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: pageTitleMap[slug] || slug },
            ]}
          />
        </div>

        <AssociationContent sections={data.Section} />
      </div>

      <Footer />
    </div>
  );
}

// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// // Home Sections
// import HomeHero from "@/components/Home/HeroSection";
// import JoinSection from "@/components/Home/JoinSection";
// import EventsSection from "@/components/Home/EventsSection";
// import HomeAbout from "@/components/Home/AboutSection";
// import NewsSection from "@/components/Home/NewsSection";

// // Association Sections
// import AssociationHero from "@/components/Association/HeroSection";
// import AssociationAboutSection from "@/components/Association/AboutSection";
// import AssociationOurRoleSection from "@/components/Association/OurRoleSection";
// import AssociationVisionMissionSection from "@/components/Association/VisionMissionSection";
// import AssociationGlobalImpactSection from "@/components/Association/GlobalImpactSection";
// import AssociationLeadershipSection from "@/components/Association/LeadershipSection";
// import AssociationResearchEducationSection from "@/components/Association/ResearchEducationSection";
// import AssociationStrategicPrioritiesSection from "@/components/Association/StrategicPrioritiesSection";
// import AssociationNetZeroSection from "@/components/Association/NetZeroSection";
// import AssociationGlobalCommunitySection from "@/components/Association/GlobalCommunitySection";
// import AssociationContactSection from "@/components/Association/ContactSection";

// import { notFound } from "next/navigation";

// export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;

//     // Let /events and /events/[slug] be handled by the events router
//   if (slug === "events") {
//     notFound();
//   }

//   // For now, show pages even if Strapi data is not found
//   // This prevents 404 errors while we're setting up Strapi
//   switch (slug) {
//     case "":
//     case "home":
//       return (
//         <div className="min-h-screen flex flex-col bg-white">
//           <Header />
//           <main>
//             <HomeHero />
//             <HomeAbout />
//             <JoinSection />
//             <EventsSection />
//             <NewsSection />
//           </main>
//           <Footer />
//         </div>
//       );

//     case "associations":
//       return (
//         <div className="min-h-screen flex flex-col bg-white">
//           <Header />
//           <main>
//             <AssociationHero />
//             <AssociationAboutSection />
//             <AssociationOurRoleSection />
//             <AssociationVisionMissionSection />
//             <AssociationGlobalImpactSection />
//             <AssociationLeadershipSection />
//             <AssociationResearchEducationSection />
//             <AssociationStrategicPrioritiesSection />
//             <AssociationNetZeroSection />
//             <AssociationGlobalCommunitySection />
//             <AssociationContactSection />
//           </main>
//           <Footer />
//         </div>
//       );

//     default:
//       notFound();
//   }

// }
