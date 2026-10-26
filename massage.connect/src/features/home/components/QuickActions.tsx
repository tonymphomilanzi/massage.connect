import {
  MapPin,
  CalendarDays,
  CirclePlay,
  Ticket,
} from "lucide-react";

import { Link } from "react-router";

interface QuickAction {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

const quickActions: QuickAction[] = [
  {
    title: "Find Clinics",
    description: "Explore trusted massage clinics near you",
    icon: MapPin,
    href: "/clinics",
  },
  {
    title: "Join Events",
    description: "Book special sessions, workshops & offers",
    icon: CalendarDays,
    href: "/events",
  },
  {
    title: "Live Sessions",
    description: "Enjoy live massage sessions & Q&A",
    icon: CirclePlay,
    href: "/live-sessions",
  },
  {
    title: "Get Tickets",
    description: "Secure your spot in just a few clicks",
    icon: Ticket,
    href: "/events",
  },
];

export default function QuickActions() {
  return (
    <section className="bg-brand-cream">

      <div
        className="
          mx-auto grid max-w-[1350px]
          grid-cols-2
          gap-y-6
          px-4 py-6
          sm:px-5 sm:py-8
          md:grid-cols-4 md:gap-y-0
          md:px-9 md:py-9
          lg:px-[35px]
        "
      >
        {quickActions.map((action, index) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.href}
              className={`
                group flex min-h-[105px] flex-col
                items-start justify-center
                rounded-lg px-3 py-2
                transition-colors
                hover:bg-brand-light/40
                active:bg-brand-light/60
                sm:px-5
                md:items-center md:px-4
                lg:px-8

                ${index % 2 === 1
                  ? "border-l border-[#e5e7e4]"
                  : ""
                }

                ${index === 2
                  ? "md:border-l"
                  : ""
                }
              `}
            >
              {/* Icon */}
              <Icon
                size={28}
                strokeWidth={2.7}
                className="
                  mb-2.5
                  text-brand
                  transition-transform duration-300
                  group-hover:-translate-y-1
                  md:mb-3 md:h-8 md:w-8
                "
              />

              {/* Content */}
              <div className="w-full md:max-w-[175px]">

                <h3
                  className="
                    text-[12px] font-extrabold
                    text-brand-heading
                    md:text-[14px]
                  "
                >
                  {action.title}
                </h3>

                <p
                  className="
                    mt-1 max-w-[175px]
                    text-[10px] leading-[1.5]
                    text-[#39494d]
                    md:text-[12px]
                  "
                >
                  {action.description}
                </p>

              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}