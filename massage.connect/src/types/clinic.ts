export interface Clinic {
  id: string;
  name: string;
  slug: string;
  image: string;
  rating: number;
  reviewCount: number;
  distance: string;
  services: string[];
  isVerified?: boolean;
  isFeatured?: boolean;
}