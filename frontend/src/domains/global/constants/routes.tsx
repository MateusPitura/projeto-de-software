import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { lazy, ReactNode } from "react";

interface Route {
  path: string;
  displayName?: string;
  icon?: ReactNode;
  entryPage: ReactNode;
  shouldDisplay: boolean;
}

interface RouteGroup {
  groupName: string;
  routes: Route[];
}

const Vehicles = lazy(
  () => import("@/domains/vehicles/components/VehiclesPage")
);
const Users = lazy(() => import("@/domains/users/components/UsersPage"));
const NewUsers = lazy(() => import("@/domains/users/components/NewUsersPage"));
const Profile = lazy(() => import("@/domains/profile/components/ProfilePage"));
const Branches = lazy(
  () => import("@/domains/branches/components/BranchesPage")
);
const Audit = lazy(() => import("@/domains/audit/components/AuditPage"));
const NotFound = lazy(() => import("@/domains/global/components/NotFoundPage"));

export const routes: RouteGroup[] = [
  {
    groupName: "Cadastros",
    routes: [
      {
        path: "/users",
        displayName: "Usuários",
        icon: <PersonOutlinedIcon />,
        entryPage: <Users />,
        shouldDisplay: true,
      },
      {
        path: "/users/new",
        entryPage: <NewUsers />,
        shouldDisplay: false,
      },
      {
        path: "/vehicles",
        displayName: "Veículos",
        icon: <DirectionsCarOutlinedIcon />,
        entryPage: <Vehicles />,
        shouldDisplay: true,
      },
      {
        path: "/branches",
        displayName: "Filiais",
        icon: <StoreOutlinedIcon />,
        entryPage: <Branches />,
        shouldDisplay: true,
      },
    ],
  },
  {
    groupName: "Configurações",
    routes: [
      {
        path: "/",
        displayName: "Perfil",
        icon: <SettingsOutlinedIcon />,
        entryPage: <Profile />,
        shouldDisplay: true,
      },
    ],
  },
  {
    groupName: "Outros",
    routes: [
      {
        path: "/audit",
        displayName: "Auditoria",
        icon: <VerifiedUserOutlinedIcon />,
        entryPage: <Audit />,
        shouldDisplay: true,
      },
      {
        path: "*",
        entryPage: <NotFound />,
        shouldDisplay: false,
      },
    ],
  },
];
