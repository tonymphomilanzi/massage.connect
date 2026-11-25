import Hero from "@/features/home/components/Hero";
import QuickActions from "@/features/home/components/QuickActions";
import FeaturedClinics from "@/features/home/components/FeaturedClinics";
import EventsAndLive from "@/features/home/components/EventsAndLive";
import WhyChooseUs from "@/features/home/components/WhyChooseUs";
import BottomCTA from "@/features/home/components/BottomCTA";

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero with Location Search & Geolocation */}
      <Hero />

      {/* 2. Quick Actions (4-item grid) */}
      <QuickActions />

      {/* 3. Featured Massage Clinics */}
      <FeaturedClinics />

      {/* 4. Upcoming Event & Live Session */}
      <EventsAndLive />

      {/* 5. Why Choose MassageConnect */}
      <WhyChooseUs />

      {/* 6. Bottom Journey CTA Banner */}
      <BottomCTA />
    </main>
  );
}