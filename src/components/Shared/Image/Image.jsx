import React from "react";
import portraitPlaceholder from "../../../resources/images/img-placeholder-v.png";
import { useApiConfiguration } from "../../../hooks/query.hooks";
import { createImageUrl } from "../../../utils/utils";

function Image({ imagePath, imageType, size, orientation }) {
  const { data: config, isLoading, isError } = useApiConfiguration();
  if (isError || isLoading)
    return <img src={portraitPlaceholder} alt={imageType} />;

  const url = createImageUrl(size, imageType, config, imagePath);
  const imgUrl = url ? url : portraitPlaceholder;

  return <img src={imgUrl} alt={imageType} />;
}

export default Image;
