import React, { lazy } from "react";
import ErrorPage from "../views/ErrorPage";
import { SuspenseLoadable } from "../helper/common";
import MainLayout from "../component/MainLayout";
import ProtectedRoutes from "../component/ProtectedRoutes";

const UserdetailsComponent = SuspenseLoadable(
  lazy(() => import("../views/Userdetails"))
);
const UsersListComponent = SuspenseLoadable(
  lazy(() => import("../views/UsersList"))
);

export const UserRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "user/:userId",
      element: (
        <ProtectedRoutes>
          <UserdetailsComponent />
        </ProtectedRoutes>
      ),
    },
    {
      path: "users-list",
      element: <UsersListComponent />,
    },
  ],
  errorElement: <ErrorPage />,
};
