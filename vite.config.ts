import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 1）base 用于构建后文件中对资源路径的引用。
  //   部署到 https://<用户名>.github.io/mrdriver_frontend/ 时，推荐写成 '/mrdriver_frontend/'
  base: '/mrdriver_frontend/',
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
