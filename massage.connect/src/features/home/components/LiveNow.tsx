import { Link } from "react-router";

import {
  Radio,
  ArrowRight,
} from "lucide-react";

import { featuredLiveSession } from "@/features/events/data/featuredEvents";

export default function LiveNow() {
  const session = featuredLiveSession;

  return (
    <article
      className="
        flex h-full flex-col
        rounded-2xl
        bg-[#fff0ef]
        p-4
        sm:p-5
      "
    >
      {/* Live Heading */}
      <div className="mb-3 flex items-center gap-2">

        <Radio
          size={21}
          strokeWidth={2.5}
          className="text-[#e9515c]"
        />

        <h2 className="text-[15px] font-extrabold text-brand-heading sm:text-[16px]">
          {session.isLive ? "Live Now" : "Upcoming Live"}
        </h2>

      </div>

      {/* Thumbnail */}
      <Link
        to={`/live-sessions/${session.slug}`}
        className="
          group relative block
          h-[160px]
          overflow-hidden rounded-xl
          sm:h-[180px]
          lg:h-[140px]
        "
      >
        <img
          src={session.image}
          alt={session.title}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Live Indicator */}
        {session.isLive && (
          <div
            className="
              absolute left-3 top-3
              flex items-center gap-1.5
              rounded-full
              bg-[#e9515c]
              px-2.5 py-1
              text-[9px] font-bold
              text-white
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            LIVE
          </div>
        )}
      </Link>

      {/* Session Details */}
      <div className="flex flex-1 flex-col">

        <h3 className="mt-3 text-[13px] font-extrabold text-brand-heading">
          {session.title}
        </h3>

        <p
          className="
            mt-1 text-[11px]
            leading-[1.55]
            text-[#405356]
          "
        >
          {session.description}
        </p>

        {/* Button */}
        <Link
          to={`/live-sessions/${session.slug}`}
          className="
            mt-3 inline-flex h-9
            w-fit items-center
            justify-center gap-2
            rounded-full
            bg-gradient-to-r
            from-[#e56a74]
            to-[#ee8b87]
            px-5
            text-[11px] font-semibold
            text-white
            transition-opacity
            hover:opacity-90
          "
        >
          {session.isLive ? "Watch Live" : "View Session"}

          <ArrowRight size={14} />
        </Link>

      </div>

    </article>
  );
}