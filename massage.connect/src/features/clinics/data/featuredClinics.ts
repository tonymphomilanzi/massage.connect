import type { Clinic } from "@/types/clinic";

export const featuredClinics: Clinic[] = [
  {
    id: "1",
    name: "Serenity Massage & Spa",
    slug: "serenity-massage-spa",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=85",
    rating: 4.8,
    reviewCount: 124,
    distance: "1.2 km",
    services: ["Relaxation", "Therapeutic", "Deep Tissue"],
    isVerified: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Wellness Touch Clinic",
    slug: "wellness-touch-clinic",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=85",
    rating: 4.6,
    reviewCount: 98,
    distance: "2.5 km",
    services: ["Swedish", "Sports", "Hot Stone"],
    isVerified: true,
    isFeatured: true,
  },
  {
    id: "3",
    name: "Zen Massage Center",
    slug: "zen-massage-center",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=900&q=85",
    rating: 4.9,
    reviewCount: 210,
    distance: "3.1 km",
    services: ["Relaxation", "Aromatherapy", "Couples"],
    isVerified: true,
    isFeatured: true,
  },
  {
    id: "4",
    name: "Healing Hands Clinic",
    slug: "healing-hands-clinic",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=85",
    rating: 4.7,
    reviewCount: 176,
    distance: "4.2 km",
    services: ["Therapeutic", "Deep Tissue", "Reflexology"],
    isVerified: false,
    isFeatured: true,
  },
  {
    id: "5",
    name: "Tranquil Wellness Spa",
    slug: "tranquil-wellness-spa",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85",
    rating: 4.9,
    reviewCount: 152,
    distance: "5.0 km",
    services: ["Relaxation", "Facial", "Aromatherapy"],
    isVerified: true,
    isFeatured: false,
  },
];