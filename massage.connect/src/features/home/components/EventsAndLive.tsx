import UpcomingEvent from "./UpcomingEvent";
import LiveNow from "./LiveNow";

export default function EventsAndLive() {
  return (
    <section
      id="events"
      className="
        mx-auto w-full max-w-[1350px]
        px-4 pb-4 pt-2
        sm:px-5 sm:pb-6
        md:px-9
        lg:px-[35px]
      "
    >
      <div
        className="
          grid grid-cols-1
          gap-4
          sm:gap-5
          lg:grid-cols-[2.2fr_1fr]
        "
      >
        <UpcomingEvent />

        <LiveNow />
      </div>
    </section>
  );
}