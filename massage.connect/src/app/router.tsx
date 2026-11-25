import { createBrowserRouter } from "react-router";

import PublicLayout from "@/layouts/PublicLayout";

import HomePage from "@/pages/HomePage";
import ClinicsPage from "@/pages/ClinicsPage";
import ClinicDetailsPage from "@/pages/ClinicDetailsPage";
import EventDetailsPage from "@/pages/EventDetailsPage";
import LiveSessionDetailsPage from "@/pages/LiveSessionDetailsPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "clinics",
        element: <ClinicsPage />,
      },
      {
        path: "clinics/:slug",
        element: <ClinicDetailsPage />,
      },
      {
        path: "events/:slug",
        element: <EventDetailsPage />,
      },
      {
        path: "live-sessions/:slug",
        element: <LiveSessionDetailsPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);