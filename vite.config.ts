import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import { VitePluginNode } from "vite-plugin-node";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ...VitePluginNode({
    //   adapter: "koa",
    //   appPath: "./server/app.ts",
    //   exportName: "viteNodeApp",
    // }),
  ],
});
