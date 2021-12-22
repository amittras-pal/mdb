import { APP_TITLE } from "../constants/appConstants";

export function setDocTitle(title) {
  const newTitle = title ? `${APP_TITLE} | ${title}` : APP_TITLE;
  document.querySelector("title").textContent = newTitle;
}

export function createImageUrl(
  size = "original",
  imageType,
  config,
  imagePath
) {
  if (!imagePath) return null;
  let key = "";
  switch (imageType) {
    case "poster":
      key = "poster_sizes";
      break;
    case "backdrop":
      key = "backdrop_sizes";
      break;
    case "logo":
      key = "logo_sizes";
      break;
    case "profile":
      key = "profile_sizes";
      break;
    case "still":
      key = "still_sizes";
      break;
    default:
      break;
  }
  const imgConfig = config?.data?.images;
  if (!imgConfig[key].includes(size)) return null;
  return imgConfig.secure_base_url + size + imagePath;
}
