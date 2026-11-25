import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function BottomCTA() {
  return (
    <section
      className="
        mx-auto w-full max-w-[1350px]
        px-4 pb-8 pt-2
        sm:px-5 sm:pb-12
        md:px-9
        lg:px-[35px]
      "
    >
      <div
        className="
          relative min-h-[115px]
          overflow-hidden rounded-2xl
          bg-[#003d37]
        "
      >
        {/* Subtle Nature Foliage Background Pattern */}
        <div
          className="
            absolute inset-0
            bg-cover bg-center
            opacity-30
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80')",
          }}
        />

        {/* Deep Green Gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#003d37]/90
            via-[#003d37]/95
            to-[#003d37]/90
          "
        />

        {/* Banner Content */}
        <div
          className="
            relative z-10
            flex min-h-[115px]
            flex-col items-center
            justify-center gap-4
            p-5 text-center
            md:flex-row md:justify-between
            md:px-10 md:py-6 md:text-left
          "
        >
          {/* Spacer to keep center balance on desktop */}
          <div className="hidden w-[140px] md:block" />

          {/* Heading & Tagline */}
          <div className="text-center">
            <h2
              className="
                text-[17px] font-extrabold
                text-white
                sm:text-[19px]
                md:text-[21px]
              "
            >
              Your Wellness Journey Starts Here
            </h2>

            <p
              className="
                mt-1 text-[11px]
                font-medium text-[#b5e0d5]
                sm:text-[12px]
              "
            >
              Find. Book. Relax. Repeat.
            </p>
          </div>

          {/* Action Button: No asChild, clean styled Link */}
          <Link
            to="/register"
            className="
              inline-flex h-9 shrink-0
              items-center justify-center
              gap-2 rounded-full
              bg-brand-pink px-6
              text-[11px] font-bold
              text-brand-heading
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-[#f48da9]
            "
          >
            Get Started
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}