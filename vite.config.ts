import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use root path for all deployments
  base: '/',
  // 2）将构建输出目录改为 dist，标准 Vite 行为
  build: {
    outDir: 'dist',
    emptyOutDir: true,   // 每次构建前清空 dist/
  },
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true, // Fix for client-side routing
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
