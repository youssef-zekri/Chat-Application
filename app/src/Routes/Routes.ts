import React from "react";
import MainLayouts from "../Layouts/MainLayouts";


const Auth = React.lazy(() => import("../views/Auth"));
const Chat = React.lazy(() => import("../views/Chat"));
const Home = React.lazy(() => import("../views/home"));
const Profile = React.lazy(() => import("../views/Profile"));
const Settings = React.lazy(() => import("../views/Settings"));

enum RoutePath {
    HOME = '/',
    Profile = '/Profile',
    Chat = '/Chat',
    Settings = '/Settings',
    Auth = '/Auth'
  
}
  
interface Route {
  path: RoutePath;
  component: React.ComponentType<any> ;
  layout : any;
  exact?: boolean ;
}
  
export const routes: Route[] = [
    {
      path: RoutePath.HOME,
      component: Home,
      layout : MainLayouts,
      exact: true,
    },
    {
      path: RoutePath.Profile,
      component: Profile,
      layout : MainLayouts,
      exact: true,
    },
    {
      path: RoutePath.Chat,
      component: Chat,
      layout : MainLayouts,
      exact: true,
    },
    {
      path: RoutePath.Settings,
      component: Settings,
      layout : MainLayouts,
      exact: true,
    },
    {
      path: RoutePath.Auth,
      component: Auth,
      layout : MainLayouts,
      exact: true,
    }
  ];

  
