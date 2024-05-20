import React, { lazy } from "react";
import ErrorPage from "../Component/ErrorPage"
import { SuspenseLoadable } from "../helper/common";
import MainLayout from "../Component/MainLayout";

const UserdetailsComponent = SuspenseLoadable(lazy(() => import("../Component/Userdetails")));
const UsersListComponent = SuspenseLoadable(lazy(() => import("../Component/UsersList")));

export const UserRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "user/:userId",
      element: <UserdetailsComponent />,
    },
    {
      path: "users-list",
      element:<UsersListComponent />
    },
  ],
  errorElement: <ErrorPage />,
};