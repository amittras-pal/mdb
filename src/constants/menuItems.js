import { faCompass } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faInfoCircle,
  faTv,
  faVideo,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const menu = [
  {
    menuHeading: "explore",
    menuItems: [
      { id: "home", label: "Home", icon: faHome, path: "/" },
      { id: "discover", label: "Discover", icon: faCompass, path: "/discover" },
    ],
  },
  {
    menuHeading: "Categories",
    menuItems: [
      { id: "movies", label: "Movies", icon: faVideo, path: "/movies" },
      { id: "tv", label: "TV Shows", icon: faTv, path: "/tv" },
      { id: "people", label: "People", icon: faUsers, path: "/people" },
    ],
  },
  {
    menuHeading: "General",
    menuItems: [
      { id: "about", label: "About", icon: faInfoCircle, path: "/about" },
    ],
  },
];
