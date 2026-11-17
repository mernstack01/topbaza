import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UzMO.uz - Xizmatlar va maskanlar Portali",
    short_name: "UzMO.uz",
    description: "Sirdaryo va butun O'zbekiston bo'yicha mutaxassislar, kadrlar va xizmatlar ma'lumotlar bazasi.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdfa",
    theme_color: "#1d4ed8",
    icons: [
      {
        src: "/uzmo-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/uzmo-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
