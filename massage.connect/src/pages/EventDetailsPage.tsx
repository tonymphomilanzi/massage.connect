import { Link, useParams } from "react-router";

import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Ticket,
} from "lucide-react";

import { featuredEvent } from "@/features/events/data/featuredEvents";

export default function EventDetailsPage() {
  const { slug } = useParams();

  if (slug !== featuredEvent.slug) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-5 pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-heading">
            Event Not Found
          </h1>

          <Link
            to="/"
            className="mt-5 inline-block text-sm font-semibold text-brand"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Header Banner */}
      <section className="flex min-h-[260px] items-end bg-gradient-to-r from-[#061e1d] to-[#0b554d] pb-10 pt-28">

        <div className="mx-auto w-full max-w-[1350px] px-5 md:px-9 lg:px-[35px]">

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a3e4d3]">
            Wellness Event
          </p>

          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            {featuredEvent.title}
          </h1>

        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 py-10">

        <img
          src={featuredEvent.image}
          alt={featuredEvent.title}
          className="h-[230px] w-full rounded-2xl object-cover md:h-[350px]"
        />

        <div className="mt-7 flex flex-wrap gap-5">

          <div className="flex items-center gap-2 text-sm text-brand-muted">
            <CalendarDays size={18} className="text-brand" />
            {featuredEvent.date}
          </div>

          <div className="flex items-center gap-2 text-sm text-brand-muted">
            <MapPin size={18} className="text-brand" />
            {featuredEvent.clinicName}
          </div>

        </div>

        <h2 className="mt-7 text-2xl font-bold text-brand-heading">
          About This Event
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-brand-muted">
          {featuredEvent.description}
        </p>

        <div className="mt-7 rounded-2xl bg-brand-light p-5">

          <div className="flex items-center justify-between gap-4">

            <div>
              <p className="text-xs text-brand-muted">
                Ticket Price
              </p>

              <p className="mt-1 text-2xl font-extrabold text-brand-heading">
                ${featuredEvent.price}
              </p>
            </div>

            <Ticket size={28} className="text-brand" />

          </div>

          <button
            type="button"
            disabled
            className="
              mt-5 flex h-11 w-full items-center
              justify-center rounded-full
              bg-brand px-5 text-sm font-semibold
              text-white opacity-70
              cursor-not-allowed
            "
          >
            Ticket Booking Coming Soon
          </button>

        </div>

        <Link
          to="/"
          className="
            mt-7 inline-flex h-10 items-center
            justify-center gap-2 rounded-full
            bg-brand px-6 text-xs font-semibold
            text-white transition hover:bg-brand-dark
          "
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>

      </section>
    </main>
  );
}