interface IRoute {
  path?: string;
  icon?: string;
  name: string;
  routes?: IRoute[];
  checkActive?(pathname: String, route: IRoute): boolean;
  exact?: boolean;
}

export function routeIsActive(pathname: String, route: IRoute): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route);
  }

  return route?.exact
    ? pathname == route?.path
    : route?.path
    ? pathname.indexOf(route.path) === 0
    : false;
}

const routes: IRoute[] = [
  {
    path: "/",
    icon: "HomeIcon",
    name: "Dashboard",
    exact: true,
  },
  {
    path: "/charts",
    icon: "ChartsIcon",
    name: "Charts",
  },

  {
    path: "/tables",
    icon: "TablesIcon",
    name: "Tables",
  },
  {
    icon: "PagesIcon",
    name: "Pages",
    routes: [
      {
        path: "/login",
        name: "Login",
      },
      {
        path: "/create-account",
        name: "Create account",
      },
      {
        path: "/forgot-password",
        name: "Forgot password",
      },
      {
        path: "/404",
        name: "404",
      },
      {
        path: "/blank",
        name: "Blank",
      },
    ],
  },
];

export type { IRoute };
export default routes;
