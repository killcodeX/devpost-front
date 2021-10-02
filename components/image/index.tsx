import React from "react";
import { getStrapiMedia } from "../../lib/media";

export default function Image({ image, style }: any) {
  const imageUrl = getStrapiMedia(image);

  return (
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    />
  );
}
