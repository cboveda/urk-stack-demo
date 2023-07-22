import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import { VitePluginNode } from "vite-plugin-node";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   port: 3000,
  // },
  plugins: [
    react(),
    // ...VitePluginNode({
    //   adapter: "koa",
    //   appPath: "./app.ts",
    //   exportName: "viteNodeApp",
    // }),
  ],
});
