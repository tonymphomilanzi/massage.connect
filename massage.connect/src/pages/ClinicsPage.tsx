import { ArrowLeft, MapPin } from "lucide-react";

import { Link } from "react-router";

import { Button } from "@/components/ui/button";

export default function ClinicsPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-5">
      <div className="w-full max-w-xl rounded-2xl border border-brand-border bg-white p-8 text-center shadow-xl sm:p-12">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-light">
          <MapPin
            size={32}
            className="text-brand"
          />
        </div>

        <h1 className="text-3xl font-bold text-brand-heading">
          Explore Clinics
        </h1>

        <p className="mt-3 text-sm text-brand-muted">
          Discover trusted massage clinics near you.
        </p>

        <p className="mt-5 text-xs text-brand-muted">
          This page will be developed after our homepage.
        </p>

        <Button
          asChild
          className="mt-7 h-11 rounded-full bg-brand px-7 text-white hover:bg-brand-dark"
        >
          <Link to="/">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </Button>

      </div>
    </main>
  );
}