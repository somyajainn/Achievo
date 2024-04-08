import {
  MdDashboard,
  MdOutlinePendingActions,
  MdSettings,
  MdTaskAlt,
} from "react-icons/md";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { FaTasks, FaTrashAlt } from "react-icons/fa";
export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <MdDashboard />,
  },
  {
    key: "tasks",
    label: "Tasks",
    path: "/Tasks",
    icon: <FaTasks />,
  },
  {
    key: "completed",
    label: "Completed",
    path: "/completed",
    filePath: "/completed.jsx",
    icon: <MdTaskAlt />,
  },
  {
    key: "in progress",
    label: "In Progress",
    path: "/in progress",
    icon: <MdOutlinePendingActions />,
  },
  {
    key: "todo",
    label: "ToDo",
    path: "/todo",
    icon: <MdOutlinePendingActions />,
  },
  {
    key: "trash",
    label: "Trash",
    path: "/trash",
    icon: <FaTrashAlt />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <MdSettings />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
