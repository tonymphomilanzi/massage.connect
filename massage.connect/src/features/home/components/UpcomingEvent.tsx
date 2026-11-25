import { Link } from "react-router";

import {
  CalendarDays,
  MapPin,
  ArrowRight,
  Clock3,
} from "lucide-react";

import { featuredEvent } from "@/features/events/data/featuredEvents";

export default function UpcomingEvent() {
  const event = featuredEvent;

  return (
    <article
      className="
        relative min-h-[275px]
        overflow-hidden rounded-2xl
        bg-[#073b38]
        sm:min-h-[300px]
        lg:min-h-[310px]
      "
    >
      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url("${event.image}")`,
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#062b2b]/95
          via-[#062b2b]/85
          to-[#062b2b]/20
        "
      />

      {/* Event Content */}
      <div
        className="
          relative z-10
          flex min-h-[275px]
          flex-col items-start
          justify-center
          p-5 text-white
          sm:min-h-[300px] sm:p-7
          lg:min-h-[310px]
        "
      >
        {/* Label */}
        <p
          className="
            mb-3 text-[10px]
            font-bold uppercase
            tracking-wide
            text-[#63dcc0]
            sm:text-[11px]
          "
        >
          Upcoming Event
        </p>

        {/* Title */}
        <h2
          className="
            max-w-[380px]
            text-[17px] font-extrabold
            leading-tight
            sm:text-[21px]
          "
        >
          {event.title}
        </h2>

        {/* Event Information */}
        <div className="mt-4 space-y-2.5">

          <div
            className="
              flex flex-wrap items-center
              gap-x-2 gap-y-1
              text-[10px]
              sm:text-[11px]
            "
          >
            <CalendarDays size={15} className="shrink-0" />

            <span>{event.date}</span>

            <span className="mx-1">·</span>

            <span>
              {event.startTime} – {event.endTime}
            </span>
          </div>

          <div
            className="
              flex flex-wrap items-center
              gap-x-2 gap-y-1
              text-[10px]
              sm:text-[11px]
            "
          >
            <MapPin size={15} className="shrink-0" />

            <span>{event.clinicName}</span>

            <span className="mx-1">·</span>

            <span>{event.distance}</span>
          </div>

        </div>

        {/* Description */}
        <p
          className="
            mt-4 max-w-[285px]
            text-[11px] leading-[1.6]
            text-white/95
            sm:max-w-[350px]
            sm:text-[12px]
          "
        >
          {event.description}
        </p>

        {/* Ticket Button */}
        <Link
          to={`/events/${event.slug}`}
          className="
            mt-4 inline-flex h-9
            items-center justify-center
            gap-2 rounded-full
            bg-brand-pink px-6
            text-[11px] font-bold
            text-brand-heading
            transition-all
            hover:-translate-y-0.5
            hover:bg-[#f48da9]
          "
        >
          Get Ticket

          <ArrowRight size={14} />
        </Link>

      </div>

      {/* Price Badge */}
      <div
        className="
          absolute bottom-5 right-4 z-20
          flex h-[65px] w-[65px]
          flex-col items-center
          justify-center rounded-full
          bg-brand-pink
          text-brand-heading
          shadow-md
          sm:bottom-8 sm:right-6
          sm:h-[78px] sm:w-[78px]
        "
      >
        <span className="text-[20px] font-extrabold leading-none sm:text-[24px]">
          ${event.price}
        </span>

        <span className="mt-1 text-[9px] sm:text-[10px]">
          per person
        </span>
      </div>

    </article>
  );
}