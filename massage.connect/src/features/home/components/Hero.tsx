import { useState } from "react";
import { useNavigate } from "react-router";

import {
  MapPin,
  Search,
  LocateFixed,
  LoaderCircle,
} from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [error, setError] = useState("");

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!location.trim()) {
      setError("Please enter your location.");
      return;
    }

    navigate(`/clinics?location=${encodeURIComponent(location.trim())}`);
  }

  function detectLocation() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLoadingLocation(false);

        navigate(
          `/clinics?lat=${latitude}&lng=${longitude}`
        );
      },
      (error) => {
        setLoadingLocation(false);

        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError("Location permission was denied.");
            break;

          case error.POSITION_UNAVAILABLE:
            setError("Your location is currently unavailable.");
            break;

          case error.TIMEOUT:
            setError("Location request timed out. Please try again.");
            break;

          default:
            setError("Unable to determine your location.");
        }
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[420px] items-center overflow-hidden bg-[#092b29] md:min-h-[475px]"
    >
      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-cover bg-[65%_center] bg-no-repeat
          md:bg-center
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=2000&q=90')",
        }}
      />

      {/* Desktop Gradient Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#061d1c]/95
          via-[#061d1c]/75
          to-[#061d1c]/10
          md:from-[#061d1c]/95
          md:via-[#061d1c]/65
          md:to-transparent
        "
      />

      {/* Mobile Gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[#061d1c]/90
          via-transparent
          to-transparent
          md:hidden
        "
      />

      {/* Hero Content */}
      <div
        className="
          relative z-10
          mx-auto w-full max-w-[1350px]
          px-5 pb-8 pt-32
          md:px-9 md:pb-12 md:pt-28
          lg:px-[35px]
        "
      >
        <div className="max-w-[590px]">

          {/* Eyebrow */}
          <p
            className="
              mb-3
              text-[10px] font-bold uppercase
              tracking-[0.18em]
              text-[#a3e4d3]
              md:text-[13px]
            "
          >
            Relax
            <span className="mx-2 text-white">·</span>
            Recharge
            <span className="mx-2 text-white">·</span>
            Connect
          </p>

          {/* Heading */}
          <h1
            className="
              max-w-[560px]
              text-[31px] font-extrabold
              leading-[1.12] tracking-[-0.035em]
              text-white
              sm:text-[38px]
              md:text-[46px]
              lg:text-[48px]
            "
          >
            Find the Best
            <br />
            Massage Clinics Near You
          </h1>

          {/* Description */}
          <p
            className="
              mt-4 max-w-[480px]
              text-[12px] font-medium
              leading-[1.65] text-white/95
              md:mt-5 md:text-[15px]
            "
          >
            Discover top-rated massage clinics, join special events,
            book live sessions, and get your ticket — all in one place.
          </p>

          {/* Location Search */}
          <form
            onSubmit={handleSearch}
            className="
              mt-6 flex h-[48px] w-full
              max-w-[510px] items-center
              rounded-full bg-white
              p-[5px] shadow-xl
              md:mt-7 md:h-[52px]
            "
          >
            <MapPin
              size={19}
              strokeWidth={2.5}
              className="ml-3 shrink-0 text-[#173b3c]"
            />

            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Enter your location"
              aria-label="Enter your location"
              className="
                h-full min-w-0 flex-1
                bg-transparent px-3
                text-[12px] text-[#183839]
                outline-none
                placeholder:text-[#8c999b]
                md:text-[13px]
              "
            />

            {/* Auto Location */}
            <button
              type="button"
              onClick={detectLocation}
              disabled={loadingLocation}
              title="Use my current location"
              aria-label="Use my current location"
              className="
                flex h-9 w-9 shrink-0
                items-center justify-center
                rounded-full text-brand
                transition hover:bg-brand-light
                disabled:opacity-50
              "
            >
              {loadingLocation ? (
                <LoaderCircle size={18} className="animate-spin" />
              ) : (
                <LocateFixed size={19} />
              )}
            </button>

            {/* Search */}
            <button
              type="submit"
              aria-label="Search massage clinics"
              className="
                flex h-[39px] w-[39px]
                shrink-0 items-center justify-center
                rounded-full bg-brand text-white
                transition hover:bg-brand-dark
                md:h-[42px] md:w-[42px]
              "
            >
              <Search size={19} />
            </button>
          </form>

          {/* Error */}
          {error && (
            <p
              role="alert"
              className="mt-3 text-[12px] font-medium text-[#ffc0c9]"
            >
              {error}
            </p>
          )}

        </div>
      </div>
    </section>
  );
}