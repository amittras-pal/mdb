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
  if (!imgConfig?.[key]?.includes(size)) return null;
  return imgConfig.secure_base_url + size + imagePath;
}

export function blurView(elementId, apply) {
  const element = document.getElementById(elementId);
  if (apply) element.classList.add("blocked-view");
  else if (element.classList.contains("blocked-view"))
    element.classList.remove("blocked-view");
}

export async function downloadImage(imageUrl, fileName) {
  const imageData = await fetch(imageUrl);
  const imgBlob = await imageData.blob();
  const imgUrl = URL.createObjectURL(imgBlob);
  const imgAnchor = document.createElement("a");
  imgAnchor.href = imgUrl;
  imgAnchor.download = fileName;
  imgAnchor.click();
  setTimeout(() => imgAnchor.remove(), 500);
}
