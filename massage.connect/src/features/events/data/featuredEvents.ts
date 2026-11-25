import type {
  WellnessEvent,
  LiveSession,
} from "@/types/event";

export const featuredEvent: WellnessEvent = {
  id: "event-1",

  title: "Full Body Relaxation Workshop",

  slug: "full-body-relaxation-workshop",

  description:
    "Learn simple techniques to reduce stress and improve your well-being.",

  image:
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1400&q=90",

  date: "Sat, Oct 25, 2025",

  startTime: "10:00 AM",

  endTime: "12:00 PM",

  clinicName: "Zen Massage Center",

  clinicSlug: "zen-massage-center",

  distance: "3.1 km",

  price: 49,

  currency: "USD",

  isFeatured: true,
};

export const featuredLiveSession: LiveSession = {
  id: "live-1",

  title: "Live Massage Q&A",

  slug: "live-massage-qa",

  description:
    "Ask questions, get expert advice from certified therapists.",

  image:
    "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=900&q=85",

  hostName: "MassageConnect Wellness Team",

  isLive: true,
};