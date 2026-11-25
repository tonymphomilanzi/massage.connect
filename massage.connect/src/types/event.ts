export interface WellnessEvent {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;

  date: string;
  startTime: string;
  endTime: string;

  clinicName: string;
  clinicSlug: string;
  distance: string;

  price: number;
  currency: string;

  isFeatured: boolean;
}

export interface LiveSession {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;

  hostName: string;

  isLive: boolean;
  scheduledAt?: string;
}