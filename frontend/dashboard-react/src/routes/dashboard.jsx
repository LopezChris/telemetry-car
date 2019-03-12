// dashRoutes[0].component calls on Dashboard component to be page rendered
import Dashboard from "views/Dashboard/Dashboard.jsx";
//import Sensors from "views/Sensors/Sensors.jsx";
import Sensors from "views/Sensors/Sensors.jsx"

import Icons from "views/Icons/Icons.jsx";
import Notifications from "views/Notifications/Notifications.jsx";

import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import Upgrade from "views/Upgrade/Upgrade.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  },
  { 
    path: "/sensors", 
    name: "Sensors", 
    icon: "design_image", 
    component: Sensors 
  },
  { 
    path: "/lane-curvature", 
    name: "Lane-Curvature", 
    icon: "location_map-big", 
    component: Maps 
  },
  {
    path: "/behavior-cloning",
    name: "Behavior-Cloning",
    icon: "ui-1_bell-53",
    component: Notifications
  },
  {
    path: "/kalman-filters",
    name: "Kalman-Filters",
    icon: "users_single-02",
    component: UserPage
  },
  {
    path: "/localization",
    name: "Localization",
    icon: "files_paper",
    component: TableList
  },
  {
    path: "/path-planning",
    name: "Path-Planning",
    icon: "design-2_ruler-pencil",
    component: Typography
  },
  {
    path: "/self-driving",
    name: "Self-Driving",
    icon: "objects_spaceship",
    component: Upgrade
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
