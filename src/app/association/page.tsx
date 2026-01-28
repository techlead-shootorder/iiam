import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import AssociationHero from "@/components/AssociationHero";
import AssociationContent from "@/components/AssociationContent";
import { getAssociationData } from "@/lib/api";

export default async function Page() {
  const data = await getAssociationData();

  if (!data) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="py-20 text-center">
          <p className="text-gray-600">Failed to load association data</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main>
        <AssociationHero data={data} />

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
