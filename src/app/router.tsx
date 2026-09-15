import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { ROUTES } from "./routes";
import HomePage from "../pages/HomePage";

import NotFoundPage from "../pages/NotFoundPage";
import PartnerPageLazy from "../pages/PartnerPage.lazy";
import ContactsPageLazy from "../pages/ContactsPage.lazy";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.home,
        element: <HomePage />,
      },
      {
        path: ROUTES.partners,
        element: <PartnerPageLazy />,
      },
      {
        path: ROUTES.contacts,
        element: <ContactsPageLazy />,
      },
      {
        path: ROUTES.notFoundPage,
        element: <NotFoundPage />,
      },
    ],
  },
]);
