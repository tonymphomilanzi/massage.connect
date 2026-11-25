import { Link, useParams } from "react-router";

import {
  ArrowLeft,
  Radio,
  CirclePlay,
} from "lucide-react";

import { featuredLiveSession } from "@/features/events/data/featuredEvents";

export default function LiveSessionDetailsPage() {
  const { slug } = useParams();

  if (slug !== featuredLiveSession.slug) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-5 pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-heading">
            Session Not Found
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
      {/* Banner */}
      <section className="flex min-h-[260px] items-end bg-gradient-to-r from-[#061e1d] to-[#0b554d] pb-10 pt-28">

        <div className="mx-auto w-full max-w-[1350px] px-5 md:px-9 lg:px-[35px]">

          <div className="mb-3 flex items-center gap-2 text-[#ffabb4]">
            <Radio size={19} />

            <span className="text-[11px] font-bold uppercase tracking-wide">
              Live Session
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            {featuredLiveSession.title}
          </h1>

        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[1000px] px-5 py-10">

        <div className="relative overflow-hidden rounded-2xl">

          <img
            src={featuredLiveSession.image}
            alt={featuredLiveSession.title}
            className="h-[250px] w-full object-cover md:h-[420px]"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/20">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <CirclePlay size={36} className="text-brand" />
            </div>

          </div>

        </div>

        <h2 className="mt-7 text-2xl font-bold text-brand-heading">
          About This Session
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-brand-muted">
          {featuredLiveSession.description}
        </p>

        <div className="mt-6 rounded-xl bg-brand-light p-5 text-sm text-brand">
          Live streaming integration will be added when we implement
          the session management system.
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