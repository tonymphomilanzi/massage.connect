import { Link, useParams } from "react-router";

import {
  ArrowLeft,
  MapPin,
} from "lucide-react";

import { featuredClinics } from "@/features/clinics/data/featuredClinics";

export default function ClinicDetailsPage() {
  const { slug } = useParams();

  const clinic = featuredClinics.find(
    (item) => item.slug === slug
  );

  if (!clinic) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-5 pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-heading">
            Clinic Not Found
          </h1>

          <Link
            to="/clinics"
            className="mt-5 inline-block text-sm font-semibold text-brand"
          >
            Back to Clinics
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

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a3e4d3]">
            Massage Clinic
          </p>

          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            {clinic.name}
          </h1>

        </div>

      </section>

      {/* Content */}
      <section className="mx-auto max-w-[1000px] px-5 py-10">

        <img
          src={clinic.image}
          alt={clinic.name}
          className="h-[250px] w-full rounded-2xl object-cover md:h-[350px]"
        />

        <div className="mt-6 flex items-center gap-2 text-sm text-brand-muted">
          <MapPin size={17} className="text-brand" />
          {clinic.distance} away
        </div>

        <h2 className="mt-5 text-2xl font-bold text-brand-heading">
          Welcome to {clinic.name}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-brand-muted">
          Discover professional massage services and wellness treatments.
          Full clinic information, available services, appointment booking,
          reviews, and the clinic store will be added as we develop the platform.
        </p>

        <Link
          to="/clinics"
          className="
            mt-7 inline-flex h-10 items-center
            justify-center gap-2 rounded-full
            bg-brand px-6 text-xs font-semibold
            text-white transition hover:bg-brand-dark
          "
        >
          <ArrowLeft size={15} />
          Back to Clinics
        </Link>

      </section>

    </main>
  );
}