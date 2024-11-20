import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  
  build: {
    // minify: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 这里实现 chunk 的拆分
          if (id.includes("node_modules/@aibee/crc-bmap")) {
            return "crc-bmap"; // 指定模块名称将会打包成 `crc-bmap.js`
          }
        },
        entryFileNames: "[name].js", // 入口文件名
        chunkFileNames: "chunks/[name].js", // 抽取 chunk 的文件名
        assetFileNames: "assets/[name].[ext]", // 资源文件名
      },
    },
  },
  define: {
    "process.env.CRC_BMAP_MODE": JSON.stringify("online"),
  },
});
