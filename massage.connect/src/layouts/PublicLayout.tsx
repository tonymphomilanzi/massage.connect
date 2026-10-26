import { Outlet } from "react-router";

import Header from "@/components/layout/Header";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-brand-background">

      <div className="relative mx-auto min-h-screen max-w-[1480px] overflow-hidden bg-white shadow-lg md:my-5 md:rounded-2xl">

        <Header />

        <Outlet />

      </div>

    </div>
  );
}