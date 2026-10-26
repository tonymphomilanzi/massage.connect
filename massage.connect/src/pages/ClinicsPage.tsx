import { Link, useSearchParams } from "react-router";

import {
  ArrowLeft,
  MapPin,
  Navigation,
} from "lucide-react";

export default function ClinicsPage() {
  const [searchParams] = useSearchParams();

  const location = searchParams.get("location");
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lng");

  const hasCoordinates = latitude !== null && longitude !== null;

  return (
    <main>
      {/* Page Banner */}
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
            {hasCoordinates ? (
              <Navigation size={30} className="text-brand" />
            ) : (
              <MapPin size={30} className="text-brand" />
            )}
          </div>

          <h2 className="text-xl font-bold text-brand-heading">
            Find Your Perfect Massage Clinic
          </h2>

          {location ? (
            <p className="mt-3 text-sm text-brand-muted">
              Searching for massage clinics near{" "}
              <span className="font-bold text-brand">
                {location}
              </span>
            </p>
          ) : hasCoordinates ? (
            <p className="mt-3 text-sm text-brand-muted">
              Your current location was detected successfully.
              Nearby clinic discovery will be available soon.
            </p>
          ) : (
            <p className="mt-3 text-sm text-brand-muted">
              Discover trusted massage clinics near you.
            </p>
          )}

          <div className="mt-6 rounded-xl bg-brand-light px-5 py-4 text-xs leading-relaxed text-brand">
            Clinic search and location-based filtering will be
            connected when we implement our Supabase database.
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

        </div>

      </section>
    </main>
  );
}