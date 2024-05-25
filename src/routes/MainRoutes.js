import React, { lazy } from "react";
import ErrorPage from "../views/ErrorPage"
import { SuspenseLoadable } from "../helper/common";
import MainLayout from "../component/MainLayout";

const HomeComponent = SuspenseLoadable(lazy(() => import("../views/Home")));
const AboutComponent = SuspenseLoadable(lazy(() => import("../views/About")));
const ContactComponent = SuspenseLoadable(lazy(() => import("../views/Contact")));

export const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <HomeComponent />,
    },
    {
      path: "about",
      element:<AboutComponent />
    },
    {
      path: "contact",
      element: <ContactComponent />,
    },
  ],
  errorElement: <ErrorPage />,
};