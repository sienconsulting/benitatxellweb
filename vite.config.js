import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/benitatxellweb/", // nombre EXACTO del repo de GitHub
});
