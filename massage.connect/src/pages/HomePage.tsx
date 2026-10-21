/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  CirclePlay,

  Heart,

  MapPin,
  Menu,
  Radio,
  Search,
  ShieldCheck,

  Ticket,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Clinic = {
  id: number;
  name: string;
  image: string;
  rating: string;
  reviews: number;
  distance: string;
  services: string[];
  description: string;
};

const clinics: Clinic[] = [
  {
    id: 1,
    name: "Serenity Massage & Spa",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&q=85",
    rating: "4.8",
    reviews: 124,
    distance: "1.2 km",
    services: ["Relaxation", "Therapeutic", "Deep Tissue"],
    description:
      "Experience complete relaxation in a peaceful spa environment with experienced massage therapists.",
  },
  {
    id: 2,
    name: "Wellness Touch Clinic",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1000&q=85",
    rating: "4.6",
    reviews: 98,
    distance: "2.5 km",
    services: ["Swedish", "Sports", "Hot Stone"],
    description:
      "Professional massage treatments designed to restore balance and improve your well-being.",
  },
  {
    id: 3,
    name: "Zen Massage Center",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1000&q=85",
    rating: "4.9",
    reviews: 210,
    distance: "3.1 km",
    services: ["Relaxation", "Aromatherapy", "Couples"],
    description:
      "A serene wellness destination offering personalized massage and aromatherapy experiences.",
  },
  {
    id: 4,
    name: "Healing Hands Clinic",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&q=85",
    rating: "4.7",
    reviews: 176,
    distance: "4.2 km",
    services: ["Therapeutic", "Deep Tissue", "Reflexology"],
    description:
      "Reconnect with your body through therapeutic treatments and expert massage care.",
  },
  {
    id: 5,
    name: "Tranquil Wellness Spa",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&q=85",
    rating: "4.9",
    reviews: 152,
    distance: "5.0 km",
    services: ["Facial", "Relaxation", "Aromatherapy"],
    description:
      "A premium wellness space dedicated to restoring your natural energy and inner calm.",
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-2">
    

      <span
        className={`text-[17px] font-bold tracking-tight ${
          light ? "text-white" : "text-[#102b2d]"
        }`}
      >
        Massage
        <span className="text-[#65c9b4]">Connect</span>
      </span>
    </a>
  );
}

