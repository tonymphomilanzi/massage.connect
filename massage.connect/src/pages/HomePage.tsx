import { ArrowRight } from "lucide-react";

import { Link } from "react-router";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main>

      <section className="relative flex min-h-[475px] items-center overflow-hidden bg-[#092b29]">

        {/* Temporary background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061e1d] via-[#073f3b] to-[#0b554d]" />

        <div className="relative z-10 mx-auto w-full max-w-[1350px] px-5 pt-20 md:px-9 lg:px-[35px]">

          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#a3e4d3]">
            Relax · Recharge · Connect
          </p>

          <h1 className="max-w-[600px] text-[35px] font-extrabold leading-[1.12] tracking-tight text-white md:text-[48px]">
            Find the Best
            <br />
            Massage Clinics Near You
          </h1>

          <p className="mt-5 max-w-[470px] text-[14px] leading-relaxed text-white/90">
            Discover top-rated massage clinics, join special events,
            book live sessions, and get your ticket — all in one place.
          </p>

          <Button
        
            className="mt-7 h-11 rounded-full bg-brand-pink px-7 text-[12px] font-bold text-brand-heading hover:bg-[#f48da9]"
          >
            <Link to="/clinics">
              Explore Clinics
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>

        </div>

      </section>

    </main>
  );
}