import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPath from "vite-tsconfig-paths";
import * as path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPath()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