function Header({
  onOpenLogin,
  onOpenSignup,
}: {
  onOpenLogin: () => void;
  onOpenSignup: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Explore Clinics", href: "#clinics" },
    { label: "Events", href: "#events" },
    { label: "Live Sessions", href: "#live" },
    { label: "How It Works", href: "#why-us" },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="mx-auto flex h-[86px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-14">
        <Logo light />

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-medium text-white/95 transition hover:text-[#9fe0ce]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className="rounded-full p-2 text-white transition hover:bg-white/10"
          >
            <Search size={20} />
          </button>

          <Button
            onClick={onOpenLogin}
            className="h-9 rounded-full border border-white/20 bg-white/15 px-5 text-xs text-white backdrop-blur hover:bg-white/25"
          >
            Login
          </Button>

          <Button
            onClick={onOpenSignup}
            className="h-9 rounded-full bg-[#f7a1b8] px-6 text-xs font-semibold text-[#152d2b] hover:bg-[#f58da9]"
          >
            Sign Up
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="text-white"
          >
            <Search size={22} />
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="absolute right-5 top-[78px] z-40 w-[calc(100%-40px)] rounded-xl bg-white p-3 shadow-xl md:right-14 md:w-80">
          <div className="flex items-center gap-2">
            <Search size={17} className="text-[#00665d]" />
            <Input
              placeholder="Search clinics or locations"
              className="border-none shadow-none focus-visible:ring-0"
              autoFocus
            />
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <nav className="mx-4 rounded-2xl border border-white/20 bg-[#073f3b]/95 p-5 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white"
              >
                {link.label}
              </a>
            ))}

            <div className="flex gap-3 border-t border-white/15 pt-4">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                variant="outline"
                className="flex-1 rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Login
              </Button>

              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignup();
                }}
                className="flex-1 rounded-full bg-[#f7a1b8] text-[#102b2d] hover:bg-[#f58da9]"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero({ onSearch }: { onSearch: (location: string) => void }) {
  const [location, setLocation] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    onSearch(location);
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[390px] items-center overflow-hidden bg-[#092b29] md:min-h-[430px] lg:min-h-[475px]"
    >
      <div
        className="absolute inset-0 bg-cover bg-[65%_center] bg-no-repeat md:bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=2000&q=90')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071e1c]/95 via-[#071e1c]/75 to-[#071e1c]/5 md:from-[#071e1c]/95 md:via-[#071e1c]/65 md:to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-10 pt-28 md:px-10 lg:px-14">
        <div className="max-w-[580px]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#9ce1cf] md:text-[13px]">
            Relax <span className="mx-1.5 text-white">·</span> Recharge{" "}
            <span className="mx-1.5 text-white">·</span> Connect
          </p>

          <h1 className="max-w-[550px] text-[34px] font-extrabold leading-[1.12] tracking-[-0.035em] text-white sm:text-[42px] md:text-[46px] lg:text-[48px]">
            Find the Best
            <br />
            Massage Clinics Near You
          </h1>

          <p className="mt-5 max-w-[475px] text-[13px] font-medium leading-[1.7] text-white/95 md:text-[15px]">
            Discover top-rated massage clinics, join special events, book live
            sessions, and get your ticket — all in one place.
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-7 flex h-[48px] w-full max-w-[510px] items-center rounded-full bg-white p-[5px] shadow-lg md:h-[52px]"
          >
            <MapPin
              size={19}
              className="ml-3 shrink-0 text-[#153d3d]"
              strokeWidth={2.5}
            />

            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
              aria-label="Enter your location"
              className="h-full min-w-0 flex-1 bg-transparent px-3 text-[13px] text-[#183837] outline-none placeholder:text-[#879398]"
            />

            <button
              type="submit"
              aria-label="Find clinics"
              className="flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-full bg-[#00665d] text-white transition hover:bg-[#004e47] md:h-[42px] md:w-[42px]"
            >
              <Search size={19} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const quickActions = [
  {
    title: "Find Clinics",
    description: "Explore trusted massage clinics near you",
    icon: MapPin,
    href: "#clinics",
  },
  {
    title: "Join Events",
    description: "Book special sessions, workshops & offers",
    icon: CalendarDays,
    href: "#events",
  },
  {
    title: "Live Sessions",
    description: "Enjoy live massage sessions & Q&A",
    icon: CirclePlay,
    href: "#live",
  },
  {
    title: "Get Tickets",
    description: "Secure your spot in just a few clicks",
    icon: Ticket,
    href: "#events",
  },
];

function QuickActions() {
  return (
    <section className="bg-[#fbf9f6]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-8 px-6 py-8 md:grid-cols-4 md:px-10 md:py-9 lg:px-14">
        {quickActions.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.href}
              className={`group flex flex-col items-start px-2 sm:px-5 md:items-center md:px-4 lg:px-8 ${
                index % 2 === 1 ? "border-l border-[#e5e7e4]" : ""
              } ${
                index >= 2 ? "md:border-l md:border-[#e5e7e4]" : ""
              }`}
            >
              <Icon
                className="mb-3 h-7 w-7 fill-[#007268]/10 text-[#00665d] transition-transform group-hover:-translate-y-1 md:h-8 md:w-8"
                strokeWidth={2.7}
              />

              <div className="w-full md:max-w-[170px]">
                <h3 className="text-[13px] font-bold text-[#10272d] md:text-[14px]">
                  {item.title}
                </h3>

                <p className="mt-1 max-w-[170px] text-[11px] leading-[1.55] text-[#344448] md:text-[12px]">
                  {item.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function ClinicCard({
  clinic,
  onDetails,
}: {
  clinic: Clinic;
  onDetails: (clinic: Clinic) => void;
}) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="group overflow-hidden rounded-xl border border-[#e8eae8] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-[155px] overflow-hidden sm:h-[170px] lg:h-[165px] xl:h-[180px]">
        <img
          src={clinic.image}
          alt={clinic.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <button
          onClick={() => setFavorite(!favorite)}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-110"
        >
          <Heart
            size={18}
            className={
              favorite
                ? "fill-[#f0849e] text-[#f0849e]"
                : "text-[#465556]"
            }
          />
        </button>
      </div>

      <div className="p-3.5">
        <h3 className="truncate text-[13px] font-bold text-[#132d32] lg:text-[14px]">
          {clinic.name}
        </h3>

        <div className="mt-1.5 flex items-center gap-2 text-[11px] text-[#405057]">
          <span className="flex items-center gap-1">
            <span className="text-[15px] leading-none text-[#f5ac21]">★</span>
            {clinic.rating} ({clinic.reviews})
          </span>

          <span className="text-[#647477]">·</span>

          <span>{clinic.distance}</span>
        </div>

        <div className="mt-4 flex min-h-[23px] flex-wrap gap-1.5">
          {clinic.services.map((service) => (
            <span
              key={service}
              className="rounded-full bg-[#e2f4f4] px-2 py-1 text-[9px] font-medium leading-none text-[#23646b]"
            >
              {service}
            </span>
          ))}
        </div>

        <Button
          onClick={() => onDetails(clinic)}
          className="mt-4 h-9 w-full rounded-full bg-[#00665d] text-[11px] font-medium text-white hover:bg-[#004d46]"
        >
          View Details <ArrowRight size={14} className="ml-1.5" />
        </Button>
      </div>
    </article>
  );
}

function FeaturedClinics({
  onDetails,
}: {
  onDetails: (clinic: Clinic) => void;
}) {
  const [startIndex, setStartIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleClinics = showAll
    ? clinics
    : Array.from({ length: 4 }, (_, i) => clinics[(startIndex + i) % clinics.length]);

  return (
    <section id="clinics" className="scroll-mt-8">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-[20px] font-extrabold tracking-tight text-[#10282d] md:text-[22px]">
          Featured Massage Clinics
        </h2>

        <button
          onClick={() => setShowAll((v) => !v)}
          className="flex shrink-0 items-center gap-1 text-[11px] font-medium text-[#214e51] hover:text-[#007268]"
        >
          {showAll ? "Show Less" : "View All"}
          <ArrowRight size={15} />
        </button>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleClinics.map((clinic) => (
            <ClinicCard
              key={clinic.id}
              clinic={clinic}
              onDetails={onDetails}
            />
          ))}
        </div>

        {!showAll && (
          <div className="absolute -right-4 top-[42%] hidden flex-col gap-2 lg:flex">
            <button
              onClick={() =>
                setStartIndex((i) => (i + 1) % clinics.length)
              }
              aria-label="Next clinics"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e8e8] bg-white text-[#264548] shadow-md hover:bg-[#f0f7f5]"
            >
              <ChevronRight size={20} />
            </button>

            {startIndex > 0 && (
              <button
                onClick={() =>
                  setStartIndex((i) => (i - 1 + clinics.length) % clinics.length)
                }
                aria-label="Previous clinics"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e8e8] bg-white text-[#264548] shadow-md hover:bg-[#f0f7f5]"
              >
                <ChevronLeft size={20} />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function EventSection({
  onGetTicket,
  onWatchLive,
}: {
  onGetTicket: () => void;
  onWatchLive: () => void;
}) {
  return (
    <section
      id="events"
      className="mt-9 grid scroll-mt-8 grid-cols-1 gap-5 lg:grid-cols-[2.2fr_1fr]"
    >
      <div className="relative min-h-[310px] overflow-hidden rounded-2xl bg-[#0b3735] md:min-h-[290px]">
        <img
          src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1400&q=90"
          alt="Relaxing hot stone massage"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#062b2b]/95 via-[#062b2b]/80 to-[#062b2b]/5" />

        <div className="relative flex h-full min-h-[310px] flex-col items-start justify-center p-6 text-white md:min-h-[290px] md:p-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-[#63dcc0]">
            Upcoming Event
          </p>

          <h2 className="text-[20px] font-bold md:text-[22px]">
            Full Body Relaxation Workshop
          </h2>

          <div className="mt-5 space-y-2.5 text-[11px] md:text-[12px]">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <span>Sat, Oct 25, 2025</span>
              <span className="mx-1">·</span>
              <span>10:00 AM – 12:00 PM</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Zen Massage Center</span>
              <span className="mx-1">·</span>
              <span>3.1 km</span>
            </div>
          </div>

          <p className="mt-4 max-w-[350px] text-[12px] leading-[1.6] text-white/95">
            Learn simple techniques to reduce stress and improve your well-being.
          </p>

          <Button
            onClick={onGetTicket}
            className="mt-4 h-9 rounded-full bg-[#f7a1b8] px-7 text-[11px] font-semibold text-[#172c2b] hover:bg-[#f48da9]"
          >
            Get Ticket <ArrowRight size={14} className="ml-2" />
          </Button>
        </div>

        <div className="absolute bottom-8 right-5 flex h-[75px] w-[75px] flex-col items-center justify-center rounded-full bg-[#f7a1b8] text-[#152b2a] md:right-7">
          <span className="text-[22px] font-bold leading-none">$49</span>
          <span className="mt-1 text-[10px]">per person</span>
        </div>
      </div>

      <div
        id="live"
        className="scroll-mt-8 rounded-2xl bg-[#fff0ef] p-5"
      >
        <div className="mb-3 flex items-center gap-2">
          <Radio size={21} className="text-[#ed5363]" />
          <h3 className="text-[16px] font-bold text-[#202c30]">Live Now</h3>
        </div>

        <div className="relative h-[145px] overflow-hidden rounded-xl lg:h-[125px] xl:h-[145px]">
          <img
            src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=900&q=85"
            alt="Live wellness session"
            className="h-full w-full object-cover"
          />
        </div>

        <h4 className="mt-3 text-[13px] font-bold text-[#142f33]">
          Live Massage Q&A
        </h4>

        <p className="mt-1 text-[11px] leading-[1.5] text-[#34494d]">
          Ask questions, get expert advice from certified therapists.
        </p>

        <Button
          onClick={onWatchLive}
          className="mt-3 h-9 rounded-full bg-gradient-to-r from-[#e96b73] to-[#ef8e89] px-6 text-[11px] text-white hover:opacity-90"
        >
          Watch Live <ArrowRight size={14} className="ml-1.5" />
        </Button>
      </div>
    </section>
  );
}

const benefits = [
  {
    title: "Trusted Clinics",
    description: "Verified and reviewed massage clinics.",
    icon: Heart,
  },
  {
    title: "Easy Booking",
    description: "Book events, sessions and tickets in seconds.",
    icon: CalendarDays,
  },
  {
    title: "Location Based",
    description: "Find the best clinics near you.",
    icon: MapPin,
  },
  {
    title: "Safe & Secure",
    description: "Your privacy and payments are always protected.",
    icon: ShieldCheck,
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="mt-8 scroll-mt-8">
      <h2 className="mb-5 text-[20px] font-extrabold tracking-tight text-[#10282d]">
        Why Choose MassageConnect?
      </h2>

      <div className="grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className={`flex items-start gap-3 ${
                index !== 0 ? "lg:border-l lg:border-[#e7e9e7] lg:pl-5" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0f1f0]">
                <Icon
                  size={23}
                  className="fill-[#00665d]/10 text-[#00665d]"
                  strokeWidth={2.7}
                />
              </div>

              <div className="pt-1">
                <h3 className="text-[11px] font-bold text-[#112b2f]">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-[10px] leading-[1.5] text-[#506166]">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function BottomCTA({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="relative mt-9 min-h-[105px] overflow-hidden rounded-2xl bg-[#003d37]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#003e37]/60 via-[#003e37]/90 to-[#003e37]/60" />

      <div className="relative flex min-h-[105px] flex-col items-center justify-center gap-3 px-5 py-5 text-center md:flex-row md:justify-between md:px-10">
        <div className="hidden w-[150px] md:block" />

        <div>
          <h2 className="text-[18px] font-bold text-white md:text-[20px]">
            Your Wellness Journey Starts Here
          </h2>

          <p className="mt-1 text-[12px] text-white">
            Find. Book. Relax. Repeat.
          </p>
        </div>

        <Button
          onClick={onGetStarted}
          className="h-9 rounded-full bg-[#f7a1b8] px-6 text-[11px] font-semibold text-[#162c2c] hover:bg-[#f58dab]"
        >
          Get Started <ArrowRight size={14} className="ml-2" />
        </Button>
      </div>
    </section>
  );
}

type ModalState =
  | { type: "login" }
  | { type: "signup" }
  | { type: "ticket" }
  | { type: "live" }
  | { type: "clinic"; clinic: Clinic }
  | null;

function AppDialog({
  modal,
  onClose,
}: {
  modal: ModalState;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (!modal) return null;

  const title =
    modal.type === "login"
      ? "Welcome Back"
      : modal.type === "signup"
      ? "Create Your Account"
      : modal.type === "ticket"
      ? "Reserve Your Ticket"
      : modal.type === "live"
      ? "Live Massage Q&A"
      : modal.clinic.name;

  const description =
    modal.type === "clinic"
      ? modal.clinic.description
      : modal.type === "ticket"
      ? "Full Body Relaxation Workshop · $49 per person"
      : modal.type === "live"
      ? "Join our live wellness session with certified massage therapists."
      : "Your wellness journey starts here.";

  return (
    <Dialog
      open={!!modal}
      onOpenChange={(open) => {
        if (!open) {
          setSubmitted(false);
          onClose();
        }
      }}
    >
      <DialogContent className="max-w-md rounded-2xl border-none p-6 sm:p-8">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#103330]">
            {title}
          </DialogTitle>

          <DialogDescription className="pt-1 text-sm leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e3f5ef]">
              <Check size={30} className="text-[#00665d]" />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-[#103330]">
              Request Received
            </h3>

            <p className="mt-2 text-sm text-[#667778]">
              This is a frontend demo. Connect your booking or authentication
              backend to complete this action.
            </p>

            <Button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 rounded-full bg-[#00665d] px-8 hover:bg-[#004d46]"
            >
              Close
            </Button>
          </div>
        ) : (
          <div className="space-y-4 pt-3">
            {modal.type === "clinic" && (
              <img
                src={modal.clinic.image}
                alt={modal.clinic.name}
                className="h-44 w-full rounded-xl object-cover"
              />
            )}

            {modal.type === "live" && (
              <div className="rounded-xl bg-[#e8f5f1] p-4 text-sm text-[#245d57]">
                <div className="flex items-center gap-2 font-semibold">
                  <Radio size={18} />
                  Session information
                </div>
                <p className="mt-2 leading-relaxed">
                  Our live video experience will be available when connected
                  to your streaming service.
                </p>
              </div>
            )}

            {modal.type !== "live" && (
              <>
                {modal.type === "signup" && (
                  <Input placeholder="Full name" className="h-11 rounded-lg" />
                )}

                <Input
                  type="email"
                  placeholder="Email address"
                  className="h-11 rounded-lg"
                />

                {["login", "signup"].includes(modal.type) ? (
                  <Input
                    type="password"
                    placeholder="Password"
                    className="h-11 rounded-lg"
                  />
                ) : (
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    className="h-11 rounded-lg"
                  />
                )}
              </>
            )}

            <Button
              onClick={() => setSubmitted(true)}
              className="h-11 w-full rounded-full bg-[#00665d] font-semibold hover:bg-[#004d46]"
            >
              {modal.type === "login"
                ? "Login"
                : modal.type === "signup"
                ? "Create Account"
                : modal.type === "ticket"
                ? "Continue to Booking"
                : modal.type === "live"
                ? "Join Session"
                : "Book Appointment"}

              <ArrowRight size={17} className="ml-2" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function App() {
  const [modal, setModal] = useState<ModalState>(null);
  const [searchMessage, setSearchMessage] = useState("");

  function handleLocationSearch(location: string) {
    if (!location.trim()) {
      setSearchMessage("Please enter a location to find nearby clinics.");
      return;
    }

    setSearchMessage(`Showing featured clinics near ${location}.`);

    document.getElementById("clinics")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="min-h-screen bg-[#f3f6f7] px-0 py-0 font-sans text-[#152d30] md:px-5 md:py-5">
      <div className="mx-auto max-w-[1500px] overflow-hidden bg-white shadow-[0_3px_20px_rgba(15,45,48,0.12)] md:rounded-2xl">
        <div className="relative">
          <Header
            onOpenLogin={() => setModal({ type: "login" })}
            onOpenSignup={() => setModal({ type: "signup" })}
          />

          <Hero onSearch={handleLocationSearch} />
        </div>

        <QuickActions />

        <main className="mx-auto max-w-[1440px] px-5 pb-5 pt-8 sm:px-7 md:px-10 md:pt-9 lg:px-14">
          {searchMessage && (
            <div className="mb-5 flex items-center justify-between rounded-xl bg-[#e6f5ef] px-4 py-3 text-sm text-[#17574e]">
              <span>{searchMessage}</span>

              <button
                onClick={() => setSearchMessage("")}
                aria-label="Dismiss message"
                className="ml-3"
              >
                <X size={17} />
              </button>
            </div>
          )}

          <FeaturedClinics
            onDetails={(clinic) => setModal({ type: "clinic", clinic })}
          />

          <EventSection
            onGetTicket={() => setModal({ type: "ticket" })}
            onWatchLive={() => setModal({ type: "live" })}
          />

          <WhyChooseUs />

          <BottomCTA onGetStarted={() => setModal({ type: "signup" })} />
        </main>
      </div>

      <AppDialog
        key={modal ? (modal.type === "clinic" ? `clinic-${modal.clinic.id}` : modal.type) : "closed"}
        modal={modal}
        onClose={() => setModal(null)}
      />
    </div>
  );
}