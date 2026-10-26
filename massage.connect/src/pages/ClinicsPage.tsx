import { ArrowLeft, MapPin } from "lucide-react";

import { Link } from "react-router";

import { Button } from "@/components/ui/button";

export default function ClinicsPage() {
  return (
    <main>

      {/* Page banner */}
      <section className="flex min-h-[260px] items-end bg-gradient-to-r from-[#061e1d] to-[#0b554d] pb-10 pt-28">

        <div className="mx-auto w-full max-w-[1350px] px-5 md:px-9 lg:px-[35px]">

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a3e4d3]">
            Discover Wellness
          </p>

          <h1 className="text-3xl font-extrabold text-white md:text-4xl">
            Explore Massage Clinics
          </h1>

        </div>

      </section>

      {/* Content */}
      <section className="flex min-h-[350px] items-center justify-center bg-white px-5 py-14">

        <div className="max-w-md text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-light">
            <MapPin size={30} className="text-brand" />
          </div>

          <h2 className="text-xl font-bold text-brand-heading">
            Find Your Perfect Massage Clinic
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-brand-muted">
            Soon you'll be able to discover trusted massage clinics
            near your location.
          </p>

          <Button
            type="button"
            aria-label="Back to home"
            className="mt-7 h-10 rounded-full bg-brand px-6 text-xs text-white hover:bg-brand-dark"
          >
            <Link to="/">
              <ArrowLeft size={15} className="mr-2" />
              Back to Home
            </Link>
          </Button>

        </div>

      </section>

    </main>
  );
}