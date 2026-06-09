import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://brneha247.github.io",
  base: "/EMG-Controlled-Robotic-Hand-Assist-Device",

  vite: {
    plugins: [tailwindcss()],
  },
});