import {
  faCompass,
  faFeather,
  faFire,
  faHome,
  faPowerOff,
  faStar,
  faTrophy,
  faTv,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export const menu = [
  {
    menuHeading: "Menu",
    menuItems: [
      { id: "home", label: "Home", icon: faHome },
      { id: "discover", label: "Discover", icon: faCompass },
    ],
  },
  {
    menuHeading: "Library",
    menuItems: [
      { id: "awards", label: "Awards", icon: faTrophy },
      { id: "celebs", label: "Celebs", icon: faUsers },
      { id: "trending", label: "Trending", icon: faFire },
      { id: "topRated", label: "Top Rated", icon: faStar },
    ],
  },
  {
    menuHeading: "Categories",
    menuItems: [
      { id: "tvShows", label: "Awards", icon: faTv },
      { id: "movies", label: "Movies", icon: faVideo },
      { id: "anime", label: "Anime", icon: faFeather },
    ],
  },
  {
    menuHeading: "General",
    menuItems: [{ id: "logout", label: "Logout", icon: faPowerOff }],
  },
];
