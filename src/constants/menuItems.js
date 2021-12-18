import {
  faFeather,
  faFire,
  faHome,
  faInfoCircle,
  faPowerOff,
  faStar,
  faTrophy,
  faTv,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export const menu = [
  {
    menuHeading: "explore",
    menuItems: [
      { id: "home", label: "Home", icon: faHome, path: "/" },
      { id: "awards", label: "Awards", icon: faTrophy, path: "/awards" },
      { id: "celebs", label: "Celebs", icon: faUsers, path: "/celebs" },
      { id: "trending", label: "Trending", icon: faFire, path: "/trending" },
      { id: "topRated", label: "Top Rated", icon: faStar, path: "/top-rated" },
    ],
  },
  // {
  //   menuHeading: "Library",
  //   menuItems: [
  //     { id: "awards", label: "Awards", icon: faTrophy, path: "/" },
  //     { id: "celebs", label: "Celebs", icon: faUsers, path: "/" },
  //     { id: "trending", label: "Trending", icon: faFire, path: "/" },
  //     { id: "topRated", label: "Top Rated", icon: faStar, path: "/" },
  //   ],
  // },
  {
    menuHeading: "Categories",
    menuItems: [
      { id: "tv", label: "TV Shows", icon: faTv, path: "/tv" },
      { id: "movies", label: "Movies", icon: faVideo, path: "/movies" },
      { id: "anime", label: "Anime", icon: faFeather, path: "/anime" },
    ],
  },
  {
    menuHeading: "General",
    menuItems: [
      { id: "about", label: "About", icon: faInfoCircle, path: "/about" },
      { id: "login", label: "Login", icon: faPowerOff, path: "/login" },
    ],
  },
];
