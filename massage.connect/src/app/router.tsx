import { createBrowserRouter } from "react-router";

import PublicLayout from "@/layouts/PublicLayout";

import HomePage from "@/pages/HomePage";
import ClinicsPage from "@/pages/ClinicsPage";
import ClinicDetailsPage from "@/pages/ClinicDetailsPage";

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
    ],
  },
]);