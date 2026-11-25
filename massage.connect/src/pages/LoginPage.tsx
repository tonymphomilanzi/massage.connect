import { Link } from "react-router";
import { ArrowLeft, Leaf } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-[500px] items-center justify-center px-4 py-28">
      <div className="w-full max-w-md rounded-2xl border border-brand-border bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-light">
          <Leaf size={28} className="text-brand" strokeWidth={2.5} />
        </div>

        <h1 className="text-2xl font-extrabold text-brand-heading">
          Welcome Back
        </h1>

        <p className="mt-2 text-xs text-brand-muted">
          Log in to manage your appointments, clinic, or events.
        </p>

        <div className="mt-6 rounded-xl bg-brand-light p-4 text-xs font-semibold text-brand">
          Supabase Authentication will be integrated in Phase 2.
        </div>

        <div className="mt-6">
          <Link
            to="/"
            className="
              inline-flex h-9 items-center justify-center
              gap-2 rounded-full bg-brand px-6
              text-xs font-semibold text-white
              hover:bg-brand-dark
            "
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}