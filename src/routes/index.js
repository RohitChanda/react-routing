import {
  RouterProvider,
  createBrowserRouter,
  // useRoutes,
} from "react-router-dom";
import { MainRoutes } from "./MainRoutes";
import { UserRoutes } from "./UsersRoutes";


export default function RoutesComponent() {
  const routes = createBrowserRouter([MainRoutes, UserRoutes]);

  return (
    <RouterProvider router={routes}/>
  )
}
