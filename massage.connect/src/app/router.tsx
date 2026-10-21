import { createBrowserRouter } from "react-router";

import PublicLayout from "@/layouts/PublicLayout";

import HomePage from "@/pages/HomePage";
import ClinicsPage from "@/pages/ClinicsPage";

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
    ],
  },
]);