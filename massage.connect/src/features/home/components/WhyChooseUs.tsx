import {
  Heart,
  CalendarDays,
  MapPin,
  ShieldCheck,
} from "lucide-react";

interface BenefitItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const benefits: BenefitItem[] = [
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

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="
        mx-auto w-full max-w-[1350px]
        px-4 py-8
        sm:px-5 sm:py-10
        md:px-9
        lg:px-[35px]
      "
    >
      {/* Section Title */}
      <h2
        className="
          mb-6
          text-[17px] font-extrabold
          tracking-tight text-brand-heading
          sm:text-[20px]
          md:text-[22px]
        "
      >
        Why Choose MassageConnect?
      </h2>

      {/* Grid: 4 horizontal columns on desktop, clean vertical list on mobile */}
      <div
        className="
          grid grid-cols-1
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4 lg:gap-0
        "
      >
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className={`
                flex items-start gap-3.5
                ${index !== 0 ? "lg:border-l lg:border-[#e8eae8] lg:pl-6" : ""}
                ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}
              `}
            >
              {/* Circular Badge Icon */}
              <div
                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-full bg-[#f0f2f1]
                  sm:h-12 sm:w-12
                "
              >
                <Icon
                  size={22}
                  strokeWidth={2.6}
                  className="text-brand"
                />
              </div>

              {/* Text info */}
              <div className="pt-0.5">
                <h3
                  className="
                    text-[12px] font-extrabold
                    text-brand-heading
                    sm:text-[13px]
                  "
                >
                  {benefit.title}
                </h3>

                <p
                  className="
                    mt-1 text-[11px]
                    leading-[1.55]
                    text-[#53666a]
                  "
                >
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