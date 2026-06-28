import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Truong Nguyen — Senior Frontend Developer",
    short_name: "Truong Nguyen",
    description: "Portfolio of Truong Nguyen, Senior Frontend Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#05060a",
    theme_color: "#05060a",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }],
  };
}
