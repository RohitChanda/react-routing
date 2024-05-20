import React, { lazy } from "react";
import ErrorPage from "../Component/ErrorPage"
import { SuspenseLoadable } from "../helper/common";
import MainLayout from "../Component/MainLayout";

const HomeComponent = SuspenseLoadable(lazy(() => import("../Component/Home")));
const AboutComponent = SuspenseLoadable(lazy(() => import("../Component/About")));
const ContactComponent = SuspenseLoadable(lazy(() => import("../Component/Contact")));

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