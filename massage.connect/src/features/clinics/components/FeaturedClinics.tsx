import { useState } from "react";
import { Link } from "react-router";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import ClinicCard from "@/features/clinics/components/ClinicCard";

import { featuredClinics } from "@/features/clinics/data/featuredClinics";

export default function FeaturedClinics() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleClinics = Array.from(
    { length: Math.min(4, featuredClinics.length) },
    (_, index) =>
      featuredClinics[
        (startIndex + index) % featuredClinics.length
      ]
  );

  function nextClinics() {
    setStartIndex(
      (previous) => (previous + 1) % featuredClinics.length
    );
  }

  function previousClinics() {
    setStartIndex(
      (previous) =>
        (previous - 1 + featuredClinics.length) %
        featuredClinics.length
    );
  }

  return (
    <section
      id="featured-clinics"
      className="
        mx-auto w-full max-w-[1350px]
        px-4 py-7
        sm:px-5 sm:py-9
        md:px-9
        lg:px-[35px]
      "
    >
      {/* Section Heading */}
      <div className="mb-5 flex items-center justify-between gap-3">

        <h2
          className="
            text-[17px] font-extrabold
            tracking-tight text-brand-heading
            sm:text-[20px]
            md:text-[23px]
          "
        >
          Featured Massage Clinics
        </h2>

        <Link
          to="/clinics"
          className="
            flex shrink-0 items-center gap-1
            text-[10px] font-semibold
            text-[#214e51]
            transition-colors
            hover:text-brand
            md:text-[12px]
          "
        >
          View All
          <ArrowRight size={15} />
        </Link>

      </div>

      {/* Clinics */}
      <div className="relative">

       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

  {visibleClinics.map((clinic, index) => (
    <div
      key={clinic.id}
      className={`
        ${index === 0 ? "block" : "hidden"}
        sm:block
      `}
    >
      <ClinicCard clinic={clinic} />
    </div>
  ))}

</div>

<div className="mt-4 flex items-center justify-center gap-3 sm:hidden">

  <button
    type="button"
    onClick={previousClinics}
    aria-label="Previous clinic"
    className="
      flex h-9 w-9 items-center justify-center
      rounded-full border border-brand-border
      bg-white text-brand
      shadow-sm
    "
  >
    <ChevronLeft size={19} />
  </button>

  <span className="text-[11px] font-medium text-brand-muted">
    {startIndex + 1} / {featuredClinics.length}
  </span>

  <button
    type="button"
    onClick={nextClinics}
    aria-label="Next clinic"
    className="
      flex h-9 w-9 items-center justify-center
      rounded-full bg-brand text-white
      shadow-sm
    "
  >
    <ChevronRight size={19} />
  </button>

</div>

        {/* Desktop Carousel Controls */}
        <div
          className="
            absolute -right-4 top-[42%]
            hidden flex-col gap-2
            lg:flex
          "
        >
          <button
            type="button"
            onClick={nextClinics}
            aria-label="Next clinics"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              border border-[#e8e8e8]
              bg-white
              text-[#264548]
              shadow-md
              transition-colors
              hover:bg-brand-light
            "
          >
            <ChevronRight size={20} />
          </button>

          {startIndex > 0 && (
            <button
              type="button"
              onClick={previousClinics}
              aria-label="Previous clinics"
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-[#e8e8e8]
                bg-white
                text-[#264548]
                shadow-md
                transition-colors
                hover:bg-brand-light
              "
            >
              <ChevronLeft size={20} />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}