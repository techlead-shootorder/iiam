import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import AssociationHero from "@/components/AssociationHero";
import AssociationContent from "@/components/AssociationContent";
import { getSocietiesData } from "@/lib/api";

export default async function Page() {
  const data = await getSocietiesData();

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main>
        <AssociationHero data={data} />

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Societies" },
          ]}
        />

        <AssociationContent sections={data.Section} />
      </main>

      <Footer />
    </div>
  );
}
