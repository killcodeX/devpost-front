import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  if (media?.url) {
    const imageUrl = media.url.startsWith("/")
      ? "https://res.cloudinary.com/journalbit/image"
      : media.url;
    return imageUrl;
  }
}
