import React from "react";
import { useApiConfiguration } from "../../../hooks/query.hooks";
import landscape from "../../../resources/images/landscape-placeholder.png";
import portrait from "../../../resources/images/portrait-placeholder.png";
import { createImageUrl } from "../../../utils/utils";

function Image({ imagePath, imageType, size, orientation }) {
  const { data: config, isLoading, isError } = useApiConfiguration();

  function retrieveImage() {
    return imageType === "logo" ? landscape : portrait;
  }

  if (isError || isLoading)
    return <img src={retrieveImage()} alt={imageType} />;

  const url = createImageUrl(size, imageType, config, imagePath);
  const imgUrl = url ? url : retrieveImage();

  return <img src={imgUrl} alt={imageType} />;
}

export default Image;
