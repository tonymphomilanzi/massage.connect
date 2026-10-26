import { useState } from "react";
import { Link, NavLink } from "react-router";

import {
  Search,
  Menu,
  X,
  Leaf,
  ArrowRight,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Explore Clinics", href: "/clinics" },
  { name: "Events", href: "/events" },
  { name: "Live Sessions", href: "/live-sessions" },
  { name: "How It Works", href: "/how-it-works" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">

      <div className="mx-auto flex h-[85px] max-w-[1350px] items-center justify-between gap-5 px-5 md:px-9 lg:px-[35px]">

        {/* LOGO */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative flex h-9 w-9 items-center justify-center">
            <Leaf
              size={28}
              strokeWidth={2.5}
              className="absolute -rotate-45 text-white"
            />

            <Leaf
              size={28}
              strokeWidth={2.5}
              className="absolute rotate-45 text-[#b7e8da]"
            />
          </div>

          <span className="text-[17px] font-extrabold tracking-tight text-white">
            Massage
            <span className="text-[#68cbb5]">Connect</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 lg:flex">

          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                [
                  "text-[12px] font-semibold transition-colors",
                  isActive
                    ? "text-[#a3e4d3]"
                    : "text-white hover:text-[#a3e4d3]",
                ].join(" ")
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 md:flex">

          <button
            type="button"
            aria-label="Open search"
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
          >
            <Search size={20} />
          </button>

          <Link
            to="/login"
            className="flex h-9 items-center rounded-full border border-white/20 bg-white/15 px-5 text-[12px] font-semibold text-white backdrop-blur-md hover:bg-white/25"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="flex h-9 items-center rounded-full bg-brand-pink px-6 text-[12px] font-bold text-brand-heading hover:bg-[#f48da9]"
          >
            Sign Up
          </Link>

        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-4 md:hidden">

          <button
            type="button"
            aria-label="Open search"
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white"
          >
            <Search size={21} />
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>

      </div>

      {/* SEARCH DROPDOWN */}
      {searchOpen && (
        <div className="absolute right-5 top-[75px] z-50 w-[calc(100%-40px)] max-w-[350px] rounded-xl border border-brand-border bg-white p-4 shadow-xl md:right-9">

          <div className="flex items-center gap-3">

            <Search
              size={19}
              className="shrink-0 text-brand"
            />

            <input
              autoFocus
              type="search"
              placeholder="Search clinics, events..."
              aria-label="Search clinics and events"
              className="w-full border-none bg-transparent text-sm text-brand-heading outline-none placeholder:text-gray-400"
            />

          </div>

        </div>
      )}

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="mx-4 rounded-2xl border border-white/15 bg-[#073f3b]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">

          <nav className="flex flex-col gap-1">

            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    "rounded-lg px-3 py-3 text-[13px] font-semibold transition",
                    isActive
                      ? "bg-white/10 text-[#a3e4d3]"
                      : "text-white hover:bg-white/10",
                  ].join(" ")
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/15 pt-5">

            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs text-white hover:bg-white/20"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 items-center justify-center rounded-full bg-brand-pink text-xs font-bold text-brand-heading hover:bg-[#f48da9]"
            >
              Sign Up
              <ArrowRight size={14} className="ml-1" />
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}