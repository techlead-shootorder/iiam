import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import AssociationHero from "@/components/AssociationHero";
import AssociationContent from "@/components/AssociationContent";
import { getAssociationData } from "@/lib/api";

export default async function Page() {
  const data = await getAssociationData();

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main>
        <AssociationHero data={data} />

        {/* BREADCRUMB — THIS IS THE ONE YOU WANT */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Association" },
          ]}
        />

        <AssociationContent sections={data.Section} />
      </main>

      <Footer />
    </div>
  );
}
