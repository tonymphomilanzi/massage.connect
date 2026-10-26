import Hero from "@/features/home/components/Hero";
import QuickActions from "@/features/home/components/QuickActions";
import FeaturedClinics from "@/features/clinics/components/FeaturedClinics";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuickActions />
      <FeaturedClinics />
    </main>
  );
}