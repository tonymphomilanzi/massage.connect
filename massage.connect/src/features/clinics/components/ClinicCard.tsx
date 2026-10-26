import { useState } from "react";
import { Link } from "react-router";

import {
  Heart,
  ArrowRight,
  Star,
} from "lucide-react";

import type { Clinic } from "@/types/clinic";

interface ClinicCardProps {
  clinic: Clinic;
}

export default function ClinicCard({ clinic }: ClinicCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite((previous) => !previous);
  }

  return (
    <article
      className="
        group flex h-full flex-col
        overflow-hidden rounded-xl
        border border-[#e8eae8]
        bg-white
        shadow-[0_2px_5px_rgba(0,0,0,0.07)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]
      "
    >
      {/* Clinic Image */}
      <div
        className="
          relative h-[170px]
          overflow-hidden
          sm:h-[190px]
          lg:h-[160px]
          xl:h-[175px]
        "
      >
        <img
          src={clinic.image}
          alt={clinic.name}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Favorite Button */}
        <button
          type="button"
          onClick={toggleFavorite}
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
          aria-pressed={isFavorite}
          className="
            absolute right-3 top-3
            flex h-8 w-8
            items-center justify-center
            rounded-full
            bg-white/95
            shadow-sm
            transition-transform
            hover:scale-110
          "
        >
          <Heart
            size={18}
            strokeWidth={2.2}
            className={
              isFavorite
                ? "fill-[#f0829d] text-[#f0829d]"
                : "text-[#465556]"
            }
          />
        </button>
      </div>

      {/* Clinic Information */}
      <div className="flex flex-1 flex-col p-3.5">

        {/* Name */}
        <h3
          className="
            truncate text-[13px]
            font-extrabold
            text-brand-heading
            lg:text-[14px]
          "
        >
          {clinic.name}
        </h3>

        {/* Rating */}
        <div className="mt-1.5 flex items-center gap-2 text-[11px] text-[#405057]">

          <span className="flex items-center gap-1">
            <Star
              size={13}
              fill="#f5ac21"
              stroke="#f5ac21"
            />

            {clinic.rating.toFixed(1)}
            ({clinic.reviewCount})
          </span>

          <span className="text-[#647477]">·</span>

          <span>{clinic.distance}</span>
        </div>

        {/* Service Tags */}
        <div className="mt-4 flex min-h-[23px] flex-wrap content-start gap-1.5">
          {clinic.services.map((service) => (
            <span
              key={service}
              className="
                rounded-full
                bg-[#e2f4f4]
                px-2 py-1
                text-[9px]
                font-medium
                leading-none
                text-[#23646b]
              "
            >
              {service}
            </span>
          ))}
        </div>

        {/* Details Button */}
        <Link
          to={`/clinics/${clinic.slug}`}
          className="
            mt-auto flex h-9 w-full
            items-center justify-center
            gap-2 rounded-full
            bg-brand
            text-[11px] font-semibold
            text-white
            transition-colors
            hover:bg-brand-dark
          "
          style={{ marginTop: "16px" }}
        >
          View Details
          <ArrowRight size={14} />
        </Link>

      </div>
    </article>
  );
}